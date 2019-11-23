var readmoreConfig = {};

module.exports = {
    hooks: {
        "init": function() {
            this.log.debug.ln('init', this.options.pluginsConfig.readmore);

            readmoreConfig = this.options.pluginsConfig.readmore;
        },
        "page": function(page) {
            this.log.debug.ln('page', JSON.stringify(page.content));

            if (readmoreConfig) {
                readmoreConfig.id = 'vip-container';
                var str = `
                <div id="vip-container">
                    ${page.content}
                </div>
                <script src="https://my.openwrite.cn/js/readmore.js"></script>
                <script>
                    var isMobile = navigator.userAgent.match(/(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i);
                    if (!isMobile) {
                        var btw = new BTWPlugin();
                        btw.init(${JSON.stringify(readmoreConfig)});
                    }
                </script>`;

                page.content = str;
            }

            return page;
        }
    }
};