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
      };var element = document.getElementById("d698cb7e-a677-46a0-9d60-30732a400824");
      if (element == null) {
        console.error("Bokeh: ERROR: autoload.js configured with elementid 'd698cb7e-a677-46a0-9d60-30732a400824' but no matching script tag was found. ")
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
                    
                  var docs_json = '{"2b1a5e22-d41e-47cc-a849-93997a22a15f":{"roots":{"references":[{"attributes":{},"id":"96475","type":"Selection"},{"attributes":{"below":[{"id":"96430","type":"LinearAxis"}],"center":[{"id":"96434","type":"Grid"},{"id":"96439","type":"Grid"}],"left":[{"id":"96435","type":"LinearAxis"}],"output_backend":"webgl","plot_height":288,"plot_width":432,"renderers":[{"id":"96464","type":"GlyphRenderer"},{"id":"96466","type":"Span"}],"title":{"id":"96467","type":"Title"},"toolbar":{"id":"96450","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"96422","type":"DataRange1d"},"x_scale":{"id":"96426","type":"LinearScale"},"y_range":{"id":"96424","type":"DataRange1d"},"y_scale":{"id":"96428","type":"LinearScale"}},"id":"96421","subtype":"Figure","type":"Plot"},{"attributes":{"overlay":{"id":"96476","type":"BoxAnnotation"}},"id":"96441","type":"BoxZoomTool"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"96476","type":"BoxAnnotation"},{"attributes":{},"id":"96442","type":"WheelZoomTool"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"96477","type":"BoxAnnotation"},{"attributes":{"callback":null,"overlay":{"id":"96477","type":"BoxAnnotation"}},"id":"96443","type":"BoxSelectTool"},{"attributes":{"fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"xs_units":"screen","ys_units":"screen"},"id":"96478","type":"PolyAnnotation"},{"attributes":{"callback":null,"overlay":{"id":"96478","type":"PolyAnnotation"}},"id":"96444","type":"LassoSelectTool"},{"attributes":{"tools":[{"id":"96440","type":"PanTool"},{"id":"96441","type":"BoxZoomTool"},{"id":"96442","type":"WheelZoomTool"},{"id":"96443","type":"BoxSelectTool"},{"id":"96444","type":"LassoSelectTool"},{"id":"96445","type":"UndoTool"},{"id":"96446","type":"RedoTool"},{"id":"96447","type":"ResetTool"},{"id":"96448","type":"SaveTool"},{"id":"96449","type":"HoverTool"}]},"id":"96481","type":"ProxyToolbar"},{"attributes":{"callback":null},"id":"96422","type":"DataRange1d"},{"attributes":{},"id":"96445","type":"UndoTool"},{"attributes":{"toolbar":{"id":"96481","type":"ProxyToolbar"},"toolbar_location":"above"},"id":"96482","type":"ToolbarBox"},{"attributes":{"callback":null},"id":"96424","type":"DataRange1d"},{"attributes":{},"id":"96446","type":"RedoTool"},{"attributes":{"children":[{"id":"96482","type":"ToolbarBox"},{"id":"96480","type":"GridBox"}]},"id":"96483","type":"Column"},{"attributes":{},"id":"96426","type":"LinearScale"},{"attributes":{},"id":"96447","type":"ResetTool"},{"attributes":{},"id":"96428","type":"LinearScale"},{"attributes":{},"id":"96448","type":"SaveTool"},{"attributes":{"axis_label":"Quantile","formatter":{"id":"96470","type":"BasicTickFormatter"},"ticker":{"id":"96431","type":"BasicTicker"}},"id":"96430","type":"LinearAxis"},{"attributes":{"callback":null},"id":"96449","type":"HoverTool"},{"attributes":{},"id":"96431","type":"BasicTicker"},{"attributes":{"ticker":{"id":"96431","type":"BasicTicker"}},"id":"96434","type":"Grid"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"96440","type":"PanTool"},{"id":"96441","type":"BoxZoomTool"},{"id":"96442","type":"WheelZoomTool"},{"id":"96443","type":"BoxSelectTool"},{"id":"96444","type":"LassoSelectTool"},{"id":"96445","type":"UndoTool"},{"id":"96446","type":"RedoTool"},{"id":"96447","type":"ResetTool"},{"id":"96448","type":"SaveTool"},{"id":"96449","type":"HoverTool"}]},"id":"96450","type":"Toolbar"},{"attributes":{"axis_label":"ESS for quantiles","formatter":{"id":"96472","type":"BasicTickFormatter"},"ticker":{"id":"96436","type":"BasicTicker"}},"id":"96435","type":"LinearAxis"},{"attributes":{"data_source":{"id":"96461","type":"ColumnDataSource"},"glyph":{"id":"96462","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"96463","type":"Circle"},"selection_glyph":null,"view":{"id":"96465","type":"CDSView"}},"id":"96464","type":"GlyphRenderer"},{"attributes":{"source":{"id":"96461","type":"ColumnDataSource"}},"id":"96465","type":"CDSView"},{"attributes":{},"id":"96436","type":"BasicTicker"},{"attributes":{"line_color":{"value":"red"},"line_dash":[6],"line_width":{"value":3},"location":400},"id":"96466","type":"Span"},{"attributes":{"dimension":1,"ticker":{"id":"96436","type":"BasicTicker"}},"id":"96439","type":"Grid"},{"attributes":{"text":"sigma_y"},"id":"96467","type":"Title"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":6},"x":{"field":"x"},"y":{"field":"y"}},"id":"96463","type":"Circle"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":6},"x":{"field":"x"},"y":{"field":"y"}},"id":"96462","type":"Circle"},{"attributes":{},"id":"96470","type":"BasicTickFormatter"},{"attributes":{"callback":null,"data":{"x":{"__ndarray__":"mpmZmZmZqT/SjhUII+24P2wor6G8hsI/bolTv+eWyD9w6vfcEqfOP7klTv2eW9I/O1YgjLRj1T+8hvIaymvYPz23xKnfc9s/vueWOPV73j8gjLRjBcLgP2GkHSsQRuI/oryG8hrK4z/i1O+5JU7lPyPtWIEw0uY/YwXCSDtW6D+kHSsQRtrpP+U1lNdQXus/JU79nlvi7D9mZmZmZmbuPw==","dtype":"float64","shape":[20]},"y":{"__ndarray__":"AmD6jcFOjEBQTl2raYiTQBDjz+4U2pNAZGseedHplEB/WvEazoSWQOHtizqLkJlAAkPUheO2mUBesx6n5kCZQLJxAzcYzZhAMUpMiFv0mUC/Oi/BFYGZQN5lChPFDZZAFw600+IXlUB7koIfjHaVQLrzDUmEzZRA0nSsVmc2lUBXi/wUTAaRQBZhtQ+zqpBAXkjEt6PHjECNgYxaPa6QQA==","dtype":"float64","shape":[20]}},"selected":{"id":"96475","type":"Selection"},"selection_policy":{"id":"96474","type":"UnionRenderers"}},"id":"96461","type":"ColumnDataSource"},{"attributes":{},"id":"96472","type":"BasicTickFormatter"},{"attributes":{"children":[[{"id":"96421","subtype":"Figure","type":"Plot"},0,0]]},"id":"96480","type":"GridBox"},{"attributes":{},"id":"96474","type":"UnionRenderers"},{"attributes":{},"id":"96440","type":"PanTool"}],"root_ids":["96483"]},"title":"Bokeh Application","version":"1.4.0"}}';
                  var render_items = [{"docid":"2b1a5e22-d41e-47cc-a849-93997a22a15f","roots":{"96483":"d698cb7e-a677-46a0-9d60-30732a400824"}}];
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