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
      };var element = document.getElementById("a1ef0d6a-1dfe-4a5f-85b8-5d44175136a3");
      if (element == null) {
        console.error("Bokeh: ERROR: autoload.js configured with elementid 'a1ef0d6a-1dfe-4a5f-85b8-5d44175136a3' but no matching script tag was found. ")
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
                    
                  var docs_json = '{"86e12dd6-f682-464c-8225-f34cc3d909f5":{"roots":{"references":[{"attributes":{"overlay":{"id":"97293","type":"BoxAnnotation"}},"id":"97253","type":"BoxZoomTool"},{"attributes":{"callback":null,"data":{"x":{"__ndarray__":"NC1IQO0AAsCKHMnNJZsAwDaw/bANHvy/zzGwV9WQ+b/VPdEBPpj4v+SnVMRvLPa/kECXilum9b93WjHhVzr1v8Eu3BLOkPS/7ke1DJGC878pTvPhfFHzv11Gwe1v8vK/v8VIgJ448r+Twdt73hjyv4MPWIqzNvG/UTLlO49O8L8QyINR1Zzuv7YW3gk33eq/xOKE96p16r8sy94TAgXqv49m/PFhlum/H/dwVoh96L+ZyrJ7gG/ov0vKBn1BlOW/2sAn9puc5L9dpACog5jkv28GxjckA+S/GgnjQ4Va47+uc/UJL/fiv87LyoUMzuG/R3/nk5kj4b/fAPQ2mVfgv6+E1A6xi96/nrCSC9hb3b8EZ9XN8jXTv8zgsXLb4tK/J7/4OtIJ0L9cDbo4zvDFvx3nNqTu4MW/fj8X3WeBw79TO7JdE1jDv2foXBEn88C/hRT6j7FXuL85ubwh0Jyvv3dweKiWA66/wGKG9zF5mb9DB3vtO3OQvxdv6EssaYC/t2Uc+H9JgL/iC0HMIRIpPzvkxyRcbWA/EGsYXYwmoz9u2+ah8TmqPwaqVILxi6w/OctXX+tdvT9S+bCOlEHFPznVNFriMcg/P8ECHiQyyD9YYKup+7rLPylWtPsWGs0/0GayvS9azj/iVn7vin/TP0bQOJOznNM/gcuaALiK1T8MFUPz9wrYP27yeSXIMNo/ksPCqmRI2j9Eu3wFWM/dP1/FvMSkI94/rI8d1QQB4D9QJ0DsU9TgP4NGP6BBNeE/5MB9tgam4T/k7bff96fhP9LaYv8NceI/YPBr0HCW4j+3QVeVG5DjPx3+/FcIIuQ/5Qi/oEeu5j+l2vhwqvDnP6NYxRsPqeg/B0cCZJO/6T/qGaxktw/qP/WzUzhK/Oo/ur6QmsZ37D/b3I38DkztPwpuQUW5uO4/Q0L3ZZXA7z+knYN8RFTwP1aPkGt9dfA/Zu26GKXS8D9YRkO2c5P0PxJUM35ExPU/maEXp76Y9z8yxs6gcpT4P3XMdcIsQ/k/PFpnExzT+T8u5PwUr0D6P08SJooMrfo/mC9r6AQyA0A=","dtype":"float64","shape":[100]},"y":{"__ndarray__":"mKVvfyX+6z/sxm1ktMnuP+UngSf58PE/GOcnVJU38z8WYRf/4LPzPw6s1R3I6fQ/uF+0OtIs9T/EUmcP1GL1P6DokfaYt/U/CVylebc+9j/sWAaPQVf2P9JcHwnIhvY/IJ3bv7Dj9j82HxLCkPP2Pz740zqmZPc/2GYNYrjY9z/8DZ+rylj4P1J6iD2ySPk/T8ceQpVi+T81TQh7v375P1zmgINnmvk/OMJj6p3g+T9aTRPhH+T5P21NvqDvmvo/yg92AtnY+j/p1v8V39n6P2R+DvI2//o/uj0Hr14p+z8Uo4I9NEL7PwxNjd58jPs/LiAGmxm3+z/I/0KyGer7P2pvJd6JLvw/7KmN/oRU/D8gU0WmQZn9P+bDqZGko/0/G+iguMX+/T8qX3Qc86D+P46RvBXxof4/CIwugunH/j9L3CTKfsr+P3ox6o7N8P4/XC+Ac0I9/z8bDXm/jIH/Pz4eXqXxh/8/OvMQnA3N/z/xCSWIGd//P5EXtNOW7/8/muMHgLbv/z+CmEMkMgAAQP2YhKsNAgBA1jC6GE0mAEC3zUPjczQAQFSpBOMXOQBALV99rXd1AEDLh3WkDKoAQKqm0RKPwQBAChbwIJHBAEADW03d190AQLGi3bfQ6ABANpPtfdHyAEBu5feu+DcBQASNMznLOQFAuKwJgKtYAUBRMTR/r4ABQCefV4IMowFAOSysSoakAUC0y1eA9dwBQFbMS0w64gFA9rGjmiAAAkDqBIh9ihoCQNDoBzSoJgJAHLjP1sA0AkC8/fb7/jQCQFpb7L8hTgJADH4NGs5SAkA36KpyA3ICQMSf/wpBhAJAHeEX9MjVAkBVGx9OFf4CQBSreOMhFQNA4UiAbPI3A0A9g5Xs9kEDQH92CkeJXwNA1xdS0/iOA0Cbu5HfgakDQMEtqCgX1wNASOi+rBL4A0Bp5yAfERUEQNYj5FpfHQRAWrsuRqk0BECW0ZDt3CQFQATVjB8RcQVAZujFqS/mBUCMsTOoHCUGQB1znTDLUAZAj9bZBMd0BkAMOT/FK5AGQJSEiSJDqwZAzJc1dAKZCUA=","dtype":"float64","shape":[100]}},"selected":{"id":"97292","type":"Selection"},"selection_policy":{"id":"97291","type":"UnionRenderers"}},"id":"97278","type":"ColumnDataSource"},{"attributes":{},"id":"97289","type":"UnionRenderers"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"97294","type":"BoxAnnotation"},{"attributes":{"line_width":3,"x":{"field":"x"},"y":{"field":"y"}},"id":"97279","type":"Line"},{"attributes":{"callback":null,"data":{"x":{"__ndarray__":"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","dtype":"float64","shape":[400]},"y":{"__ndarray__":"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","dtype":"float64","shape":[400]}},"selected":{"id":"97290","type":"Selection"},"selection_policy":{"id":"97289","type":"UnionRenderers"}},"id":"97273","type":"ColumnDataSource"},{"attributes":{},"id":"97248","type":"BasicTicker"},{"attributes":{"callback":null,"overlay":{"id":"97294","type":"BoxAnnotation"}},"id":"97255","type":"BoxSelectTool"},{"attributes":{},"id":"97291","type":"UnionRenderers"},{"attributes":{},"id":"97292","type":"Selection"},{"attributes":{},"id":"97290","type":"Selection"},{"attributes":{"ticker":{"id":"97243","type":"BasicTicker"}},"id":"97246","type":"Grid"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"97293","type":"BoxAnnotation"},{"attributes":{},"id":"97243","type":"BasicTicker"},{"attributes":{"callback":null},"id":"97261","type":"HoverTool"},{"attributes":{"callback":null,"overlay":{"id":"97295","type":"PolyAnnotation"}},"id":"97256","type":"LassoSelectTool"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"97252","type":"PanTool"},{"id":"97253","type":"BoxZoomTool"},{"id":"97254","type":"WheelZoomTool"},{"id":"97255","type":"BoxSelectTool"},{"id":"97256","type":"LassoSelectTool"},{"id":"97257","type":"UndoTool"},{"id":"97258","type":"RedoTool"},{"id":"97259","type":"ResetTool"},{"id":"97260","type":"SaveTool"},{"id":"97261","type":"HoverTool"}]},"id":"97262","type":"Toolbar"},{"attributes":{"fill_alpha":0.5,"fill_color":"red","line_alpha":0,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"97274","type":"Patch"},{"attributes":{"text":""},"id":"97284","type":"Title"},{"attributes":{"line_alpha":0.1,"line_color":"#1f77b4","line_width":3,"x":{"field":"x"},"y":{"field":"y"}},"id":"97280","type":"Line"},{"attributes":{},"id":"97257","type":"UndoTool"},{"attributes":{},"id":"97285","type":"BasicTickFormatter"},{"attributes":{"data_source":{"id":"97273","type":"ColumnDataSource"},"glyph":{"id":"97274","type":"Patch"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"97275","type":"Patch"},"selection_glyph":null,"view":{"id":"97277","type":"CDSView"}},"id":"97276","type":"GlyphRenderer"},{"attributes":{},"id":"97259","type":"ResetTool"},{"attributes":{},"id":"97258","type":"RedoTool"},{"attributes":{},"id":"97238","type":"LinearScale"},{"attributes":{"callback":null},"id":"97234","type":"DataRange1d"},{"attributes":{},"id":"97260","type":"SaveTool"},{"attributes":{"formatter":{"id":"97287","type":"BasicTickFormatter"},"ticker":{"id":"97248","type":"BasicTicker"}},"id":"97247","type":"LinearAxis"},{"attributes":{"below":[{"id":"97242","type":"LinearAxis"}],"center":[{"id":"97246","type":"Grid"},{"id":"97251","type":"Grid"}],"left":[{"id":"97247","type":"LinearAxis"}],"output_backend":"webgl","plot_height":500,"plot_width":500,"renderers":[{"id":"97276","type":"GlyphRenderer"},{"id":"97281","type":"GlyphRenderer"}],"title":{"id":"97284","type":"Title"},"toolbar":{"id":"97262","type":"Toolbar"},"x_range":{"id":"97234","type":"DataRange1d"},"x_scale":{"id":"97238","type":"LinearScale"},"y_range":{"id":"97236","type":"DataRange1d"},"y_scale":{"id":"97240","type":"LinearScale"}},"id":"97233","subtype":"Figure","type":"Plot"},{"attributes":{"callback":null},"id":"97236","type":"DataRange1d"},{"attributes":{"fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"xs_units":"screen","ys_units":"screen"},"id":"97295","type":"PolyAnnotation"},{"attributes":{},"id":"97287","type":"BasicTickFormatter"},{"attributes":{},"id":"97240","type":"LinearScale"},{"attributes":{},"id":"97254","type":"WheelZoomTool"},{"attributes":{"source":{"id":"97273","type":"ColumnDataSource"}},"id":"97277","type":"CDSView"},{"attributes":{"formatter":{"id":"97285","type":"BasicTickFormatter"},"ticker":{"id":"97243","type":"BasicTicker"}},"id":"97242","type":"LinearAxis"},{"attributes":{"dimension":1,"ticker":{"id":"97248","type":"BasicTicker"}},"id":"97251","type":"Grid"},{"attributes":{"data_source":{"id":"97278","type":"ColumnDataSource"},"glyph":{"id":"97279","type":"Line"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"97280","type":"Line"},"selection_glyph":null,"view":{"id":"97282","type":"CDSView"}},"id":"97281","type":"GlyphRenderer"},{"attributes":{},"id":"97252","type":"PanTool"},{"attributes":{"fill_alpha":0.1,"fill_color":"#1f77b4","line_alpha":0.1,"line_color":"#1f77b4","x":{"field":"x"},"y":{"field":"y"}},"id":"97275","type":"Patch"},{"attributes":{"source":{"id":"97278","type":"ColumnDataSource"}},"id":"97282","type":"CDSView"}],"root_ids":["97233"]},"title":"Bokeh Application","version":"1.4.0"}}';
                  var render_items = [{"docid":"86e12dd6-f682-464c-8225-f34cc3d909f5","roots":{"97233":"a1ef0d6a-1dfe-4a5f-85b8-5d44175136a3"}}];
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