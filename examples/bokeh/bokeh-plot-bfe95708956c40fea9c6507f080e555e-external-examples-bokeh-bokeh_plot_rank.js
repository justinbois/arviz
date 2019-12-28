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
      };var element = document.getElementById("06f33d7a-c75f-40c5-b114-a462130cee80");
      if (element == null) {
        console.error("Bokeh: ERROR: autoload.js configured with elementid '06f33d7a-c75f-40c5-b114-a462130cee80' but no matching script tag was found. ")
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
                    
                  var docs_json = '{"785ce47c-dff2-408d-9f8b-54b4d3f4e37d":{"roots":{"references":[{"attributes":{"bottom":{"value":1},"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"118388","type":"VBar"},{"attributes":{},"id":"118364","type":"UndoTool"},{"attributes":{"axis_label":"Rank (all chains)","formatter":{"id":"118437","type":"BasicTickFormatter"},"major_label_overrides":{"0":"0","1":"1","2":"2","3":"3"},"ticker":{"id":"118312","type":"BasicTicker"}},"id":"118311","type":"LinearAxis"},{"attributes":{"callback":null},"id":"118330","type":"HoverTool"},{"attributes":{"source":{"id":"118420","type":"ColumnDataSource"}},"id":"118424","type":"CDSView"},{"attributes":{},"id":"118307","type":"LinearScale"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"118449","type":"BoxAnnotation"},{"attributes":{"line_dash":[6],"location":2.480769230769231},"id":"118425","type":"Span"},{"attributes":{"line_dash":[6],"location":3.480769230769231},"id":"118431","type":"Span"},{"attributes":{},"id":"118459","type":"Selection"},{"attributes":{"dimension":1,"ticker":{"id":"118317","type":"BasicTicker"}},"id":"118320","type":"Grid"},{"attributes":{},"id":"118453","type":"BasicTickFormatter"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"118321","type":"PanTool"},{"id":"118322","type":"BoxZoomTool"},{"id":"118323","type":"WheelZoomTool"},{"id":"118324","type":"BoxSelectTool"},{"id":"118325","type":"LassoSelectTool"},{"id":"118326","type":"UndoTool"},{"id":"118327","type":"RedoTool"},{"id":"118328","type":"ResetTool"},{"id":"118329","type":"SaveTool"},{"id":"118330","type":"HoverTool"}]},"id":"118331","type":"Toolbar"},{"attributes":{"fill_color":{"value":"#2a2eec"},"line_color":{"value":"white"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"118381","type":"VBar"},{"attributes":{},"id":"118312","type":"BasicTicker"},{"attributes":{"bottom":{"value":1},"fill_color":{"value":"#fa7c17"},"line_color":{"value":"white"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"118387","type":"VBar"},{"attributes":{},"id":"118350","type":"BasicTicker"},{"attributes":{"text":"mu"},"id":"118434","type":"Title"},{"attributes":{"line_dash":[6],"location":3.4166666666666665},"id":"118403","type":"Span"},{"attributes":{"fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"xs_units":"screen","ys_units":"screen"},"id":"118450","type":"PolyAnnotation"},{"attributes":{"ticker":{"id":"118312","type":"BasicTicker"}},"id":"118315","type":"Grid"},{"attributes":{"line_dash":[6],"location":0.41666666666666663},"id":"118385","type":"Span"},{"attributes":{},"id":"118437","type":"BasicTickFormatter"},{"attributes":{"ticker":{"id":"118350","type":"BasicTicker"}},"id":"118353","type":"Grid"},{"attributes":{"callback":null,"data":{"top":{"__ndarray__":"ZWZmZmZm7j9OG+i0gU7XP2cDnTbQad8/WfKLJb9Y2j9Bpw102kDTP17JL5b8Yt0/PW2g0wY60T9U8oslv1jaP1ws+cWSX9w/WlVVVVVV2T9SVVVVVVXZPzTQaQOdNuA/ZgOdNtBp3z9m8oslv1jaP0h+seQXS9Y/SH6x5BdL1j84baDTBjrRPz+nDXTaQNM/SH6x5BdL1j8=","dtype":"float64","shape":[19]},"x":{"__ndarray__":"DeU1lNdQSkDKayivobxjQCivobyGcnBAbCivobwGd0CuobyG8pp9QHkN5TWUF4JAGsprKK9hhUC8hvIayquIQF5DeQ3l9YtAAAAAAABAj0BQXkN5DUWRQKK8hvIa6pJA8hrKayiPlEBDeQ3lNTSWQJTXUF5D2ZdA5DWU11B+mUA2lNdQXiObQIbyGspryJxA2FBeQ3ltnkA=","dtype":"float64","shape":[19]}},"selected":{"id":"118441","type":"Selection"},"selection_policy":{"id":"118440","type":"UnionRenderers"}},"id":"118380","type":"ColumnDataSource"},{"attributes":{"callback":null,"data":{"top":{"__ndarray__":"EPzAD/zACUAg+IEf+IELQMEP/MAPfApAdmIndmKnC0A4ciM3ciMOQIZe6IVeaA1Ah17ohV5oDUDYiZ3YiR0NQD7wAz/wAw9Ae6EXeqEXDEAbuZEbuRELQHZiJ3ZipwtAeqEXeqEXDEB0IzdyIzcLQBu5kRu5EQtAFDuxEzsxCkByIzdyIzcLQBu5kRu5EQtAxU7sxE7sCkA=","dtype":"float64","shape":[19]},"x":{"__ndarray__":"DeU1lNdQSkDKayivobxjQCivobyGcnBAbCivobwGd0CuobyG8pp9QHkN5TWUF4JAGsprKK9hhUC8hvIayquIQF5DeQ3l9YtAAAAAAABAj0BQXkN5DUWRQKK8hvIa6pJA8hrKayiPlEBDeQ3lNTSWQJTXUF5D2ZdA5DWU11B+mUA2lNdQXiObQIbyGspryJxA2FBeQ3ltnkA=","dtype":"float64","shape":[19]}},"selected":{"id":"118463","type":"Selection"},"selection_policy":{"id":"118462","type":"UnionRenderers"}},"id":"118426","type":"ColumnDataSource"},{"attributes":{"axis_label":"Chain","formatter":{"id":"118439","type":"BasicTickFormatter"},"ticker":{"id":"118404","type":"FixedTicker"}},"id":"118316","type":"LinearAxis"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"118448","type":"BoxAnnotation"},{"attributes":{"children":[[{"id":"118302","subtype":"Figure","type":"Plot"},0,0],[{"id":"118342","subtype":"Figure","type":"Plot"},0,1]]},"id":"118468","type":"GridBox"},{"attributes":{"data_source":{"id":"118420","type":"ColumnDataSource"},"glyph":{"id":"118421","type":"VBar"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"118422","type":"VBar"},"selection_glyph":null,"view":{"id":"118424","type":"CDSView"}},"id":"118423","type":"GlyphRenderer"},{"attributes":{"callback":null,"data":{"top":{"__ndarray__":"6YVe6IVe4D9nZmZmZmbeP2dmZmZmZu4/WWqlVmql7D/eyI3cyI3YP7vQC73QC9U/uBM7sRM73T+vEzuxEzvdPyZ2Yid2Ytc/lxu5kRu52T8ZuZEbuZHfP5AbuZEbudk/QS/0Qi/04D8LwQ/8wA/cP5AbuZEbudk/q9RKrdRK4z9BL/RCL/TgPyZ2Yid2Ytc/USu1Uiu1wj8=","dtype":"float64","shape":[19]},"x":{"__ndarray__":"DeU1lNdQSkDKayivobxjQCivobyGcnBAbCivobwGd0CuobyG8pp9QHkN5TWUF4JAGsprKK9hhUC8hvIayquIQF5DeQ3l9YtAAAAAAABAj0BQXkN5DUWRQKK8hvIa6pJA8hrKayiPlEBDeQ3lNTSWQJTXUF5D2ZdA5DWU11B+mUA2lNdQXiObQIbyGspryJxA2FBeQ3ltnkA=","dtype":"float64","shape":[19]}},"selected":{"id":"118457","type":"Selection"},"selection_policy":{"id":"118456","type":"UnionRenderers"}},"id":"118408","type":"ColumnDataSource"},{"attributes":{},"id":"118455","type":"BasicTickFormatter"},{"attributes":{},"id":"118355","type":"BasicTicker"},{"attributes":{},"id":"118317","type":"BasicTicker"},{"attributes":{"callback":null,"data":{"top":{"__ndarray__":"AAAAAAAA8D8OdNpApw30PxSuR+F6FPY/1AY6baDT9T8c6LSBThv4PxdLfrHkF/c/1QY6baDT9T+V/GLJL5b2P1jyiyW/WPc/43oUrkfh+T8ehetRuB75PxdLfrHkF/c/mJmZmZmZ9z8YrkfhehT2P1RVVVVVVfY/lfxiyS+W9j/gehSuR+H5P5iZmZmZmfc/kl8s+cWS9T8=","dtype":"float64","shape":[19]},"x":{"__ndarray__":"DeU1lNdQSkDKayivobxjQCivobyGcnBAbCivobwGd0CuobyG8pp9QHkN5TWUF4JAGsprKK9hhUC8hvIayquIQF5DeQ3l9YtAAAAAAABAj0BQXkN5DUWRQKK8hvIa6pJA8hrKayiPlEBDeQ3lNTSWQJTXUF5D2ZdA5DWU11B+mUA2lNdQXiObQIbyGspryJxA2FBeQ3ltnkA=","dtype":"float64","shape":[19]}},"selected":{"id":"118443","type":"Selection"},"selection_policy":{"id":"118442","type":"UnionRenderers"}},"id":"118386","type":"ColumnDataSource"},{"attributes":{},"id":"118456","type":"UnionRenderers"},{"attributes":{"bottom":{"value":3},"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"118400","type":"VBar"},{"attributes":{"axis_label":"Chain","formatter":{"id":"118455","type":"BasicTickFormatter"},"ticker":{"id":"118432","type":"FixedTicker"}},"id":"118354","type":"LinearAxis"},{"attributes":{"callback":null,"data":{"top":{"__ndarray__":"AAAAAAAAAECkcD0K1yMBQCa/WPKLpQFA6LSBThtoAkBqA5020OkCQCz5xZJfrANA8O7u7u5uBEDrUbgehWsDQOtRuB6FawNAC9ejcD0KA0BKfrHkF0sDQA102kCnDQRAqqqqqqoqA0BQG+i0gU4EQC+W/GLJrwRAThvotIFOBECuR+F6FC4EQE4b6LSBTgRAcD0K16PwBEA=","dtype":"float64","shape":[19]},"x":{"__ndarray__":"DeU1lNdQSkDKayivobxjQCivobyGcnBAbCivobwGd0CuobyG8pp9QHkN5TWUF4JAGsprKK9hhUC8hvIayquIQF5DeQ3l9YtAAAAAAABAj0BQXkN5DUWRQKK8hvIa6pJA8hrKayiPlEBDeQ3lNTSWQJTXUF5D2ZdA5DWU11B+mUA2lNdQXiObQIbyGspryJxA2FBeQ3ltnkA=","dtype":"float64","shape":[19]}},"selected":{"id":"118445","type":"Selection"},"selection_policy":{"id":"118444","type":"UnionRenderers"}},"id":"118392","type":"ColumnDataSource"},{"attributes":{"callback":null,"data":{"top":{"__ndarray__":"4Qd+4Af+BUDVSq3USq0EQBh6oRd6oQJAGHqhF3qhAkAUO7ETOzECQCu1Uiu10gRAd2IndmKnA0DFTuzETuwCQHIjN3IjNwNAJDdyIzfyA0Bu5EZu5MYCQB/4gR/4gQNAxU7sxE7sAkDTC73QCz0EQNALvdALPQRA0Au90As9BEB6oRd6oRcEQIIf+IEf+ARAhl7ohV5oBUA=","dtype":"float64","shape":[19]},"x":{"__ndarray__":"DeU1lNdQSkDKayivobxjQCivobyGcnBAbCivobwGd0CuobyG8pp9QHkN5TWUF4JAGsprKK9hhUC8hvIayquIQF5DeQ3l9YtAAAAAAABAj0BQXkN5DUWRQKK8hvIa6pJA8hrKayiPlEBDeQ3lNTSWQJTXUF5D2ZdA5DWU11B+mUA2lNdQXiObQIbyGspryJxA2FBeQ3ltnkA=","dtype":"float64","shape":[19]}},"selected":{"id":"118461","type":"Selection"},"selection_policy":{"id":"118460","type":"UnionRenderers"}},"id":"118420","type":"ColumnDataSource"},{"attributes":{"source":{"id":"118398","type":"ColumnDataSource"}},"id":"118402","type":"CDSView"},{"attributes":{},"id":"118347","type":"LinearScale"},{"attributes":{},"id":"118457","type":"Selection"},{"attributes":{"children":[{"id":"118470","type":"ToolbarBox"},{"id":"118468","type":"GridBox"}]},"id":"118471","type":"Column"},{"attributes":{"ticks":[0,1,2,3]},"id":"118404","type":"FixedTicker"},{"attributes":{"bottom":{"value":2},"fill_color":{"value":"#328c06"},"line_color":{"value":"white"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"118421","type":"VBar"},{"attributes":{"data_source":{"id":"118392","type":"ColumnDataSource"},"glyph":{"id":"118393","type":"VBar"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"118394","type":"VBar"},"selection_glyph":null,"view":{"id":"118396","type":"CDSView"}},"id":"118395","type":"GlyphRenderer"},{"attributes":{"dimension":1,"ticker":{"id":"118355","type":"BasicTicker"}},"id":"118358","type":"Grid"},{"attributes":{"bottom":{"value":2},"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"118422","type":"VBar"},{"attributes":{},"id":"118361","type":"WheelZoomTool"},{"attributes":{"source":{"id":"118380","type":"ColumnDataSource"}},"id":"118384","type":"CDSView"},{"attributes":{"callback":null,"data":{"top":{"__ndarray__":"MzMzMzOzDUC4HoXrUTgPQDCW/GLJrwxA0GkDnTbQDEBtoNMGOu0LQOi0gU4baApAzszMzMzMC0DrUbgehWsLQClcj8L1qApAqA102kAnCkBH4XoUrkcKQMaSXyz5xQlA6LSBThtoCkAqXI/C9agKQClcj8L1qApACtejcD0KC0AGOm2g0wYKQMkvlvxiyQpAaQOdNtDpCkA=","dtype":"float64","shape":[19]},"x":{"__ndarray__":"DeU1lNdQSkDKayivobxjQCivobyGcnBAbCivobwGd0CuobyG8pp9QHkN5TWUF4JAGsprKK9hhUC8hvIayquIQF5DeQ3l9YtAAAAAAABAj0BQXkN5DUWRQKK8hvIa6pJA8hrKayiPlEBDeQ3lNTSWQJTXUF5D2ZdA5DWU11B+mUA2lNdQXiObQIbyGspryJxA2FBeQ3ltnkA=","dtype":"float64","shape":[19]}},"selected":{"id":"118447","type":"Selection"},"selection_policy":{"id":"118446","type":"UnionRenderers"}},"id":"118398","type":"ColumnDataSource"},{"attributes":{},"id":"118458","type":"UnionRenderers"},{"attributes":{"below":[{"id":"118311","type":"LinearAxis"}],"center":[{"id":"118315","type":"Grid"},{"id":"118320","type":"Grid"},{"id":"118385","type":"Span"},{"id":"118391","type":"Span"},{"id":"118397","type":"Span"},{"id":"118403","type":"Span"}],"left":[{"id":"118316","type":"LinearAxis"}],"output_backend":"webgl","plot_height":331,"plot_width":496,"renderers":[{"id":"118383","type":"GlyphRenderer"},{"id":"118389","type":"GlyphRenderer"},{"id":"118395","type":"GlyphRenderer"},{"id":"118401","type":"GlyphRenderer"}],"title":{"id":"118406","type":"Title"},"toolbar":{"id":"118331","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"118303","type":"DataRange1d"},"x_scale":{"id":"118307","type":"LinearScale"},"y_range":{"id":"118305","type":"DataRange1d"},"y_scale":{"id":"118309","type":"LinearScale"}},"id":"118302","subtype":"Figure","type":"Plot"},{"attributes":{"line_dash":[6],"location":2.4166666666666665},"id":"118397","type":"Span"},{"attributes":{},"id":"118345","type":"LinearScale"},{"attributes":{"data_source":{"id":"118380","type":"ColumnDataSource"},"glyph":{"id":"118381","type":"VBar"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"118382","type":"VBar"},"selection_glyph":null,"view":{"id":"118384","type":"CDSView"}},"id":"118383","type":"GlyphRenderer"},{"attributes":{},"id":"118439","type":"BasicTickFormatter"},{"attributes":{},"id":"118460","type":"UnionRenderers"},{"attributes":{"callback":null},"id":"118305","type":"DataRange1d"},{"attributes":{"data_source":{"id":"118426","type":"ColumnDataSource"},"glyph":{"id":"118427","type":"VBar"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"118428","type":"VBar"},"selection_glyph":null,"view":{"id":"118430","type":"CDSView"}},"id":"118429","type":"GlyphRenderer"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"118382","type":"VBar"},{"attributes":{"source":{"id":"118392","type":"ColumnDataSource"}},"id":"118396","type":"CDSView"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"118465","type":"BoxAnnotation"},{"attributes":{},"id":"118440","type":"UnionRenderers"},{"attributes":{"bottom":{"value":3},"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"118428","type":"VBar"},{"attributes":{"axis_label":"Rank (all chains)","formatter":{"id":"118453","type":"BasicTickFormatter"},"major_label_overrides":{"0":"0","1":"1","2":"2","3":"3"},"ticker":{"id":"118350","type":"BasicTicker"}},"id":"118349","type":"LinearAxis"},{"attributes":{"bottom":{"value":3},"fill_color":{"value":"#c10c90"},"line_color":{"value":"white"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"118399","type":"VBar"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"118410","type":"VBar"},{"attributes":{"text":"tau"},"id":"118406","type":"Title"},{"attributes":{"source":{"id":"118414","type":"ColumnDataSource"}},"id":"118418","type":"CDSView"},{"attributes":{},"id":"118447","type":"Selection"},{"attributes":{},"id":"118461","type":"Selection"},{"attributes":{},"id":"118321","type":"PanTool"},{"attributes":{"callback":null,"data":{"top":{"__ndarray__":"P/ADP/AD9z+SG7mRG7n2Py/0Qi/0QvU/eqEXeqEX9D9IbuRGbuT3P4If+IEf+PQ/MPRCL/RC9T+ZmZmZmZn3Pyd2Yid2YvQ/9kIv9EIv+D+4kRu5kRv7P7ATO7ETO/o/oBd6oRd6+D+mF3qhF3r4P1ZqpVZqpfk/9EIv9EIv+D9GbuRGbuT3P07sxE7sxPg/wA/8wA/8+z8=","dtype":"float64","shape":[19]},"x":{"__ndarray__":"DeU1lNdQSkDKayivobxjQCivobyGcnBAbCivobwGd0CuobyG8pp9QHkN5TWUF4JAGsprKK9hhUC8hvIayquIQF5DeQ3l9YtAAAAAAABAj0BQXkN5DUWRQKK8hvIa6pJA8hrKayiPlEBDeQ3lNTSWQJTXUF5D2ZdA5DWU11B+mUA2lNdQXiObQIbyGspryJxA2FBeQ3ltnkA=","dtype":"float64","shape":[19]}},"selected":{"id":"118459","type":"Selection"},"selection_policy":{"id":"118458","type":"UnionRenderers"}},"id":"118414","type":"ColumnDataSource"},{"attributes":{"bottom":{"value":3},"fill_color":{"value":"#c10c90"},"line_color":{"value":"white"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"118427","type":"VBar"},{"attributes":{},"id":"118462","type":"UnionRenderers"},{"attributes":{"callback":null},"id":"118368","type":"HoverTool"},{"attributes":{},"id":"118366","type":"ResetTool"},{"attributes":{"overlay":{"id":"118448","type":"BoxAnnotation"}},"id":"118322","type":"BoxZoomTool"},{"attributes":{"line_dash":[6],"location":0.48076923076923067},"id":"118413","type":"Span"},{"attributes":{"bottom":{"value":2},"fill_color":{"value":"#328c06"},"line_color":{"value":"white"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"118393","type":"VBar"},{"attributes":{"bottom":{"value":1},"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"118416","type":"VBar"},{"attributes":{"bottom":{"value":2},"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"118394","type":"VBar"},{"attributes":{"ticks":[0,1,2,3]},"id":"118432","type":"FixedTicker"},{"attributes":{},"id":"118441","type":"Selection"},{"attributes":{},"id":"118359","type":"PanTool"},{"attributes":{},"id":"118323","type":"WheelZoomTool"},{"attributes":{"fill_color":{"value":"#2a2eec"},"line_color":{"value":"white"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"118409","type":"VBar"},{"attributes":{},"id":"118445","type":"Selection"},{"attributes":{},"id":"118463","type":"Selection"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"118359","type":"PanTool"},{"id":"118360","type":"BoxZoomTool"},{"id":"118361","type":"WheelZoomTool"},{"id":"118362","type":"BoxSelectTool"},{"id":"118363","type":"LassoSelectTool"},{"id":"118364","type":"UndoTool"},{"id":"118365","type":"RedoTool"},{"id":"118366","type":"ResetTool"},{"id":"118367","type":"SaveTool"},{"id":"118368","type":"HoverTool"}]},"id":"118369","type":"Toolbar"},{"attributes":{},"id":"118309","type":"LinearScale"},{"attributes":{"data_source":{"id":"118408","type":"ColumnDataSource"},"glyph":{"id":"118409","type":"VBar"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"118410","type":"VBar"},"selection_glyph":null,"view":{"id":"118412","type":"CDSView"}},"id":"118411","type":"GlyphRenderer"},{"attributes":{},"id":"118442","type":"UnionRenderers"},{"attributes":{"overlay":{"id":"118464","type":"BoxAnnotation"}},"id":"118360","type":"BoxZoomTool"},{"attributes":{"data_source":{"id":"118386","type":"ColumnDataSource"},"glyph":{"id":"118387","type":"VBar"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"118388","type":"VBar"},"selection_glyph":null,"view":{"id":"118390","type":"CDSView"}},"id":"118389","type":"GlyphRenderer"},{"attributes":{"callback":null,"overlay":{"id":"118449","type":"BoxAnnotation"}},"id":"118324","type":"BoxSelectTool"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"118464","type":"BoxAnnotation"},{"attributes":{"bottom":{"value":1},"fill_color":{"value":"#fa7c17"},"line_color":{"value":"white"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"118415","type":"VBar"},{"attributes":{},"id":"118443","type":"Selection"},{"attributes":{"callback":null,"overlay":{"id":"118465","type":"BoxAnnotation"}},"id":"118362","type":"BoxSelectTool"},{"attributes":{"callback":null},"id":"118303","type":"DataRange1d"},{"attributes":{"callback":null,"overlay":{"id":"118450","type":"PolyAnnotation"}},"id":"118325","type":"LassoSelectTool"},{"attributes":{"fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"xs_units":"screen","ys_units":"screen"},"id":"118466","type":"PolyAnnotation"},{"attributes":{"source":{"id":"118386","type":"ColumnDataSource"}},"id":"118390","type":"CDSView"},{"attributes":{},"id":"118329","type":"SaveTool"},{"attributes":{"source":{"id":"118408","type":"ColumnDataSource"}},"id":"118412","type":"CDSView"},{"attributes":{},"id":"118444","type":"UnionRenderers"},{"attributes":{"below":[{"id":"118349","type":"LinearAxis"}],"center":[{"id":"118353","type":"Grid"},{"id":"118358","type":"Grid"},{"id":"118413","type":"Span"},{"id":"118419","type":"Span"},{"id":"118425","type":"Span"},{"id":"118431","type":"Span"}],"left":[{"id":"118354","type":"LinearAxis"}],"output_backend":"webgl","plot_height":331,"plot_width":496,"renderers":[{"id":"118411","type":"GlyphRenderer"},{"id":"118417","type":"GlyphRenderer"},{"id":"118423","type":"GlyphRenderer"},{"id":"118429","type":"GlyphRenderer"}],"title":{"id":"118434","type":"Title"},"toolbar":{"id":"118369","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"118303","type":"DataRange1d"},"x_scale":{"id":"118345","type":"LinearScale"},"y_range":{"id":"118305","type":"DataRange1d"},"y_scale":{"id":"118347","type":"LinearScale"}},"id":"118342","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"118367","type":"SaveTool"},{"attributes":{},"id":"118328","type":"ResetTool"},{"attributes":{"source":{"id":"118426","type":"ColumnDataSource"}},"id":"118430","type":"CDSView"},{"attributes":{"tools":[{"id":"118321","type":"PanTool"},{"id":"118322","type":"BoxZoomTool"},{"id":"118323","type":"WheelZoomTool"},{"id":"118324","type":"BoxSelectTool"},{"id":"118325","type":"LassoSelectTool"},{"id":"118326","type":"UndoTool"},{"id":"118327","type":"RedoTool"},{"id":"118328","type":"ResetTool"},{"id":"118329","type":"SaveTool"},{"id":"118330","type":"HoverTool"},{"id":"118359","type":"PanTool"},{"id":"118360","type":"BoxZoomTool"},{"id":"118361","type":"WheelZoomTool"},{"id":"118362","type":"BoxSelectTool"},{"id":"118363","type":"LassoSelectTool"},{"id":"118364","type":"UndoTool"},{"id":"118365","type":"RedoTool"},{"id":"118366","type":"ResetTool"},{"id":"118367","type":"SaveTool"},{"id":"118368","type":"HoverTool"}]},"id":"118469","type":"ProxyToolbar"},{"attributes":{},"id":"118326","type":"UndoTool"},{"attributes":{"line_dash":[6],"location":1.4166666666666665},"id":"118391","type":"Span"},{"attributes":{"data_source":{"id":"118414","type":"ColumnDataSource"},"glyph":{"id":"118415","type":"VBar"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"118416","type":"VBar"},"selection_glyph":null,"view":{"id":"118418","type":"CDSView"}},"id":"118417","type":"GlyphRenderer"},{"attributes":{"callback":null,"overlay":{"id":"118466","type":"PolyAnnotation"}},"id":"118363","type":"LassoSelectTool"},{"attributes":{},"id":"118365","type":"RedoTool"},{"attributes":{"data_source":{"id":"118398","type":"ColumnDataSource"},"glyph":{"id":"118399","type":"VBar"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"118400","type":"VBar"},"selection_glyph":null,"view":{"id":"118402","type":"CDSView"}},"id":"118401","type":"GlyphRenderer"},{"attributes":{"toolbar":{"id":"118469","type":"ProxyToolbar"},"toolbar_location":"above"},"id":"118470","type":"ToolbarBox"},{"attributes":{},"id":"118327","type":"RedoTool"},{"attributes":{},"id":"118446","type":"UnionRenderers"},{"attributes":{"line_dash":[6],"location":1.4807692307692308},"id":"118419","type":"Span"}],"root_ids":["118471"]},"title":"Bokeh Application","version":"1.4.0"}}';
                  var render_items = [{"docid":"785ce47c-dff2-408d-9f8b-54b4d3f4e37d","roots":{"118471":"06f33d7a-c75f-40c5-b114-a462130cee80"}}];
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