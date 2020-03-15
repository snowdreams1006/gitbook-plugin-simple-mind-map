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
require('markmap/style/view.mindmap.css');
require('./plugin.css');
require('markmap/lib/d3-flextree');
const markmap = require('markmap/lib/view.mindmap');
const parse = require('markmap/lib/parse.markdown');
const transform = require('markmap/lib/transform.headings');

const entry = () => $('svg.simple-mind-map').each(function () {
    const $svg = $(this);
    const text = JSON.parse($svg.data('content'));
    const data = transform(parse(text));

    

    // markmap($svg[0], data, {
    //     preset: $svg.attr('color') ? 'colorful' : 'default',
    //     linkShape: 'diagonal' // or bracket
    // });
});

gitbook.events.bind("start", entry);

gitbook.events.bind("page.change", entry);