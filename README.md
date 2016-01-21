# cpFile
> 拷贝文件及目录结构

##api

| Option        | Type          | Explanation  |
| ------------- |:-------------:| :------------|
| rootPath      | {String}      | 拷贝文件相对的根目录 |
| filePathList  | {Array}       | 需要拷贝的文件的绝对路径列表 |
| createPath    | {String}      | 需要拷贝到的目标目录 |
| isLog         | {Boolean}     | 是否需要在控制台打印日志 |
| callBack      | {Function}    | copy结束后的回调函数 |


## 示例

```
copyDir({
    rootPath: '/Users/xyz/',
    filePathList: [
        '/Users/xyz/ROOT/themes/style/member.css',
        '/Users/xyz/ROOT/themes/script/page/tenderConfirm.js',
        '/Users/xyz/ROOT/WEB-INF/html_qzw_v2/dialog/tenderConfirm.html',
        '/Users/xyz/ROOT/WEB-INF/html_qzw_v2/personalCenter/redPacket.html',
        '/Users/xyz/ROOT/WEB-INF/html_qzw_v2/personalCenter/redPacketExchange.html',
        '/Users/xyz/ROOT/WEB-INF/html_qzw_v2/personalCenter/redPacketOutdate.html',
        '/Users/xyz/ROOT/themes/activity/offlinePromote/common/script/diff.js',
        '/Users/xyz/ROOT/themes/script/page/redpacket.js',
        '/Users/xyz/ROOT/themes/script/page/awardRecord.js',
        '/Users/xyz/ROOT/WEB-INF/html_qzw_v2/personalCenter/include/left.html'
    ],
    createPath: './',
    isLog: true
});
```
