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
                <script src="https://readmore.openwrite.cn/js/readmore.js" type="text/javascript"></script>
                <script>
                    const btw = new BTWPlugin();
                    btw.init(${JSON.stringify(readmoreConfig)});
                </script>`;

                page.content = str;
            }

            return page;
        }
    }
};