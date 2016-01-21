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
            fs.createReadStream(obj.oldFilePath).pipe(fs.createWriteStream(obj.newFilePath));

            fileLength--;

            if (fileLength == 0) {
                opts.isLog && console.log('\n*^_^*\ncopy完成');
                typeof opts.callBack == "function" && opts.callBack();
            }
        });
    });

};

module.exports = copyDir;
