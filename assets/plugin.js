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
require('./plugin.css');
require('markmap/style/view.mindmap.css');
require('markmap/lib/d3-flextree');
const markmap = require('markmap/lib/view.mindmap');
const parse = require('markmap/lib/parse.markdown');
const transform = require('markmap/lib/transform.headings');

require([
    "gitbook",
    "jQuery"
], function(gitbook, $) {
    gitbook.events.bind("start",entry);
    gitbook.events.bind("page.change", entry);

    var entry = function entry() {
      return $('svg.simple-mind-map').each(function () {
        console.log(simplemindmapConfig);
        var $svg = $(this);
        var text = JSON.parse($svg.data('text'));
        var data = transform(parse(text));
        markmap($svg[0], data, {
          preset: 'colorful',
          linkShape: 'diagonal'
        });
      });
    };
});