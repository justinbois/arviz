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
      };var element = document.getElementById("7f7fdc10-0efe-4506-896b-885eb9794aea");
      if (element == null) {
        console.error("Bokeh: ERROR: autoload.js configured with elementid '7f7fdc10-0efe-4506-896b-885eb9794aea' but no matching script tag was found. ")
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
                    
                  var docs_json = '{"e5bf8204-43b8-451d-9d6c-50dd5e21eae8":{"roots":{"references":[{"attributes":{"dimension":1,"ticker":{"id":"119704","type":"BasicTicker"}},"id":"119707","type":"Grid"},{"attributes":{"callback":null},"id":"119717","type":"HoverTool"},{"attributes":{"callback":null,"overlay":{"id":"119744","type":"BoxAnnotation"}},"id":"119711","type":"BoxSelectTool"},{"attributes":{"callback":null,"overlay":{"id":"119745","type":"PolyAnnotation"}},"id":"119712","type":"LassoSelectTool"},{"attributes":{},"id":"119696","type":"LinearScale"},{"attributes":{"formatter":{"id":"119737","type":"BasicTickFormatter"},"ticker":{"id":"119699","type":"BasicTicker"}},"id":"119698","type":"LinearAxis"},{"attributes":{},"id":"119704","type":"BasicTicker"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"119708","type":"PanTool"},{"id":"119709","type":"BoxZoomTool"},{"id":"119710","type":"WheelZoomTool"},{"id":"119711","type":"BoxSelectTool"},{"id":"119712","type":"LassoSelectTool"},{"id":"119713","type":"UndoTool"},{"id":"119714","type":"RedoTool"},{"id":"119715","type":"ResetTool"},{"id":"119716","type":"SaveTool"},{"id":"119717","type":"HoverTool"}]},"id":"119718","type":"Toolbar"},{"attributes":{"text":"centered model - non centered model"},"id":"119734","type":"Title"},{"attributes":{},"id":"119716","type":"SaveTool"},{"attributes":{"source":{"id":"119729","type":"ColumnDataSource"}},"id":"119733","type":"CDSView"},{"attributes":{},"id":"119713","type":"UndoTool"},{"attributes":{"callback":null},"id":"119690","type":"DataRange1d"},{"attributes":{},"id":"119737","type":"BasicTickFormatter"},{"attributes":{"below":[{"id":"119698","type":"LinearAxis"}],"center":[{"id":"119702","type":"Grid"},{"id":"119707","type":"Grid"}],"left":[{"id":"119703","type":"LinearAxis"}],"output_backend":"webgl","plot_height":288,"plot_width":432,"renderers":[{"id":"119732","type":"GlyphRenderer"}],"title":{"id":"119734","type":"Title"},"toolbar":{"id":"119718","type":"Toolbar"},"x_range":{"id":"119690","type":"DataRange1d"},"x_scale":{"id":"119694","type":"LinearScale"},"y_range":{"id":"119692","type":"DataRange1d"},"y_scale":{"id":"119696","type":"LinearScale"}},"id":"119689","subtype":"Figure","type":"Plot"},{"attributes":{"callback":null},"id":"119692","type":"DataRange1d"},{"attributes":{"data_source":{"id":"119729","type":"ColumnDataSource"},"glyph":{"id":"119730","type":"Cross"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"119731","type":"Cross"},"selection_glyph":null,"view":{"id":"119733","type":"CDSView"}},"id":"119732","type":"GlyphRenderer"},{"attributes":{},"id":"119739","type":"BasicTickFormatter"},{"attributes":{"fill_color":{"value":"#1f77b4"},"size":{"units":"screen","value":6.0},"x":{"field":"x"},"y":{"field":"y"}},"id":"119730","type":"Cross"},{"attributes":{},"id":"119715","type":"ResetTool"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":6.0},"x":{"field":"x"},"y":{"field":"y"}},"id":"119731","type":"Cross"},{"attributes":{},"id":"119741","type":"UnionRenderers"},{"attributes":{},"id":"119714","type":"RedoTool"},{"attributes":{},"id":"119699","type":"BasicTicker"},{"attributes":{},"id":"119742","type":"Selection"},{"attributes":{},"id":"119708","type":"PanTool"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"119743","type":"BoxAnnotation"},{"attributes":{"overlay":{"id":"119743","type":"BoxAnnotation"}},"id":"119709","type":"BoxZoomTool"},{"attributes":{},"id":"119710","type":"WheelZoomTool"},{"attributes":{"callback":null,"data":{"x":[0,1,2,3,4,5,6,7],"y":{"__ndarray__":"gKw/FCDkuj8AeHliZVWePwCAiHewTyW/AI7er++Hoz+AHYmsYnG0vwCgk05GA0g/gJ3Q558ruT8A3aKQ7GmgPw==","dtype":"float64","shape":[8]}},"selected":{"id":"119742","type":"Selection"},"selection_policy":{"id":"119741","type":"UnionRenderers"}},"id":"119729","type":"ColumnDataSource"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"119744","type":"BoxAnnotation"},{"attributes":{"fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"xs_units":"screen","ys_units":"screen"},"id":"119745","type":"PolyAnnotation"},{"attributes":{},"id":"119694","type":"LinearScale"},{"attributes":{"axis_label":"ELPD difference","formatter":{"id":"119739","type":"BasicTickFormatter"},"ticker":{"id":"119704","type":"BasicTicker"}},"id":"119703","type":"LinearAxis"},{"attributes":{"ticker":{"id":"119699","type":"BasicTicker"}},"id":"119702","type":"Grid"}],"root_ids":["119689"]},"title":"Bokeh Application","version":"1.4.0"}}';
                  var render_items = [{"docid":"e5bf8204-43b8-451d-9d6c-50dd5e21eae8","roots":{"119689":"7f7fdc10-0efe-4506-896b-885eb9794aea"}}];
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