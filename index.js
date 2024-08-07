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
                var str = `
                <div id="container">
                    ${page.content}
                </div>
                <script src="https://blog.snowdreams1006.cn/assets/js/readmore.js" type="text/javascript"></script>
                <script>
                    const btw = new BTWPlugin();
                    let readmoreConfig = ${JSON.stringify(readmoreConfig)};
                    btw.init(readmoreConfig);
                </script>`;

                page.content = str;
            }

            return page;
        }
    }
};