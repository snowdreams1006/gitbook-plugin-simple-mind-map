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

// $("svg.simple-mind-map").each(function () {
//     var $svg = $(this);

//     var pluginConfig = $svg.data("plugin-config") || {};
//     console.log(pluginConfig);

//     var blockConfig = $svg.data("block-config") || {};
//     console.log(blockConfig);

//     var text = $svg.data("svg-text");
//     text = JSON.parse(text);
//     console.log(text);
// });

// require('./plugin.css');
// require('markmap/style/view.mindmap.css');
// require('markmap/lib/d3-flextree');
// const markmap = require('markmap/lib/view.mindmap');
// const parse = require('markmap/lib/parse.markdown');
// const transform = require('markmap/lib/transform.headings');

require(["gitbook","jQuery"], function(gitbook, $) {
    var entry = function entry() {
        $("svg.simple-mind-map").each(function () {
          var $svg = $(this);

          var pluginConfig = $svg.data("plugin-config") || {};
          console.log(pluginConfig);

          var blockConfig = $svg.data("block-config") || {};
          console.log(blockConfig);

          var text = $svg.data("svg-text");
          text = JSON.parse(text);
          console.log(text);

          // var data = transform(parse(text));
          // markmap($svg[0], data, {
          //   preset: 'colorful',
          //   linkShape: 'diagonal'
          // });
        });
    };

    gitbook.events.bind("start",entry);
    gitbook.events.bind("page.change", entry);
});