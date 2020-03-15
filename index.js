/*
 *  ===============================================================
 *                      Not just programmers
 *  ===============================================================
 *
 *  - Document: index.js
 *  - Author: snowdreams1006
 *  - Description: Gitbook plugin index
 *  - Create Time: 2020-03-15
 */

module.exports = {
    book: {
        assets: './assets',
        css: ['plugin.css'],
        js: ['plugin.js'],
    },
    hooks: {
        "page:before": function(page) {
            this.log.debug.ln("init", this.options.pluginsConfig["simple-mind-map"]);
        }
    },
    blocks: {
        simplemindmap: {
            process: function process(block) {
                console.log(block.body)
                console.log(block.args)
                console.log(block.kwargs)

                return block;
            }
        }
  }
};