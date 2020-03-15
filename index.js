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

const reg = /^\s*```\s{0,4}mind(?::(.+))?((.*[\r\n]+)+?)?\s*```$/im;
const escapeHTML = str => str.replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;');

const handler = page => {
    this.log.debug.ln("page:before", this.options.pluginsConfig["simple-mind-map"]);

    // let result;

    // while ((result = reg.exec(page.content))) {
    //     const [block, conditions, content] = result;
    //     const {height, color, title} = (conditions || '').split(',').reduce((obj, cond) => {
    //         const [key, value] = cond.split('=');
    //         obj[key] = value || true;
    //         return obj;
    //     }, {});

    //     page.content = page.content.replace(block, `<p class="mindmaps-wrapper" align="center"><svg
    //         style="${height ? `height: ${height}px` : ''}"
    //         class="mindmaps" ${color ? 'color="true"' : ''}
    //         data-content="${escapeHTML(JSON.stringify(content))}"></svg>
    //         ${title ? `<p align="center">${title}</p>` : ''}</p>`);
    // }

    return page;
};

module.exports = {
    book: {
        assets: "./assets",
        css: ["plugin.css"],
        js: ["plugin.js"],
    },
    hooks: {
        "page:before": handler
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