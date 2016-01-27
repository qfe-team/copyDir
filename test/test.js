var copyDir=require('../index.js');

copyDir({
    rootPath: '/Users/chenhao/工程/开发环境/qian360/webapps/',
    filePathList: [
        '/Users/chenhao/工程/开发环境/qian360/webapps/ROOT/themes/soonmes_qzw_v2/style/member.css',
        '/Users/chenhao/工程/开发环境/qian360/webapps/ROOT/themes/soonmes_qzw_v2/script/page/tenderConfirm.js',
        '/Users/chenhao/工程/开发环境/qian360/webapps/ROOT/WEB-INF/html_qzw_v2/dialog/tenderConfirm.html',
        '/Users/chenhao/工程/开发环境/qian360/webapps/ROOT/WEB-INF/html_qzw_v2/personalCenter/redPacket.html',
        '/Users/chenhao/工程/开发环境/qian360/webapps/ROOT/WEB-INF/html_qzw_v2/personalCenter/redPacketExchange.html',
        '/Users/chenhao/工程/开发环境/qian360/webapps/ROOT/WEB-INF/html_qzw_v2/personalCenter/redPacketOutdate.html',
        '/Users/chenhao/工程/开发环境/qian360/webapps/ROOT/themes/soonmes_qzw_v2/activity/offlinePromote/common/script/diff.js',
        '/Users/chenhao/工程/开发环境/qian360/webapps/ROOT/themes/soonmes_qzw_v2/script/page/redpacket.js',
        '/Users/chenhao/工程/开发环境/qian360/webapps/ROOT/themes/soonmes_qzw_v2/script/page/awardRecord.js',
        '/Users/chenhao/工程/开发环境/qian360/webapps/ROOT/WEB-INF/html_qzw_v2/personalCenter/include/left.html',
        '/Users/chenhao/工程/开发环境/qian360/webapps/ROOT/WEB-INF/html_qzw_v2/article/help/accountInfo.html',
        '/Users/chenhao/工程/开发环境/qian360/webapps/ROOT/WEB-INF/html_qzw_v2/personalCenter/allAwardRecord.html',
    ],
    createPath: './',
    isLog: true
});