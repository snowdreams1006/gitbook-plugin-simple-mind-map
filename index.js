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

var regex = /^\s*```(.*[\r\n]+)?((?:.*[\r\n]+)+?)??\s*```$/im;
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
                var blockConfig = block || {};
                var styleConfig = Object.assign({},(pluginConfig.style || {}), (blockConfig.kwargs.style || {}));
                var customStyle = '';
                if(styleConfig){
                    for (var style in styleConfig) { 
                        if (Object.prototype.hasOwnProperty.call(styleConfig, style)) { 
                            customStyle += style + ": " + styleConfig[style] + ";";
                        }
                    }
                }
                var rawBody = block.body;
                var result,type,text;
                if ((result = regex.exec(rawBody)) !== null) {
                    type = result[1];
                    if(type){
                        type = type.trim();
                    }
                    text = escapeHTML(JSON.stringify(result[2]));
                }
                var pluginType = pluginConfig.type;
                var blockType = blockConfig.kwargs.type;
                if(blockType){
                    type = blockType;
                }else{
                    if(!type){
                        type = pluginType;
                    }
                }
                block.body = '<svg class="simple-mind-map" style="'+(customStyle)+'" data-lang-type="'+(type)+'" data-plugin-config="'+(escapeHTML(JSON.stringify(pluginConfig)))+'" data-block-config="'+(escapeHTML(JSON.stringify(blockConfig)))+'" data-svg-text="'+(text)+'"></svg>';
                return block;
            }
        }
    }
};