var fs = require('fs');
var path = require('path');
var cpdir = require('./index');
var child = require('child_process')
var exec = child.exec;

/**
* config
* sourcePath: 源文件目录
* distPath：生成到地址
* appointPaths：需要指定差异的文件夹
* extraFiles：添加额外的文件
**/

var config = {
	sourcePath: 'e:/www/qian360/webapps/ROOT',
	distPath: 'c:/Users/Administrator/Desktop',
	extraFiles: ['e:/www/qian360/webapps/ROOT/WEB-INF/html_qzw_v2/include/head.html','e:/www/qian360/webapps/ROOT/WEB-INF/html_qzw_v2/index.html'],
	appointPaths: ['./WEB-INF/html_qzw_v2','./themes/soonmes_qzw_v2']
}

// 命令行未输入 需要对比的版本号
if(process.argv[2] == undefined && process.argv[3] == undefined){
	console.error('please input git log number');
	console.log('for example: \n');
	console.log('node release2.js 168e775 82ba507');
	return false;
}
// 要执行的命令 拼接
var executiveCmdStr = 'git diff --name-only '+process.argv[2]+' '+process.argv[3]+' -- '+config.appointPaths.join(' ');
// diff文件 数组
var arr = [];
// 执行命令行
exec(executiveCmdStr, {
	cwd: config.sourcePath
}, function(error, stdout, stderr){
	// console.log('stdout: '+stdout);
	// console.log('stderr: '+stderr);
    if (error !== null) {
      console.log('exec error: '+error);
    }
    arr = stdout.split('\n');
    arr = arr.map(function(str){
    	return config.sourcePath +'/'+str
    })
    // 添加额外的文件
    arr = arr.concat(config.extraFiles);
    console.log(arr)
	cpdir({
	    rootPath: config.sourcePath,
	    filePathList: arr,
	    createPath: config.distPath,
	    isLog: false
	});
})