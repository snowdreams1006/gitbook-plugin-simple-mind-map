var readmoreConfig = {};

module.exports = {
    book: {
        assets: "./assets",
        js: [
            "https://my.openwrite.cn/js/readmore.js",
            "readmore.js"
        ]
    },
    hooks: {
        "init": function() {
            this.log.debug.ln('init', this.options.pluginsConfig.readmore);

            readmoreConfig = this.options.pluginsConfig.readmore;
        },
        "page:before": function(page) {
            this.log.debug.ln('page:before', page.content);

            if (readmoreConfig) {
                var str = '<div id="vip-container">'+page.content+'</div>';

                page.content = str;
            }

            return page;
        },
        "page": function(page) {
            this.log.debug.ln('page', JSON.stringify(page.content));

            return page;
        },
        "finish:before": function() {
            this.log.debug.ln('finish:before', this.options.pluginsConfig.readmore);
        },
        "finish": function() {
            this.log.debug.ln('finish', this.options.pluginsConfig.readmore);
        }
    }
};