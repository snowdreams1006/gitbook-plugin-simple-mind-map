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

var regex = /^\s*```\s{0,4}(?:Markdown|MindMup|Txtmap|Pandoc|md|json|mup|txtmap|\s*).*((?:.*[\r\n]+)+)+?\s*```$/im;
var escapeHTML = function escapeHTML(str) {
  return str.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;').replace(/'/g, '&apos;');
};

module.exports = {
    book: {
        assets: "./dist",
        css: ["plugin.min.css"],
        js: ["plugin.min.js"],
    },
    blocks: {
        simplemindmap: {
            process: function process(block) {
                var pluginConfig = this.options.pluginsConfig["simple-mind-map"] || {};
                pluginConfig = escapeHTML(JSON.stringify(pluginConfig));

                var blockConfig = block;
                blockConfig = escapeHTML(JSON.stringify(blockConfig));

                var rawBody = block.body;
                var result,text;
                if ((result = regex.exec(rawBody)) !== null) {
                    text = escapeHTML(JSON.stringify(result[1]));
                }
                
                block.body = '<svg class="simple-mind-map" data-plugin-config="'+(pluginConfig)+'" data-block-config="'+(blockConfig)+'" data-svg-text="'+(text)+'"></svg>';

                return block;
            }
        }
    }
};