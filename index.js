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
                <script src="https://readmore.openwrite.cn/js/readmore-2.0.js" type="text/javascript"></script>
                <script>
                    var enablePlugin = false;                    
                    var allowDomain = ${JSON.stringify(readmoreConfig.allowDomain)};
                    if(allowDomain){
                        var currentDomain = location.hostname;
                        if ($.isArray(allowDomain)) {
                            $.each(allowDomain, function(index, item) {
                                if (currentDomain == item) {
                                    enablePlugin = true;
                                    return false;
                                }
                            });
                        }else{
                           if (currentDomain == allowDomain) {
                                enablePlugin = true;
                            }
                        }
                    }else{
                        enablePlugin = true;
                    }
                    
                    if(enablePlugin){
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