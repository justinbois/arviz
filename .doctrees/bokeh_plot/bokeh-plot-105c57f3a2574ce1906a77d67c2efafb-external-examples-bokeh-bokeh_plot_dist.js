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
      };var element = document.getElementById("6a3c9278-742a-49d1-a197-4f1721b0764c");
      if (element == null) {
        console.error("Bokeh: ERROR: autoload.js configured with elementid '6a3c9278-742a-49d1-a197-4f1721b0764c' but no matching script tag was found. ")
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
                    
                  var docs_json = '{"c71a5061-7cd7-4d00-b40c-4779986333e6":{"roots":{"references":[{"attributes":{"overlay":{"id":"95712","type":"BoxAnnotation"}},"id":"95658","type":"BoxZoomTool"},{"attributes":{},"id":"95693","type":"HelpTool"},{"attributes":{"children":[{"id":"95637","subtype":"Figure","type":"Plot"},{"id":"95669","subtype":"Figure","type":"Plot"}]},"id":"95729","type":"Row"},{"attributes":{"line_alpha":0.1,"line_color":"#1f77b4","x":{"field":"x"},"y":{"field":"y"}},"id":"95717","type":"Line"},{"attributes":{"callback":null},"id":"95670","type":"DataRange1d"},{"attributes":{},"id":"95708","type":"BasicTickFormatter"},{"attributes":{"callback":null},"id":"95638","type":"DataRange1d"},{"attributes":{"dimension":1,"ticker":{"id":"95684","type":"BasicTicker"}},"id":"95687","type":"Grid"},{"attributes":{"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"95716","type":"Line"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"95726","type":"BoxAnnotation"},{"attributes":{"text":""},"id":"95721","type":"Title"},{"attributes":{"label":{"value":"Gaussian"},"renderers":[{"id":"95718","type":"GlyphRenderer"}]},"id":"95728","type":"LegendItem"},{"attributes":{},"id":"95684","type":"BasicTicker"},{"attributes":{"below":[{"id":"95646","type":"LinearAxis"}],"center":[{"id":"95650","type":"Grid"},{"id":"95655","type":"Grid"},{"id":"95713","type":"Legend"}],"left":[{"id":"95651","type":"LinearAxis"}],"output_backend":"webgl","plot_height":500,"plot_width":500,"renderers":[{"id":"95704","type":"GlyphRenderer"}],"title":{"id":"95707","type":"Title"},"toolbar":{"id":"95662","type":"Toolbar"},"x_range":{"id":"95638","type":"DataRange1d"},"x_scale":{"id":"95642","type":"LinearScale"},"y_range":{"id":"95640","type":"DataRange1d"},"y_scale":{"id":"95644","type":"LinearScale"}},"id":"95637","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"95743","type":"Selection"},{"attributes":{"callback":null,"data":{"x":{"__ndarray__":"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","dtype":"float64","shape":[200]},"y":{"__ndarray__":"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","dtype":"float64","shape":[200]}},"selected":{"id":"95746","type":"Selection"},"selection_policy":{"id":"95745","type":"UnionRenderers"}},"id":"95715","type":"ColumnDataSource"},{"attributes":{"items":[{"id":"95728","type":"LegendItem"}]},"id":"95727","type":"Legend"},{"attributes":{},"id":"95659","type":"SaveTool"},{"attributes":{},"id":"95652","type":"BasicTicker"},{"attributes":{},"id":"95692","type":"ResetTool"},{"attributes":{"text":""},"id":"95707","type":"Title"},{"attributes":{},"id":"95656","type":"PanTool"},{"attributes":{"formatter":{"id":"95708","type":"BasicTickFormatter"},"ticker":{"id":"95647","type":"BasicTicker"}},"id":"95646","type":"LinearAxis"},{"attributes":{"label":{"value":"Poisson"},"renderers":[{"id":"95704","type":"GlyphRenderer"}]},"id":"95714","type":"LegendItem"},{"attributes":{"items":[{"id":"95714","type":"LegendItem"}]},"id":"95713","type":"Legend"},{"attributes":{"callback":null},"id":"95672","type":"DataRange1d"},{"attributes":{},"id":"95710","type":"BasicTickFormatter"},{"attributes":{"formatter":{"id":"95710","type":"BasicTickFormatter"},"ticker":{"id":"95652","type":"BasicTicker"}},"id":"95651","type":"LinearAxis"},{"attributes":{},"id":"95689","type":"WheelZoomTool"},{"attributes":{},"id":"95722","type":"BasicTickFormatter"},{"attributes":{},"id":"95674","type":"LinearScale"},{"attributes":{"ticker":{"id":"95647","type":"BasicTicker"}},"id":"95650","type":"Grid"},{"attributes":{"source":{"id":"95701","type":"ColumnDataSource"}},"id":"95705","type":"CDSView"},{"attributes":{},"id":"95724","type":"BasicTickFormatter"},{"attributes":{},"id":"95742","type":"UnionRenderers"},{"attributes":{},"id":"95661","type":"HelpTool"},{"attributes":{},"id":"95642","type":"LinearScale"},{"attributes":{"bottom":{"value":0},"fill_color":{"value":"black"},"left":{"field":"left"},"right":{"field":"right"},"top":{"field":"top"}},"id":"95702","type":"Quad"},{"attributes":{"dimension":1,"ticker":{"id":"95652","type":"BasicTicker"}},"id":"95655","type":"Grid"},{"attributes":{"ticker":{"id":"95679","type":"BasicTicker"}},"id":"95682","type":"Grid"},{"attributes":{"data_source":{"id":"95701","type":"ColumnDataSource"},"glyph":{"id":"95702","type":"Quad"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"95703","type":"Quad"},"selection_glyph":null,"view":{"id":"95705","type":"CDSView"}},"id":"95704","type":"GlyphRenderer"},{"attributes":{"formatter":{"id":"95724","type":"BasicTickFormatter"},"ticker":{"id":"95684","type":"BasicTicker"}},"id":"95683","type":"LinearAxis"},{"attributes":{},"id":"95679","type":"BasicTicker"},{"attributes":{},"id":"95644","type":"LinearScale"},{"attributes":{},"id":"95745","type":"UnionRenderers"},{"attributes":{},"id":"95647","type":"BasicTicker"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"95712","type":"BoxAnnotation"},{"attributes":{},"id":"95657","type":"WheelZoomTool"},{"attributes":{"callback":null,"data":{"left":[0,1,2,3,4,5,6,7,8,9,10,11,12,13],"right":[1,2,3,4,5,6,7,8,9,10,11,12,13,14],"top":{"__ndarray__":"ObTIdr6fmj/LoUW28/20P99PjZduEsM/XrpJDAIrxz/ufD81XrrJPyPb+X5qvMQ/+n5qvHSTuD8pXI/C9SisPxkEVg4tsp0/O99PjZdugj/8qfHSTWKAP/yp8dJNYlA/AAAAAAAAAAD8qfHSTWJQPw==","dtype":"float64","shape":[14]}},"selected":{"id":"95743","type":"Selection"},"selection_policy":{"id":"95742","type":"UnionRenderers"}},"id":"95701","type":"ColumnDataSource"},{"attributes":{},"id":"95691","type":"SaveTool"},{"attributes":{},"id":"95746","type":"Selection"},{"attributes":{"bottom":{"value":0},"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"left":{"field":"left"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"right":{"field":"right"},"top":{"field":"top"}},"id":"95703","type":"Quad"},{"attributes":{},"id":"95676","type":"LinearScale"},{"attributes":{"callback":null},"id":"95640","type":"DataRange1d"},{"attributes":{"formatter":{"id":"95722","type":"BasicTickFormatter"},"ticker":{"id":"95679","type":"BasicTicker"}},"id":"95678","type":"LinearAxis"},{"attributes":{"overlay":{"id":"95726","type":"BoxAnnotation"}},"id":"95690","type":"BoxZoomTool"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"95656","type":"PanTool"},{"id":"95657","type":"WheelZoomTool"},{"id":"95658","type":"BoxZoomTool"},{"id":"95659","type":"SaveTool"},{"id":"95660","type":"ResetTool"},{"id":"95661","type":"HelpTool"}]},"id":"95662","type":"Toolbar"},{"attributes":{},"id":"95688","type":"PanTool"},{"attributes":{"source":{"id":"95715","type":"ColumnDataSource"}},"id":"95719","type":"CDSView"},{"attributes":{"data_source":{"id":"95715","type":"ColumnDataSource"},"glyph":{"id":"95716","type":"Line"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"95717","type":"Line"},"selection_glyph":null,"view":{"id":"95719","type":"CDSView"}},"id":"95718","type":"GlyphRenderer"},{"attributes":{},"id":"95660","type":"ResetTool"},{"attributes":{"below":[{"id":"95678","type":"LinearAxis"}],"center":[{"id":"95682","type":"Grid"},{"id":"95687","type":"Grid"},{"id":"95727","type":"Legend"}],"left":[{"id":"95683","type":"LinearAxis"}],"output_backend":"webgl","plot_height":500,"plot_width":500,"renderers":[{"id":"95718","type":"GlyphRenderer"}],"title":{"id":"95721","type":"Title"},"toolbar":{"id":"95694","type":"Toolbar"},"x_range":{"id":"95670","type":"DataRange1d"},"x_scale":{"id":"95674","type":"LinearScale"},"y_range":{"id":"95672","type":"DataRange1d"},"y_scale":{"id":"95676","type":"LinearScale"}},"id":"95669","subtype":"Figure","type":"Plot"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"95688","type":"PanTool"},{"id":"95689","type":"WheelZoomTool"},{"id":"95690","type":"BoxZoomTool"},{"id":"95691","type":"SaveTool"},{"id":"95692","type":"ResetTool"},{"id":"95693","type":"HelpTool"}]},"id":"95694","type":"Toolbar"}],"root_ids":["95729"]},"title":"Bokeh Application","version":"1.4.0"}}';
                  var render_items = [{"docid":"c71a5061-7cd7-4d00-b40c-4779986333e6","roots":{"95729":"6a3c9278-742a-49d1-a197-4f1721b0764c"}}];
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