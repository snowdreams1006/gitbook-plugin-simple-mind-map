/*
 *  ===============================================================
 *      snowdreams1006 is not just for programmers
 *  ===============================================================
 *
 *  - Document: index.js
 *  - Author: snowdreams1006
 *  - Description: Gitbook plugin index
 */

require('./plugin.css');
require('markmap/style/view.mindmap.css');
require('markmap/lib/d3-flextree');
const markmap = require('markmap/lib/view.mindmap');
const parse = require('markmap/lib/parse.markdown');
const transform = require('markmap/lib/transform.headings');

var entry = function entry() {
    $("svg.simple-mind-map").each(function () {
      var $svg = $(this);
      
      var pluginConfig = $svg.data("plugin-config") || {};
      var blockConfig = $svg.data("block-config") || {}
      var text = $svg.data("svg-text");
      if(text){
        text = JSON.parse(text);
        var data = transform(parse(text));
        markmap($svg[0], data, {
          preset: 'colorful',
          linkShape: 'diagonal'
        });
      }
    });
};

gitbook.events.bind("page.change", entry);