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

var regex = /^\s*```(.*[\r\n]+)?((?:.*[\r\n]+)+?)??\s*```$/igm;
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
                if(!rawBody){
                    return block;
                }
                var result,type,text,textArr = [];
                while ((result = regex.exec(rawBody)) !== null) {
                    type = result[1];
                    if(type){
                        type = type.trim();
                    }
                    text = result[2];
                    if(text){
                        textArr.push(escapeHTML(JSON.stringify(text)));
                    }
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
                if(textArr && textArr.length > 0){
                    for (var i = 0; i < textArr.length; i++) {
                        (function(i){
                            var text = textArr[i];
                            block.body += '<svg class="simple-mind-map" style="'+(customStyle)+'" data-lang-type="'+(type)+'" data-plugin-config="'+(escapeHTML(JSON.stringify(pluginConfig)))+'" data-block-config="'+(escapeHTML(JSON.stringify(blockConfig)))+'" data-svg-text="'+(text)+'"></svg>\n';
                        })(i)
                    }
                    return block;
                }
                var markdownCode = block.body;
                return new Promise(resolve => {
                    resolve(this.book.renderBlock('markdown', markdownCode) .then(function(html) {
                        return html;
                    }));
                }).then(res => {
                    return res;
                });
            }
        }
    }
};