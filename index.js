/*
 *  ===============================================================
 *      snowdreams1006 is not just for programmers
 *  ===============================================================
 *
 *  - Document: index.js
 *  - Author: snowdreams1006
 *  - Description: Gitbook plugin index
 *  - Create Time: 2020-03-15
 */

var regex = /```.*[\r\n](?=((?:.+[\r\n]+[^`]{3})+))/im;
var escapeHTML = function escapeHTML(str) {
  return str.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;').replace(/'/g, '&apos;');
};

module.exports = {
    book: {
        assets: "./dist",
        js: ["bundle.js"],
    },
    blocks: {
        simplemindmap: {
            process: function process(block) {
                var pluginConfig = this.options.pluginsConfig["simple-mind-map"] || {};
                // console.log("pluginConfig",pluginConfig);

                var blockConfig = block || {};
                // console.log("blockConfig",blockConfig);

                var styleConfig = Object.assign((pluginConfig.style || {}), (blockConfig.kwargs.style || {}));
                // console.log("styleConfig",styleConfig);

                var customStyle = '';
                if(styleConfig){
                    for (var style in styleConfig) { 
                        if (Object.prototype.hasOwnProperty.call(styleConfig, style)) { 
                            customStyle += style + ": " + styleConfig[style] + ";";
                        } 
                    }
                }
                // console.log("customStyle",customStyle);

                var rawBody = block.body;
                console.log("rawBody",rawBody);
                console.log('---------');
                console.log(rawBody);
                console.log("---------");
                
                var result,text;
                if ((result = regex.exec(rawBody)) !== null) {
                    text = escapeHTML(JSON.stringify(result[1]));
                }
                console.log("text",text);
                
                console.log('---------');
                console.log(text);
                console.log("---------");
                
                block.body = '<svg class="simple-mind-map" style="'+(customStyle)+'" data-plugin-config="'+(escapeHTML(JSON.stringify(pluginConfig)))+'" data-block-config="'+(escapeHTML(JSON.stringify(blockConfig)))+'" data-svg-text="'+(text)+'"></svg>';

                return block;
            }
        }
    }
};