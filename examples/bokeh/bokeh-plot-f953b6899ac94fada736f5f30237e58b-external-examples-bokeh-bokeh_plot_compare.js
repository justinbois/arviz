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
      };var element = document.getElementById("5505859c-b5b6-4025-9468-7d2188267174");
      if (element == null) {
        console.error("Bokeh: ERROR: autoload.js configured with elementid '5505859c-b5b6-4025-9468-7d2188267174' but no matching script tag was found. ")
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
                    
                  var docs_json = '{"123d1887-b6f7-46e1-8f18-024fd5e199b8":{"roots":{"references":[{"attributes":{"ticker":{"id":"93318","type":"BasicTicker"}},"id":"93321","type":"Grid"},{"attributes":{},"id":"93387","type":"UnionRenderers"},{"attributes":{"formatter":{"id":"93380","type":"BasicTickFormatter"},"major_label_overrides":{"-0.75":"","-1":"Centered 8 schools","0":"Non-centered 8 schools"},"ticker":{"id":"93348","type":"FixedTicker"}},"id":"93322","type":"LinearAxis"},{"attributes":{},"id":"93313","type":"LinearScale"},{"attributes":{"callback":null,"data":{"xs":[[61.360479636844296,61.67142831044951]],"ys":[[-0.75,-0.75]]},"selected":{"id":"93384","type":"Selection"},"selection_policy":{"id":"93383","type":"UnionRenderers"}},"id":"93355","type":"ColumnDataSource"},{"attributes":{"callback":null},"id":"93336","type":"HoverTool"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"93391","type":"BoxAnnotation"},{"attributes":{"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"xs":{"field":"xs"},"ys":{"field":"ys"}},"id":"93357","type":"MultiLine"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"93392","type":"BoxAnnotation"},{"attributes":{"data_source":{"id":"93370","type":"ColumnDataSource"},"glyph":{"id":"93371","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"93372","type":"Circle"},"selection_glyph":null,"view":{"id":"93374","type":"CDSView"}},"id":"93373","type":"GlyphRenderer"},{"attributes":{"dimension":"height","line_color":{"value":"grey"},"line_dash":[6],"line_width":{"value":1.7677669529663689},"location":61.29204629507727},"id":"93375","type":"Span"},{"attributes":{"callback":null,"end":0.5,"start":-1.5},"id":"93311","type":"DataRange1d"},{"attributes":{"below":[{"id":"93317","type":"LinearAxis"}],"center":[{"id":"93321","type":"Grid"},{"id":"93326","type":"Grid"}],"left":[{"id":"93322","type":"LinearAxis"}],"output_backend":"webgl","plot_height":240,"plot_width":720,"renderers":[{"id":"93353","type":"GlyphRenderer"},{"id":"93358","type":"GlyphRenderer"},{"id":"93363","type":"GlyphRenderer"},{"id":"93368","type":"GlyphRenderer"},{"id":"93373","type":"GlyphRenderer"},{"id":"93375","type":"Span"}],"title":{"id":"93377","type":"Title"},"toolbar":{"id":"93337","type":"Toolbar"},"x_range":{"id":"93309","type":"DataRange1d"},"x_scale":{"id":"93313","type":"LinearScale"},"y_range":{"id":"93311","type":"DataRange1d"},"y_scale":{"id":"93315","type":"LinearScale"}},"id":"93308","subtype":"Figure","type":"Plot"},{"attributes":{"source":{"id":"93365","type":"ColumnDataSource"}},"id":"93369","type":"CDSView"},{"attributes":{},"id":"93381","type":"UnionRenderers"},{"attributes":{"callback":null,"data":{"xs":[[58.4895103142783,64.09458227587623],[58.81969376055992,64.21221418673389]],"ys":[[0.0,0.0],[-1.0,-1.0]]},"selected":{"id":"93388","type":"Selection"},"selection_policy":{"id":"93387","type":"UnionRenderers"}},"id":"93365","type":"ColumnDataSource"},{"attributes":{},"id":"93318","type":"BasicTicker"},{"attributes":{"callback":null},"id":"93309","type":"DataRange1d"},{"attributes":{"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"xs":{"field":"xs"},"ys":{"field":"ys"}},"id":"93367","type":"MultiLine"},{"attributes":{"fill_color":{"value":"black"},"line_width":{"value":2},"size":{"units":"screen","value":6},"x":{"field":"x"},"y":{"field":"y"}},"id":"93371","type":"Circle"},{"attributes":{"callback":null,"data":{"x":[61.29204629507727,61.5159539736469],"y":[0.0,-1.0]},"selected":{"id":"93386","type":"Selection"},"selection_policy":{"id":"93385","type":"UnionRenderers"}},"id":"93360","type":"ColumnDataSource"},{"attributes":{},"id":"93378","type":"BasicTickFormatter"},{"attributes":{"source":{"id":"93350","type":"ColumnDataSource"}},"id":"93354","type":"CDSView"},{"attributes":{"callback":null,"overlay":{"id":"93392","type":"BoxAnnotation"}},"id":"93330","type":"BoxSelectTool"},{"attributes":{"ticks":[0.0,-0.75,-1.0]},"id":"93348","type":"FixedTicker"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"93327","type":"PanTool"},{"id":"93328","type":"BoxZoomTool"},{"id":"93329","type":"WheelZoomTool"},{"id":"93330","type":"BoxSelectTool"},{"id":"93331","type":"LassoSelectTool"},{"id":"93332","type":"UndoTool"},{"id":"93333","type":"RedoTool"},{"id":"93334","type":"ResetTool"},{"id":"93335","type":"SaveTool"},{"id":"93336","type":"HoverTool"}]},"id":"93337","type":"Toolbar"},{"attributes":{},"id":"93385","type":"UnionRenderers"},{"attributes":{"data_source":{"id":"93360","type":"ColumnDataSource"},"glyph":{"id":"93361","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"93362","type":"Circle"},"selection_glyph":null,"view":{"id":"93364","type":"CDSView"}},"id":"93363","type":"GlyphRenderer"},{"attributes":{"axis_label":"Deviance","formatter":{"id":"93378","type":"BasicTickFormatter"},"ticker":{"id":"93318","type":"BasicTicker"}},"id":"93317","type":"LinearAxis"},{"attributes":{"line_color":{"value":"grey"},"xs":{"field":"xs"},"ys":{"field":"ys"}},"id":"93356","type":"MultiLine"},{"attributes":{},"id":"93327","type":"PanTool"},{"attributes":{"fill_color":{"value":"grey"},"line_color":{"value":"grey"},"line_width":{"value":2},"size":{"units":"screen","value":6},"x":{"field":"x"},"y":{"field":"y"}},"id":"93351","type":"Triangle"},{"attributes":{},"id":"93334","type":"ResetTool"},{"attributes":{"overlay":{"id":"93391","type":"BoxAnnotation"}},"id":"93328","type":"BoxZoomTool"},{"attributes":{},"id":"93335","type":"SaveTool"},{"attributes":{},"id":"93390","type":"Selection"},{"attributes":{"text":""},"id":"93377","type":"Title"},{"attributes":{},"id":"93333","type":"RedoTool"},{"attributes":{"fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"xs_units":"screen","ys_units":"screen"},"id":"93393","type":"PolyAnnotation"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"line_width":{"value":2},"size":{"units":"screen","value":6},"x":{"field":"x"},"y":{"field":"y"}},"id":"93352","type":"Triangle"},{"attributes":{"dimension":1,"ticker":{"id":"93323","type":"BasicTicker"}},"id":"93326","type":"Grid"},{"attributes":{"fill_color":{"value":null},"line_width":{"value":2},"size":{"units":"screen","value":6},"x":{"field":"x"},"y":{"field":"y"}},"id":"93361","type":"Circle"},{"attributes":{},"id":"93384","type":"Selection"},{"attributes":{},"id":"93329","type":"WheelZoomTool"},{"attributes":{},"id":"93382","type":"Selection"},{"attributes":{},"id":"93389","type":"UnionRenderers"},{"attributes":{},"id":"93386","type":"Selection"},{"attributes":{"xs":{"field":"xs"},"ys":{"field":"ys"}},"id":"93366","type":"MultiLine"},{"attributes":{},"id":"93380","type":"BasicTickFormatter"},{"attributes":{},"id":"93383","type":"UnionRenderers"},{"attributes":{"data_source":{"id":"93365","type":"ColumnDataSource"},"glyph":{"id":"93366","type":"MultiLine"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"93367","type":"MultiLine"},"selection_glyph":null,"view":{"id":"93369","type":"CDSView"}},"id":"93368","type":"GlyphRenderer"},{"attributes":{"source":{"id":"93360","type":"ColumnDataSource"}},"id":"93364","type":"CDSView"},{"attributes":{},"id":"93332","type":"UndoTool"},{"attributes":{"source":{"id":"93355","type":"ColumnDataSource"}},"id":"93359","type":"CDSView"},{"attributes":{},"id":"93323","type":"BasicTicker"},{"attributes":{},"id":"93388","type":"Selection"},{"attributes":{},"id":"93315","type":"LinearScale"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"line_width":{"value":2},"size":{"units":"screen","value":6},"x":{"field":"x"},"y":{"field":"y"}},"id":"93362","type":"Circle"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"line_width":{"value":2},"size":{"units":"screen","value":6},"x":{"field":"x"},"y":{"field":"y"}},"id":"93372","type":"Circle"},{"attributes":{"callback":null,"data":{"x":[59.6908040037226,59.712642429907305],"y":[0.0,-1.0]},"selected":{"id":"93390","type":"Selection"},"selection_policy":{"id":"93389","type":"UnionRenderers"}},"id":"93370","type":"ColumnDataSource"},{"attributes":{"callback":null,"data":{"x":[61.5159539736469],"y":[-0.75]},"selected":{"id":"93382","type":"Selection"},"selection_policy":{"id":"93381","type":"UnionRenderers"}},"id":"93350","type":"ColumnDataSource"},{"attributes":{"data_source":{"id":"93355","type":"ColumnDataSource"},"glyph":{"id":"93356","type":"MultiLine"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"93357","type":"MultiLine"},"selection_glyph":null,"view":{"id":"93359","type":"CDSView"}},"id":"93358","type":"GlyphRenderer"},{"attributes":{"source":{"id":"93370","type":"ColumnDataSource"}},"id":"93374","type":"CDSView"},{"attributes":{"callback":null,"overlay":{"id":"93393","type":"PolyAnnotation"}},"id":"93331","type":"LassoSelectTool"},{"attributes":{"data_source":{"id":"93350","type":"ColumnDataSource"},"glyph":{"id":"93351","type":"Triangle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"93352","type":"Triangle"},"selection_glyph":null,"view":{"id":"93354","type":"CDSView"}},"id":"93353","type":"GlyphRenderer"}],"root_ids":["93308"]},"title":"Bokeh Application","version":"1.4.0"}}';
                  var render_items = [{"docid":"123d1887-b6f7-46e1-8f18-024fd5e199b8","roots":{"93308":"5505859c-b5b6-4025-9468-7d2188267174"}}];
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