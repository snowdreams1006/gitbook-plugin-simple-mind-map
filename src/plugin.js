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

var entry = function entry() {
    $("svg.simple-mind-map").each(function () {
      var $svg = $(this);
      
      var pluginConfig = $svg.data("plugin-config") || {};
      console.log("pluginConfig",pluginConfig);

      var blockConfig = $svg.data("block-config") || {};
      console.log("blockConfig",blockConfig);

      var simplemindmapConfig = Object.assign((pluginConfig || {}), (blockConfig.kwargs || {}));
      console.log("simplemindmapConfig",simplemindmapConfig);

      var type = simplemindmapConfig.type && simplemindmapConfig.type.toLocaleLowerCase();
      console.log("type",type);

      var text = $svg.data("svg-text");
      console.log("text",text);

      var data;
      switch (type) {
          case "markdown":
            var parse = require("markmap/lib/parse.markdown");
            var transform = require("markmap/lib/transform.headings");

            if(text){
              text = JSON.parse(text);
              data = transform(parse(text));
            }
            break; 
          case "json":
              data = text;
              break; 
          case "mindmup":
              var transform = require("markmap/lib/transform.mindmup");

              data = transform(text);
              break; 
          case "txtmap":
              var parse = require("markmap/lib/parse.txtmap");
              var transform = require("markmap/lib/transform.headings");

              data = transform(parse(text));
              break; 
      } 
      console.log("data",data);
      
      if(data){
        markmap($svg[0], data, simplemindmapConfig);
      }
    });
};

gitbook.events.bind("page.change", entry);