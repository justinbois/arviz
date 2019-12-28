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
      };var element = document.getElementById("c41fa140-ac8d-439d-bcf8-7b82fc7f5e53");
      if (element == null) {
        console.error("Bokeh: ERROR: autoload.js configured with elementid 'c41fa140-ac8d-439d-bcf8-7b82fc7f5e53' but no matching script tag was found. ")
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
                    
                  var docs_json = '{"b01cc81b-5f53-4a7c-807f-8e1b467d8e55":{"roots":{"references":[{"attributes":{},"id":"114142","type":"UnionRenderers"},{"attributes":{},"id":"114143","type":"Selection"},{"attributes":{"callback":null},"id":"114070","type":"DataRange1d"},{"attributes":{"overlay":{"id":"114159","type":"BoxAnnotation"}},"id":"114089","type":"BoxZoomTool"},{"attributes":{},"id":"114144","type":"UnionRenderers"},{"attributes":{"overlay":{"id":"114146","type":"BoxAnnotation"}},"id":"114049","type":"BoxZoomTool"},{"attributes":{},"id":"114145","type":"Selection"},{"attributes":{},"id":"114094","type":"RedoTool"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"114146","type":"BoxAnnotation"},{"attributes":{},"id":"114095","type":"ResetTool"},{"attributes":{"ticker":{"id":"114079","type":"BasicTicker"}},"id":"114082","type":"Grid"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"114147","type":"BoxAnnotation"},{"attributes":{"below":[{"id":"114078","type":"LinearAxis"}],"center":[{"id":"114082","type":"Grid"},{"id":"114087","type":"Grid"}],"left":[{"id":"114083","type":"LinearAxis"}],"output_backend":"webgl","plot_height":331,"plot_width":496,"renderers":[{"id":"114126","type":"GlyphRenderer"},{"id":"114128","type":"Span"},{"id":"114129","type":"Span"},{"id":"114130","type":"Span"},{"id":"114133","type":"GlyphRenderer"}],"title":{"id":"114135","type":"Title"},"toolbar":{"id":"114098","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"114070","type":"DataRange1d"},"x_scale":{"id":"114074","type":"LinearScale"},"y_range":{"id":"114072","type":"DataRange1d"},"y_scale":{"id":"114076","type":"LinearScale"}},"id":"114069","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"114074","type":"LinearScale"},{"attributes":{"fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"xs_units":"screen","ys_units":"screen"},"id":"114148","type":"PolyAnnotation"},{"attributes":{},"id":"114048","type":"PanTool"},{"attributes":{},"id":"114090","type":"WheelZoomTool"},{"attributes":{"callback":null,"overlay":{"id":"114160","type":"BoxAnnotation"}},"id":"114091","type":"BoxSelectTool"},{"attributes":{},"id":"114151","type":"BasicTickFormatter"},{"attributes":{},"id":"114093","type":"UndoTool"},{"attributes":{},"id":"114088","type":"PanTool"},{"attributes":{},"id":"114153","type":"BasicTickFormatter"},{"attributes":{},"id":"114076","type":"LinearScale"},{"attributes":{},"id":"114155","type":"UnionRenderers"},{"attributes":{"axis_label":"MCSE for quantiles","formatter":{"id":"114140","type":"BasicTickFormatter"},"ticker":{"id":"114044","type":"BasicTicker"}},"id":"114043","type":"LinearAxis"},{"attributes":{},"id":"114156","type":"Selection"},{"attributes":{"angle":{"units":"rad","value":1.5707963267948966},"line_alpha":{"value":0.35},"size":{"units":"screen","value":8},"x":{"field":"rug_x"},"y":{"field":"rug_y"}},"id":"114117","type":"Dash"},{"attributes":{},"id":"114157","type":"UnionRenderers"},{"attributes":{"ticker":{"id":"114039","type":"BasicTicker"}},"id":"114042","type":"Grid"},{"attributes":{},"id":"114158","type":"Selection"},{"attributes":{},"id":"114036","type":"LinearScale"},{"attributes":{},"id":"114039","type":"BasicTicker"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"114159","type":"BoxAnnotation"},{"attributes":{},"id":"114054","type":"RedoTool"},{"attributes":{"axis_label":"Quantile","formatter":{"id":"114138","type":"BasicTickFormatter"},"ticker":{"id":"114039","type":"BasicTicker"}},"id":"114038","type":"LinearAxis"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"114160","type":"BoxAnnotation"},{"attributes":{"fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"xs_units":"screen","ys_units":"screen"},"id":"114161","type":"PolyAnnotation"},{"attributes":{},"id":"114034","type":"LinearScale"},{"attributes":{},"id":"114140","type":"BasicTickFormatter"},{"attributes":{"callback":null,"end":1,"start":-0.05},"id":"114032","type":"DataRange1d"},{"attributes":{"tools":[{"id":"114048","type":"PanTool"},{"id":"114049","type":"BoxZoomTool"},{"id":"114050","type":"WheelZoomTool"},{"id":"114051","type":"BoxSelectTool"},{"id":"114052","type":"LassoSelectTool"},{"id":"114053","type":"UndoTool"},{"id":"114054","type":"RedoTool"},{"id":"114055","type":"ResetTool"},{"id":"114056","type":"SaveTool"},{"id":"114057","type":"HoverTool"},{"id":"114088","type":"PanTool"},{"id":"114089","type":"BoxZoomTool"},{"id":"114090","type":"WheelZoomTool"},{"id":"114091","type":"BoxSelectTool"},{"id":"114092","type":"LassoSelectTool"},{"id":"114093","type":"UndoTool"},{"id":"114094","type":"RedoTool"},{"id":"114095","type":"ResetTool"},{"id":"114096","type":"SaveTool"},{"id":"114097","type":"HoverTool"}]},"id":"114164","type":"ProxyToolbar"},{"attributes":{"data_source":{"id":"114118","type":"ColumnDataSource"},"glyph":{"id":"114117","type":"Dash"},"hover_glyph":null,"muted_glyph":null,"view":{"id":"114120","type":"CDSView"}},"id":"114119","type":"GlyphRenderer"},{"attributes":{},"id":"114096","type":"SaveTool"},{"attributes":{"children":[[{"id":"114029","subtype":"Figure","type":"Plot"},0,0],[{"id":"114069","subtype":"Figure","type":"Plot"},0,1]]},"id":"114163","type":"GridBox"},{"attributes":{"toolbar":{"id":"114164","type":"ProxyToolbar"},"toolbar_location":"above"},"id":"114165","type":"ToolbarBox"},{"attributes":{},"id":"114050","type":"WheelZoomTool"},{"attributes":{"callback":null,"data":{"rug_x":{"__ndarray__":"jQwCEA1Gsz9bBMLb9PjIP1Qd9Zram7E/yuyJRU9bmT/K7IlFT1uZP8rsiUVPW5k/yuyJRU9bmT/K7IlFT1uZP8rsiUVPW5k/yuyJRU9bmT/K7IlFT1uZP8rsiUVPW5k/yuyJRU9bmT/K7IlFT1uZP8rsiUVPW5k/yuyJRU9bmT/zis1V/mKlP/OKzVX+YqU/84rNVf5ipT/zis1V/mKlP/OKzVX+YqU/84rNVf5ipT/zis1V/mKlP/OKzVX+YqU/aF85wG2piz9oXznAbamLP2hfOcBtqYs/aF85wG2piz9oXznAbamLP2hfOcBtqYs/pI3yRkqEyT9c/+ob+nG6P4OiBeyjALU/mx4fY+a33D9wF2c1cbTRPy51Aws2htg/P07TEgOYwz9FOncTGHy5P/BQ+ANPucc/uRO6PYJJzj9CRCWTDYpmP+UvVnGFsrI/8JR71fNwcj8=","dtype":"float64","shape":[43]},"rug_y":{"__ndarray__":"AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA=","dtype":"float64","shape":[43]}},"selected":{"id":"114145","type":"Selection"},"selection_policy":{"id":"114144","type":"UnionRenderers"}},"id":"114118","type":"ColumnDataSource"},{"attributes":{"children":[{"id":"114165","type":"ToolbarBox"},{"id":"114163","type":"GridBox"}]},"id":"114166","type":"Column"},{"attributes":{"line_alpha":{"value":0.7},"line_width":{"value":1.5},"location":0},"id":"114116","type":"Span"},{"attributes":{"axis_label":"Quantile","formatter":{"id":"114151","type":"BasicTickFormatter"},"ticker":{"id":"114079","type":"BasicTicker"}},"id":"114078","type":"LinearAxis"},{"attributes":{"source":{"id":"114118","type":"ColumnDataSource"}},"id":"114120","type":"CDSView"},{"attributes":{"dimension":1,"ticker":{"id":"114044","type":"BasicTicker"}},"id":"114047","type":"Grid"},{"attributes":{"text":"tau"},"id":"114121","type":"Title"},{"attributes":{"callback":null,"end":1,"start":-0.05},"id":"114072","type":"DataRange1d"},{"attributes":{"callback":null,"data":{"x":{"__ndarray__":"mpmZmZmZqT/SjhUII+24P2wor6G8hsI/bolTv+eWyD9w6vfcEqfOP7klTv2eW9I/O1YgjLRj1T+8hvIaymvYPz23xKnfc9s/vueWOPV73j8gjLRjBcLgP2GkHSsQRuI/oryG8hrK4z/i1O+5JU7lPyPtWIEw0uY/YwXCSDtW6D+kHSsQRtrpP+U1lNdQXus/JU79nlvi7D9mZmZmZmbuPw==","dtype":"float64","shape":[20]},"y":{"__ndarray__":"7qx+MbH82z8taAlcwdPMP2RFpmpIiMs/VPd+dISI1j+QjUmxOK7VPyhwmz5eQNE/YHF86U9Izz8YN/msnr7PPyjO/sTiTs8/LFXTKecq0z/kTaFlAynUP2DJI4UMO84/IGLXJUgNzD8wUKgDDerNPxDSzcUXbc4/kDNyJsikyj/wFHev55XOP4Bvij2VrsQ/4I8dAXxLyD+Ad8zwRu/RPw==","dtype":"float64","shape":[20]}},"selected":{"id":"114156","type":"Selection"},"selection_policy":{"id":"114155","type":"UnionRenderers"}},"id":"114123","type":"ColumnDataSource"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"114124","type":"Circle"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"114125","type":"Circle"},{"attributes":{"line_alpha":{"value":0.5},"line_width":{"value":0.75},"location":0.17824444314769777},"id":"114115","type":"Span"},{"attributes":{"callback":null},"id":"114030","type":"DataRange1d"},{"attributes":{"data_source":{"id":"114123","type":"ColumnDataSource"},"glyph":{"id":"114124","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"114125","type":"Circle"},"selection_glyph":null,"view":{"id":"114127","type":"CDSView"}},"id":"114126","type":"GlyphRenderer"},{"attributes":{},"id":"114044","type":"BasicTicker"},{"attributes":{"callback":null},"id":"114097","type":"HoverTool"},{"attributes":{"source":{"id":"114123","type":"ColumnDataSource"}},"id":"114127","type":"CDSView"},{"attributes":{"line_alpha":{"value":0.5},"line_width":{"value":1.5},"location":0.21484300137312468},"id":"114128","type":"Span"},{"attributes":{"callback":null},"id":"114057","type":"HoverTool"},{"attributes":{"callback":null,"overlay":{"id":"114161","type":"PolyAnnotation"}},"id":"114092","type":"LassoSelectTool"},{"attributes":{},"id":"114079","type":"BasicTicker"},{"attributes":{"line_alpha":{"value":0.5},"line_width":{"value":0.75},"location":0.15209716425007633},"id":"114129","type":"Span"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"114110","type":"Circle"},{"attributes":{"callback":null,"overlay":{"id":"114147","type":"BoxAnnotation"}},"id":"114051","type":"BoxSelectTool"},{"attributes":{"line_alpha":{"value":0.7},"line_width":{"value":1.5},"location":0},"id":"114130","type":"Span"},{"attributes":{"callback":null,"data":{"x":{"__ndarray__":"mpmZmZmZqT/SjhUII+24P2wor6G8hsI/bolTv+eWyD9w6vfcEqfOP7klTv2eW9I/O1YgjLRj1T+8hvIaymvYPz23xKnfc9s/vueWOPV73j8gjLRjBcLgP2GkHSsQRuI/oryG8hrK4z/i1O+5JU7lPyPtWIEw0uY/YwXCSDtW6D+kHSsQRtrpP+U1lNdQXus/JU79nlvi7D9mZmZmZmbuPw==","dtype":"float64","shape":[20]},"y":{"__ndarray__":"TOY7mm62yD9I3tS4V+rMP7gbLMPg7Mo/HHCIRHVOzT9orzckCyTOP1wEFcjrLsw/GFjIBtNVyz+IfM+LFJ/NP2h6CcmRC8w/eFWrsUlMzD9YsRCvESnPPzD6BbtRL9Q/bGdUYzXr0j8AebTCVJLRP+D0hUiIM80/eDGzGTRz0z8oEF3N8onTPzjOhQa9ItQ/kLBgWUSo1j8gMD3n4GLXPw==","dtype":"float64","shape":[20]}},"selected":{"id":"114143","type":"Selection"},"selection_policy":{"id":"114142","type":"UnionRenderers"}},"id":"114109","type":"ColumnDataSource"},{"attributes":{"below":[{"id":"114038","type":"LinearAxis"}],"center":[{"id":"114042","type":"Grid"},{"id":"114047","type":"Grid"}],"left":[{"id":"114043","type":"LinearAxis"}],"output_backend":"webgl","plot_height":331,"plot_width":496,"renderers":[{"id":"114112","type":"GlyphRenderer"},{"id":"114114","type":"Span"},{"id":"114115","type":"Span"},{"id":"114116","type":"Span"},{"id":"114119","type":"GlyphRenderer"}],"title":{"id":"114121","type":"Title"},"toolbar":{"id":"114058","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"114030","type":"DataRange1d"},"x_scale":{"id":"114034","type":"LinearScale"},"y_range":{"id":"114032","type":"DataRange1d"},"y_scale":{"id":"114036","type":"LinearScale"}},"id":"114029","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"114084","type":"BasicTicker"},{"attributes":{"callback":null,"overlay":{"id":"114148","type":"PolyAnnotation"}},"id":"114052","type":"LassoSelectTool"},{"attributes":{"axis_label":"MCSE for quantiles","formatter":{"id":"114153","type":"BasicTickFormatter"},"ticker":{"id":"114084","type":"BasicTicker"}},"id":"114083","type":"LinearAxis"},{"attributes":{"angle":{"units":"rad","value":1.5707963267948966},"line_alpha":{"value":0.35},"size":{"units":"screen","value":8},"x":{"field":"rug_x"},"y":{"field":"rug_y"}},"id":"114131","type":"Dash"},{"attributes":{},"id":"114053","type":"UndoTool"},{"attributes":{"callback":null,"data":{"rug_x":{"__ndarray__":"fV36E1z/6j89DycBWWfXP73VlTJ7YsE/w8E5M5BGxz/DwTkzkEbHP8PBOTOQRsc/w8E5M5BGxz/DwTkzkEbHP8PBOTOQRsc/w8E5M5BGxz/DwTkzkEbHP8PBOTOQRsc/w8E5M5BGxz/DwTkzkEbHP8PBOTOQRsc/w8E5M5BGxz9P6PYIJnnCP0/o9ggmecI/T+j2CCZ5wj9P6PYIJnnCP0/o9ggmecI/T+j2CCZ5wj9P6PYIJnnCP0/o9ggmecI/txiR/XzQvD+3GJH9fNC8P7cYkf180Lw/txiR/XzQvD+3GJH9fNC8P7cYkf180Lw/Oqay45Jr6D86SHRMZcflP7HThSU1z+I/VdSaCTtd6D9Hvab2ZmSwP8UA5kQ6d4M/0GULqag1oz+aI/Yi4T7rP55DEK8H/NA/qgGd6qjX1D+VqnS/h2ThP/UnuP7VN+Q/TGXHJdeQ2z8=","dtype":"float64","shape":[43]},"rug_y":{"__ndarray__":"AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA=","dtype":"float64","shape":[43]}},"selected":{"id":"114158","type":"Selection"},"selection_policy":{"id":"114157","type":"UnionRenderers"}},"id":"114132","type":"ColumnDataSource"},{"attributes":{"dimension":1,"ticker":{"id":"114084","type":"BasicTicker"}},"id":"114087","type":"Grid"},{"attributes":{"source":{"id":"114109","type":"ColumnDataSource"}},"id":"114113","type":"CDSView"},{"attributes":{"data_source":{"id":"114132","type":"ColumnDataSource"},"glyph":{"id":"114131","type":"Dash"},"hover_glyph":null,"muted_glyph":null,"view":{"id":"114134","type":"CDSView"}},"id":"114133","type":"GlyphRenderer"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"114048","type":"PanTool"},{"id":"114049","type":"BoxZoomTool"},{"id":"114050","type":"WheelZoomTool"},{"id":"114051","type":"BoxSelectTool"},{"id":"114052","type":"LassoSelectTool"},{"id":"114053","type":"UndoTool"},{"id":"114054","type":"RedoTool"},{"id":"114055","type":"ResetTool"},{"id":"114056","type":"SaveTool"},{"id":"114057","type":"HoverTool"}]},"id":"114058","type":"Toolbar"},{"attributes":{"source":{"id":"114132","type":"ColumnDataSource"}},"id":"114134","type":"CDSView"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"114088","type":"PanTool"},{"id":"114089","type":"BoxZoomTool"},{"id":"114090","type":"WheelZoomTool"},{"id":"114091","type":"BoxSelectTool"},{"id":"114092","type":"LassoSelectTool"},{"id":"114093","type":"UndoTool"},{"id":"114094","type":"RedoTool"},{"id":"114095","type":"ResetTool"},{"id":"114096","type":"SaveTool"},{"id":"114097","type":"HoverTool"}]},"id":"114098","type":"Toolbar"},{"attributes":{"data_source":{"id":"114109","type":"ColumnDataSource"},"glyph":{"id":"114110","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"114111","type":"Circle"},"selection_glyph":null,"view":{"id":"114113","type":"CDSView"}},"id":"114112","type":"GlyphRenderer"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"114111","type":"Circle"},{"attributes":{"text":"mu"},"id":"114135","type":"Title"},{"attributes":{},"id":"114055","type":"ResetTool"},{"attributes":{},"id":"114138","type":"BasicTickFormatter"},{"attributes":{},"id":"114056","type":"SaveTool"},{"attributes":{"line_alpha":{"value":0.5},"line_width":{"value":1.5},"location":0.2515582690238711},"id":"114114","type":"Span"}],"root_ids":["114166"]},"title":"Bokeh Application","version":"1.4.0"}}';
                  var render_items = [{"docid":"b01cc81b-5f53-4a7c-807f-8e1b467d8e55","roots":{"114166":"c41fa140-ac8d-439d-bcf8-7b82fc7f5e53"}}];
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