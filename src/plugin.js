/*
 *  ===============================================================
 *      snowdreams1006 is not just for programmers
 *  ===============================================================
 *
 *  - Document: index.js
 *  - Author: snowdreams1006
 *  - Description: Gitbook plugin index
 */

require("./plugin.css");
require("markmap/style/view.mindmap.css");
require("markmap/lib/d3-flextree");

var markmap = require("markmap/lib/view.mindmap");
var parse,transform;

var entry = function entry() {
    $("svg.simple-mind-map").each(function () {
      var $svg = $(this);
      var pluginConfig = $svg.data("plugin-config") || {};
      var blockConfig = $svg.data("block-config") || {};
      var simplemindmapConfig = Object.assign((pluginConfig || {}), (blockConfig.kwargs || {}));
      var type = simplemindmapConfig.type || "markdown";
      type =  type.toLocaleLowerCase();
      var text = $svg.data("svg-text");
      var data;
      switch (type) {
          case "markdown":
            parse = require("markmap/lib/parse.markdown");
            transform = require("markmap/lib/transform.headings");
            if(text){
              text = JSON.parse(text);
            }
            data = transform(parse(text));
            break; 
          case "json":
              if(text){
                text = eval(text);
                text = JSON.parse(text);
              }
              data = text;
              break; 
          case "mindmup":
              transform = require("markmap/lib/transform.mindmup");
              if(text){
                text = eval(text);
                text = JSON.parse(text);
              }
              data = transform(text);
              break; 
          case "txtmap":
              parse = require("markmap/lib/parse.txtmap");
              transform = require("markmap/lib/transform.headings");
              if(text){
                text = JSON.parse(text);
              }
              data = transform(parse(text));
              break; 
      }
      if(data){
        markmap($svg[0], data, simplemindmapConfig);
      }
    });
};

gitbook.events.bind("page.change", entry);