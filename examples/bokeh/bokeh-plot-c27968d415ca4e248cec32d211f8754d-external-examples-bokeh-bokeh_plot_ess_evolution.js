(function() {
  var fn = function() {
    
    (function(root) {
      function now() {
        return new Date();
      }
    
      var force = false;
    
      if (typeof root._bokeh_onload_callbacks === "undefined" || force === true) {
        root._bokeh_onload_callbacks = [];
        root._bokeh_is_loading = undefined;
      }
    
      
      
    
      
      
    
      function run_callbacks() {
        try {
          root._bokeh_onload_callbacks.forEach(function(callback) {
            if (callback != null)
              callback();
          });
        } finally {
          delete root._bokeh_onload_callbacks
        }
        console.debug("Bokeh: all callbacks have finished");
      }
    
      function load_libs(css_urls, js_urls, callback) {
        if (css_urls == null) css_urls = [];
        if (js_urls == null) js_urls = [];
    
        root._bokeh_onload_callbacks.push(callback);
        if (root._bokeh_is_loading > 0) {
          console.debug("Bokeh: BokehJS is being loaded, scheduling callback at", now());
          return null;
        }
        if (js_urls == null || js_urls.length === 0) {
          run_callbacks();
          return null;
        }
        console.debug("Bokeh: BokehJS not loaded, scheduling load and callback at", now());
        root._bokeh_is_loading = css_urls.length + js_urls.length;
    
        function on_load() {
          root._bokeh_is_loading--;
          if (root._bokeh_is_loading === 0) {
            console.debug("Bokeh: all BokehJS libraries/stylesheets loaded");
            run_callbacks()
          }
        }
    
        function on_error() {
          console.error("failed to load " + url);
        }
    
        for (var i = 0; i < css_urls.length; i++) {
          var url = css_urls[i];
          const element = document.createElement("link");
          element.onload = on_load;
          element.onerror = on_error;
          element.rel = "stylesheet";
          element.type = "text/css";
          element.href = url;
          console.debug("Bokeh: injecting link tag for BokehJS stylesheet: ", url);
          document.body.appendChild(element);
        }
    
        for (var i = 0; i < js_urls.length; i++) {
          var url = js_urls[i];
          var element = document.createElement('script');
          element.onload = on_load;
          element.onerror = on_error;
          element.async = false;
          element.src = url;
          console.debug("Bokeh: injecting script tag for BokehJS library: ", url);
          document.head.appendChild(element);
        }
      };var element = document.getElementById("c0817d8e-e0e1-41cd-a003-aaa7f3eaccf1");
      if (element == null) {
        console.error("Bokeh: ERROR: autoload.js configured with elementid 'c0817d8e-e0e1-41cd-a003-aaa7f3eaccf1' but no matching script tag was found. ")
        return false;
      }
    
      function inject_raw_css(css) {
        const element = document.createElement("style");
        element.appendChild(document.createTextNode(css));
        document.body.appendChild(element);
      }
    
      
      var js_urls = ["https://cdn.pydata.org/bokeh/release/bokeh-1.4.0.min.js", "https://cdn.pydata.org/bokeh/release/bokeh-widgets-1.4.0.min.js", "https://cdn.pydata.org/bokeh/release/bokeh-tables-1.4.0.min.js", "https://cdn.pydata.org/bokeh/release/bokeh-gl-1.4.0.min.js"];
      var css_urls = [];
      
    
      var inline_js = [
        function(Bokeh) {
          Bokeh.set_log_level("info");
        },
        
        function(Bokeh) {
          (function() {
            var fn = function() {
              Bokeh.safely(function() {
                (function(root) {
                  function embed_document(root) {
                    
                  var docs_json = '{"6c289f89-f330-42ff-86c7-45a9e96be4de":{"roots":{"references":[{"attributes":{"ticker":{"id":"96108","type":"BasicTicker"}},"id":"96111","type":"Grid"},{"attributes":{"data_source":{"id":"96143","type":"ColumnDataSource"},"glyph":{"id":"96144","type":"Line"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"96145","type":"Line"},"selection_glyph":null,"view":{"id":"96147","type":"CDSView"}},"id":"96146","type":"GlyphRenderer"},{"attributes":{"children":[[{"id":"96098","subtype":"Figure","type":"Plot"},0,0]]},"id":"96205","type":"GridBox"},{"attributes":{"line_color":"orange","x":{"field":"x"},"y":{"field":"y"}},"id":"96162","type":"Line"},{"attributes":{"items":[{"id":"96160","type":"LegendItem"},{"id":"96179","type":"LegendItem"}]},"id":"96159","type":"Legend"},{"attributes":{"line_color":"#1f77b4","x":{"field":"x"},"y":{"field":"y"}},"id":"96144","type":"Line"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":6},"x":{"field":"x"},"y":{"field":"y"}},"id":"96182","type":"Circle"},{"attributes":{},"id":"96125","type":"SaveTool"},{"attributes":{"data_source":{"id":"96161","type":"ColumnDataSource"},"glyph":{"id":"96162","type":"Line"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"96163","type":"Line"},"selection_glyph":null,"view":{"id":"96165","type":"CDSView"}},"id":"96164","type":"GlyphRenderer"},{"attributes":{},"id":"96199","type":"UnionRenderers"},{"attributes":{"fill_color":{"value":"orange"},"line_color":{"value":"orange"},"size":{"units":"screen","value":6},"x":{"field":"x"},"y":{"field":"y"}},"id":"96181","type":"Circle"},{"attributes":{"toolbar":{"id":"96206","type":"ProxyToolbar"},"toolbar_location":"above"},"id":"96207","type":"ToolbarBox"},{"attributes":{"callback":null,"data":{"x":{"__ndarray__":"AAAAAAAAWUAAAAAAAABpQAAAAAAAwHJAAAAAAAAAeUAAAAAAAEB/QAAAAAAAwIJAAAAAAADghUAAAAAAAACJQAAAAAAAIIxAAAAAAABAj0AAAAAAADCRQAAAAAAAwJJAAAAAAABQlEAAAAAAAOCVQAAAAAAAcJdAAAAAAAAAmUAAAAAAAJCaQAAAAAAAIJxAAAAAAACwnUAAAAAAAECfQA==","dtype":"float64","shape":[20]},"y":{"__ndarray__":"96FbKLyBMkDEFAnglsNWQBC5N3NCBm1AhSuZf4dmdECKE1YWcHt0QBw2aMPTi3lAiOdK+uWaeUAGhRKd9gZ9QNX3uUqhqIFAnLXIDxQMhUCr7PKl8U6JQLaUOqun4o1AoNLS679XkECU4/KXSGmSQCcpnoFLL5RACq31A5f5lUCcLj2ibHeWQF4U4M8TD5hAMc5SiTsFmkArYzxHIfWcQA==","dtype":"float64","shape":[20]}},"selected":{"id":"96155","type":"Selection"},"selection_policy":{"id":"96154","type":"UnionRenderers"}},"id":"96138","type":"ColumnDataSource"},{"attributes":{"data_source":{"id":"96138","type":"ColumnDataSource"},"glyph":{"id":"96139","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"96140","type":"Circle"},"selection_glyph":null,"view":{"id":"96142","type":"CDSView"}},"id":"96141","type":"GlyphRenderer"},{"attributes":{},"id":"96155","type":"Selection"},{"attributes":{"source":{"id":"96180","type":"ColumnDataSource"}},"id":"96184","type":"CDSView"},{"attributes":{},"id":"96117","type":"PanTool"},{"attributes":{"callback":null,"data":{"x":{"__ndarray__":"AAAAAAAAWUAAAAAAAABpQAAAAAAAwHJAAAAAAAAAeUAAAAAAAEB/QAAAAAAAwIJAAAAAAADghUAAAAAAAACJQAAAAAAAIIxAAAAAAABAj0AAAAAAADCRQAAAAAAAwJJAAAAAAABQlEAAAAAAAOCVQAAAAAAAcJdAAAAAAAAAmUAAAAAAAJCaQAAAAAAAIJxAAAAAAACwnUAAAAAAAECfQA==","dtype":"float64","shape":[20]},"y":{"__ndarray__":"efl4S7K5UECliF2aYsBdQM+3s3hpAWhA30PsAOxbckA9j+MdBmV5QCjkO/TQqHpAlo8qDuxxfUBhgLuJn9GBQDEicW5nj4VAmAm8VupRhkAL06Ie5C6GQBjMN1TJ+olARw25XLj/ikAxQOYiRzCOQGk5Bqm0MJBA5vBmnUCPkEAAWgBDqmmSQHF+IQeXypNAO/uxzEAolEDsjMUYoPKUQA==","dtype":"float64","shape":[20]}},"selected":{"id":"96198","type":"Selection"},"selection_policy":{"id":"96197","type":"UnionRenderers"}},"id":"96161","type":"ColumnDataSource"},{"attributes":{"label":{"value":"tail"},"renderers":[{"id":"96164","type":"GlyphRenderer"}]},"id":"96179","type":"LegendItem"},{"attributes":{"overlay":{"id":"96156","type":"BoxAnnotation"}},"id":"96118","type":"BoxZoomTool"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"96117","type":"PanTool"},{"id":"96118","type":"BoxZoomTool"},{"id":"96119","type":"WheelZoomTool"},{"id":"96120","type":"BoxSelectTool"},{"id":"96121","type":"LassoSelectTool"},{"id":"96122","type":"UndoTool"},{"id":"96123","type":"RedoTool"},{"id":"96124","type":"ResetTool"},{"id":"96125","type":"SaveTool"},{"id":"96126","type":"HoverTool"}]},"id":"96127","type":"Toolbar"},{"attributes":{},"id":"96124","type":"ResetTool"},{"attributes":{"source":{"id":"96161","type":"ColumnDataSource"}},"id":"96165","type":"CDSView"},{"attributes":{},"id":"96119","type":"WheelZoomTool"},{"attributes":{},"id":"96150","type":"BasicTickFormatter"},{"attributes":{},"id":"96154","type":"UnionRenderers"},{"attributes":{"callback":null,"overlay":{"id":"96158","type":"PolyAnnotation"}},"id":"96121","type":"LassoSelectTool"},{"attributes":{"dimension":1,"ticker":{"id":"96113","type":"BasicTicker"}},"id":"96116","type":"Grid"},{"attributes":{"callback":null,"overlay":{"id":"96157","type":"BoxAnnotation"}},"id":"96120","type":"BoxSelectTool"},{"attributes":{},"id":"96122","type":"UndoTool"},{"attributes":{"line_color":{"value":"red"},"line_dash":[6],"line_width":{"value":3},"location":400},"id":"96185","type":"Span"},{"attributes":{},"id":"96200","type":"Selection"},{"attributes":{},"id":"96105","type":"LinearScale"},{"attributes":{"axis_label":"ESS","formatter":{"id":"96152","type":"BasicTickFormatter"},"ticker":{"id":"96113","type":"BasicTicker"}},"id":"96112","type":"LinearAxis"},{"attributes":{"label":{"value":"bulk"},"renderers":[{"id":"96146","type":"GlyphRenderer"}]},"id":"96160","type":"LegendItem"},{"attributes":{},"id":"96197","type":"UnionRenderers"},{"attributes":{},"id":"96175","type":"Selection"},{"attributes":{"callback":null},"id":"96101","type":"DataRange1d"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"96156","type":"BoxAnnotation"},{"attributes":{"axis_label":"Total number of draws","formatter":{"id":"96150","type":"BasicTickFormatter"},"ticker":{"id":"96108","type":"BasicTicker"}},"id":"96107","type":"LinearAxis"},{"attributes":{},"id":"96103","type":"LinearScale"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"96157","type":"BoxAnnotation"},{"attributes":{"callback":null},"id":"96099","type":"DataRange1d"},{"attributes":{"fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"xs_units":"screen","ys_units":"screen"},"id":"96158","type":"PolyAnnotation"},{"attributes":{"source":{"id":"96138","type":"ColumnDataSource"}},"id":"96142","type":"CDSView"},{"attributes":{},"id":"96152","type":"BasicTickFormatter"},{"attributes":{},"id":"96174","type":"UnionRenderers"},{"attributes":{"tools":[{"id":"96117","type":"PanTool"},{"id":"96118","type":"BoxZoomTool"},{"id":"96119","type":"WheelZoomTool"},{"id":"96120","type":"BoxSelectTool"},{"id":"96121","type":"LassoSelectTool"},{"id":"96122","type":"UndoTool"},{"id":"96123","type":"RedoTool"},{"id":"96124","type":"ResetTool"},{"id":"96125","type":"SaveTool"},{"id":"96126","type":"HoverTool"}]},"id":"96206","type":"ProxyToolbar"},{"attributes":{"children":[{"id":"96207","type":"ToolbarBox"},{"id":"96205","type":"GridBox"}]},"id":"96208","type":"Column"},{"attributes":{"source":{"id":"96143","type":"ColumnDataSource"}},"id":"96147","type":"CDSView"},{"attributes":{"line_alpha":0.1,"line_color":"#1f77b4","x":{"field":"x"},"y":{"field":"y"}},"id":"96163","type":"Line"},{"attributes":{},"id":"96108","type":"BasicTicker"},{"attributes":{"line_alpha":0.1,"line_color":"#1f77b4","x":{"field":"x"},"y":{"field":"y"}},"id":"96145","type":"Line"},{"attributes":{},"id":"96198","type":"Selection"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":6},"x":{"field":"x"},"y":{"field":"y"}},"id":"96140","type":"Circle"},{"attributes":{},"id":"96113","type":"BasicTicker"},{"attributes":{"callback":null},"id":"96126","type":"HoverTool"},{"attributes":{},"id":"96123","type":"RedoTool"},{"attributes":{"text":"b"},"id":"96186","type":"Title"},{"attributes":{"below":[{"id":"96107","type":"LinearAxis"}],"center":[{"id":"96111","type":"Grid"},{"id":"96116","type":"Grid"},{"id":"96159","type":"Legend"}],"left":[{"id":"96112","type":"LinearAxis"}],"output_backend":"webgl","plot_height":288,"plot_width":432,"renderers":[{"id":"96141","type":"GlyphRenderer"},{"id":"96146","type":"GlyphRenderer"},{"id":"96164","type":"GlyphRenderer"},{"id":"96183","type":"GlyphRenderer"},{"id":"96185","type":"Span"}],"title":{"id":"96186","type":"Title"},"toolbar":{"id":"96127","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"96099","type":"DataRange1d"},"x_scale":{"id":"96103","type":"LinearScale"},"y_range":{"id":"96101","type":"DataRange1d"},"y_scale":{"id":"96105","type":"LinearScale"}},"id":"96098","subtype":"Figure","type":"Plot"},{"attributes":{"callback":null,"data":{"x":{"__ndarray__":"AAAAAAAAWUAAAAAAAABpQAAAAAAAwHJAAAAAAAAAeUAAAAAAAEB/QAAAAAAAwIJAAAAAAADghUAAAAAAAACJQAAAAAAAIIxAAAAAAABAj0AAAAAAADCRQAAAAAAAwJJAAAAAAABQlEAAAAAAAOCVQAAAAAAAcJdAAAAAAAAAmUAAAAAAAJCaQAAAAAAAIJxAAAAAAACwnUAAAAAAAECfQA==","dtype":"float64","shape":[20]},"y":{"__ndarray__":"96FbKLyBMkDEFAnglsNWQBC5N3NCBm1AhSuZf4dmdECKE1YWcHt0QBw2aMPTi3lAiOdK+uWaeUAGhRKd9gZ9QNX3uUqhqIFAnLXIDxQMhUCr7PKl8U6JQLaUOqun4o1AoNLS679XkECU4/KXSGmSQCcpnoFLL5RACq31A5f5lUCcLj2ibHeWQF4U4M8TD5hAMc5SiTsFmkArYzxHIfWcQA==","dtype":"float64","shape":[20]}},"selected":{"id":"96175","type":"Selection"},"selection_policy":{"id":"96174","type":"UnionRenderers"}},"id":"96143","type":"ColumnDataSource"},{"attributes":{"data_source":{"id":"96180","type":"ColumnDataSource"},"glyph":{"id":"96181","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"96182","type":"Circle"},"selection_glyph":null,"view":{"id":"96184","type":"CDSView"}},"id":"96183","type":"GlyphRenderer"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":6},"x":{"field":"x"},"y":{"field":"y"}},"id":"96139","type":"Circle"},{"attributes":{"callback":null,"data":{"x":{"__ndarray__":"AAAAAAAAWUAAAAAAAABpQAAAAAAAwHJAAAAAAAAAeUAAAAAAAEB/QAAAAAAAwIJAAAAAAADghUAAAAAAAACJQAAAAAAAIIxAAAAAAABAj0AAAAAAADCRQAAAAAAAwJJAAAAAAABQlEAAAAAAAOCVQAAAAAAAcJdAAAAAAAAAmUAAAAAAAJCaQAAAAAAAIJxAAAAAAACwnUAAAAAAAECfQA==","dtype":"float64","shape":[20]},"y":{"__ndarray__":"efl4S7K5UECliF2aYsBdQM+3s3hpAWhA30PsAOxbckA9j+MdBmV5QCjkO/TQqHpAlo8qDuxxfUBhgLuJn9GBQDEicW5nj4VAmAm8VupRhkAL06Ie5C6GQBjMN1TJ+olARw25XLj/ikAxQOYiRzCOQGk5Bqm0MJBA5vBmnUCPkEAAWgBDqmmSQHF+IQeXypNAO/uxzEAolEDsjMUYoPKUQA==","dtype":"float64","shape":[20]}},"selected":{"id":"96200","type":"Selection"},"selection_policy":{"id":"96199","type":"UnionRenderers"}},"id":"96180","type":"ColumnDataSource"}],"root_ids":["96208"]},"title":"Bokeh Application","version":"1.4.0"}}';
                  var render_items = [{"docid":"6c289f89-f330-42ff-86c7-45a9e96be4de","roots":{"96208":"c0817d8e-e0e1-41cd-a003-aaa7f3eaccf1"}}];
                  root.Bokeh.embed.embed_items(docs_json, render_items);
                
                  }
                  if (root.Bokeh !== undefined) {
                    embed_document(root);
                  } else {
                    var attempts = 0;
                    var timer = setInterval(function(root) {
                      if (root.Bokeh !== undefined) {
                        clearInterval(timer);
                        embed_document(root);
                      } else {
                        attempts++;
                        if (attempts > 100) {
                          clearInterval(timer);
                          console.log("Bokeh: ERROR: Unable to run BokehJS code because BokehJS library is missing");
                        }
                      }
                    }, 10, root)
                  }
                })(window);
              });
            };
            if (document.readyState != "loading") fn();
            else document.addEventListener("DOMContentLoaded", fn);
          })();
        },
        function(Bokeh) {
        
        
        }
      ];
    
      function run_inline_js() {
        
        for (var i = 0; i < inline_js.length; i++) {
          inline_js[i].call(root, root.Bokeh);
        }
        
      }
    
      if (root._bokeh_is_loading === 0) {
        console.debug("Bokeh: BokehJS loaded, going straight to plotting");
        run_inline_js();
      } else {
        load_libs(css_urls, js_urls, function() {
          console.debug("Bokeh: BokehJS plotting callback run at", now());
          run_inline_js();
        });
      }
    }(window));
  };
  if (document.readyState != "loading") fn();
  else document.addEventListener("DOMContentLoaded", fn);
})();