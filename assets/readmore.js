require([
    "gitbook",
    "jQuery"
], function(gitbook, $) {
    var readmoreConfig = {};

    gitbook.events.bind("start", function(e, config) {
        readmoreConfig = config.readmore;
        if (readmoreConfig) {
            readmoreConfig.id = 'vip-container';
            initReadmore();
        }
    });

    gitbook.events.bind("page.change", initReadmore);

    function initReadmore() {
        if (readmoreConfig) {
            var isMobile = navigator.userAgent.match(/(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i);
            if (!isMobile) {
                var btw = new BTWPlugin();
                btw.init(readmoreConfig);
            }
        }
    }
});