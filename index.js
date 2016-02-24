var fs = require('fs'),
    path = require('path'),
    _ = require('underscore'),
    hfs = require('mass_fs');

var copyDir = function (opts) {

    // 设置参数
    opts = _.extend({
        rootPath: '',           // 根目录
        filePathList: [],       // 文件路径列表
        createPath: './',       // 生成的文件路径
        isLog: true,            // 是否打印日志
        isTimeStamp: false,     // 是否给html的js引用添加时间戳
        callBack: ''            // 回调函数
    }, opts);

    var fileLength = opts.filePathList;       // 文件数量

    // 过滤掉`rootPath`, 生成目标目录结构
    var filePathList = opts.filePathList.map(function (str) {
        return {
            oldFilePath: str,
            newFilePath: path.join(path.resolve(opts.createPath), str.replace(opts.rootPath, ''))
        }
    });

    // 打印日志
    if (opts.isLog) {
        console.log('根目录:\n' + opts.rootPath + '\n');
        console.log('目标目录结构:');
        console.log(filePathList);
    }

    // 创建文件
    filePathList.forEach(function (obj) {
        hfs.mkdir(path.dirname(obj.newFilePath), function () {

            if (path.basename(obj.newFilePath).indexOf('.html') > 0) {
                var data = fs.readFileSync(obj.oldFilePath).toString(),
                    timeMap = (new Date()).getTime(),
                    seaConfigReg = /<script id="seaConfig">(.+)<\/script>\n/ig,
                    seaConfigStr = 'seajs.config({\'map\': [[ /^(.*\.(?:css|js))(.*)$/i, \'$1?t=' + timeMap + '\' ] ] });',
                    imgTimeStampReg = /([url\(|src\=][\'|\"].*\.png|gif|jpg)(\?t=\d+)?([\'|\"])/ig,
                    cssTimeStampReg = /(<link.*href=[\'|\"].*\.css)(\?t=\d+)?([\'|\"]>)/ig,
                    jsTimeStampReg = /(<script.*src=[\'|\"].*\.js)(\?t=\d+)?([\'|\"]>)/ig;

                // 给seajs加载的模块加时间戳
                data = data.replace(seaConfigReg, '');
                data = data.replace('<script src="${webroot}${theme_dir}/script/sea.js"></script>', '<script src="${webroot}${theme_dir}/script/sea.js"></script>\n<script id="seaConfig">' + seaConfigStr + '</script>');
                data = data.replace('<script src="${webroot}${theme_dir}/mobile/script/sea.js"></script>', '<script src="${webroot}${theme_dir}/mobile/script/sea.js"></script>\n<script id="seaConfig">' + seaConfigStr + '</script>');

                // 给页内的外链加时间戳
                [imgTimeStampReg, cssTimeStampReg, jsTimeStampReg].forEach(function (reg) {
                    data = data.replace(reg, '$1?t=' + timeMap + '$3');
                });

                // 创建该文件
                hfs.writeFile(obj.newFilePath, data);
            } else {
                fs.createReadStream(obj.oldFilePath).pipe(fs.createWriteStream(obj.newFilePath));
            }

            fileLength--;

            if (fileLength == 0) {
                opts.isLog && console.log('\n*^_^*\ncopy完成');
                typeof opts.callBack == "function" && opts.callBack();
            }
        });
    });

};

module.exports = copyDir;
