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
      };var element = document.getElementById("d3e7bf1e-7161-47cc-9862-14d59cc046fe");
      if (element == null) {
        console.error("Bokeh: ERROR: autoload.js configured with elementid 'd3e7bf1e-7161-47cc-9862-14d59cc046fe' but no matching script tag was found. ")
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
                    
                  var docs_json = '{"adb329b0-6de4-4de3-8af8-7aee1f4c0b86":{"roots":{"references":[{"attributes":{"callback":null,"data":{"x":{"__ndarray__":"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","dtype":"float64","shape":[224]},"y":{"__ndarray__":"AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAxnlDGyNKsT/GeUMbI0qxP5SOmgM1mLE/bnrjRf8Hsj90gIj0TquyP8Fd1IvPc7M/8ZdZJZdntD8p3ahdg6O1P4YxZJMoH7c/LLR/DYy6uD/IAHuXtIi6Pwv+x5tDfbw/T9IOYeyKvj/Z1/M/klDAP2SmyWzqWcE/qusYIyRjwj/kFXN5OmrDPzK6evGjY8Q/XhtwSb5TxT8R+cKpIzvGP/YeoSC4HMc/uuQa28z6xz+0J+tiVdrIP0EjxQsDu8k/YzBm1JuXyj/0wGN+koDLPyv+AYabZ8w/KwT6FF9KzT87hES5gCfOPyCzUcM19M4/LkMQLVa0zz883DGYrCjQP4p5fP3/ZtA/4dea+1SX0D9OZmwkKrXQP+nOPjR5yNA/nTvBarrK0D95/lqbYsHQP2l45QOntdA/t939iguq0D+S9oG5aKTQP5ErISk7p9A/iayhi/m10D+O0gLwvtnQP44nmp5TE9E/PapEFpJn0T8zyP1Yy87RPwoisVW4T9I/Py3/k/Pb0j8YiHNLyXzTPw+tdSwEKtQ/76DS+M/i1D+5UlSJsaTVP7uFM/k7btY/TBnpRuA/1z+3sKHwZhjYP5N1RUL+8Ng/UEXR0+TU2T/oA09vC8raP20iikodwds/J2yzhPzG3D+k3zya3tfdP2eMFwBb894/uKNCPZUQ4D9MirXMC7LgPwgcGca/VuE/guTMPR4K4j/Tzh9LFcHiP4jPS/W3guM/8uU6EHBL5D/bpUCbFRzlP/ajia//9eU/az9y0zPQ5j+niORKCK/nPwF74R8kjug/LqC3WtJt6T+PMrFpj0nqP9NEMTKYIus/FZJyZD3y6z/y1c3IMbrsP2kMhY53ee0/lJYzIuIt7j/fbOoROdfuP20YJcSece8/ug0B3/n87z9IL02yOz/wPwSnW9l6e/A/2RCXFeex8D/Qua4oBObwP4ryK47+GPE/quNi9uhJ8T+/CZGw+XzxP1+QWm1GsfE/LJHaG9Lo8T++ToJEjSPyP2xNpzMGYvI/FBJAIYCm8j+/4wzH1u/yP1pzbpOiPfM/P1Ui9XKP8z86chIJS+PzP31iR05YOfQ/0wwRtRGQ9D/LdAW7B+j0P92c30l3QfU/29x7mMOc9T9W3jiXUfj1PxEgDSCAVPY/vEVilgm69j9qj0YEGyH3P6JurM7jj/c/y/LfewMI+D8AAAAAAAAAAA==","dtype":"float64","shape":[224]}},"selected":{"id":"98334","type":"Selection"},"selection_policy":{"id":"98333","type":"UnionRenderers"}},"id":"98316","type":"ColumnDataSource"},{"attributes":{},"id":"98285","type":"UndoTool"},{"attributes":{"fill_alpha":0.75,"fill_color":"#2a2eec","line_color":null,"x":{"field":"x"},"y":{"field":"y"}},"id":"98317","type":"Patch"},{"attributes":{},"id":"98286","type":"RedoTool"},{"attributes":{"fill_alpha":0.1,"fill_color":"#1f77b4","line_alpha":0.1,"line_color":"#1f77b4","x":{"field":"x"},"y":{"field":"y"}},"id":"98318","type":"Patch"},{"attributes":{},"id":"98287","type":"ResetTool"},{"attributes":{"data_source":{"id":"98316","type":"ColumnDataSource"},"glyph":{"id":"98317","type":"Patch"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"98318","type":"Patch"},"selection_glyph":null,"view":{"id":"98320","type":"CDSView"}},"id":"98319","type":"GlyphRenderer"},{"attributes":{},"id":"98288","type":"SaveTool"},{"attributes":{"source":{"id":"98316","type":"ColumnDataSource"}},"id":"98320","type":"CDSView"},{"attributes":{"callback":null},"id":"98289","type":"HoverTool"},{"attributes":{"formatter":{"id":"98323","type":"BasicTickFormatter"},"ticker":{"id":"98271","type":"BasicTicker"}},"id":"98270","type":"LinearAxis"},{"attributes":{},"id":"98323","type":"BasicTickFormatter"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"98280","type":"PanTool"},{"id":"98281","type":"BoxZoomTool"},{"id":"98282","type":"WheelZoomTool"},{"id":"98283","type":"BoxSelectTool"},{"id":"98284","type":"LassoSelectTool"},{"id":"98285","type":"UndoTool"},{"id":"98286","type":"RedoTool"},{"id":"98287","type":"ResetTool"},{"id":"98288","type":"SaveTool"},{"id":"98289","type":"HoverTool"}]},"id":"98290","type":"Toolbar"},{"attributes":{"below":[{"id":"98270","type":"LinearAxis"}],"center":[{"id":"98274","type":"Grid"},{"id":"98279","type":"Grid"}],"left":[{"id":"98275","type":"LinearAxis"}],"output_backend":"webgl","plot_height":500,"plot_width":500,"renderers":[{"id":"98304","type":"GlyphRenderer"},{"id":"98309","type":"GlyphRenderer"},{"id":"98314","type":"GlyphRenderer"},{"id":"98319","type":"GlyphRenderer"}],"title":{"id":"98322","type":"Title"},"toolbar":{"id":"98290","type":"Toolbar"},"x_range":{"id":"98262","type":"DataRange1d"},"x_scale":{"id":"98266","type":"LinearScale"},"y_range":{"id":"98264","type":"DataRange1d"},"y_scale":{"id":"98268","type":"LinearScale"}},"id":"98261","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"98325","type":"BasicTickFormatter"},{"attributes":{"data_source":{"id":"98301","type":"ColumnDataSource"},"glyph":{"id":"98302","type":"Patch"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"98303","type":"Patch"},"selection_glyph":null,"view":{"id":"98305","type":"CDSView"}},"id":"98304","type":"GlyphRenderer"},{"attributes":{"ticker":{"id":"98271","type":"BasicTicker"}},"id":"98274","type":"Grid"},{"attributes":{},"id":"98271","type":"BasicTicker"},{"attributes":{"source":{"id":"98301","type":"ColumnDataSource"}},"id":"98305","type":"CDSView"},{"attributes":{},"id":"98266","type":"LinearScale"},{"attributes":{},"id":"98327","type":"UnionRenderers"},{"attributes":{},"id":"98268","type":"LinearScale"},{"attributes":{"callback":null,"data":{"x":{"__ndarray__":"aPYyE8ufwD+1swc7YiDBPwJx3GL5oME/Ti6xipAhwj+b64WyJ6LCP+eoWtq+IsM/NGYvAlajwz+AIwQq7SPEP83g2FGEpMQ/GZ6teRslxT9mW4KhsqXFP7MYV8lJJsY//9Ur8eCmxj9MkwAZeCfHP5hQ1UAPqMc/5Q2qaKYoyD8xy36QPanIP36IU7jUKck/y0Uo4GuqyT8XA/0HAyvKP2TA0S+aq8o/sH2mVzEsyz/9Ont/yKzLP0n4T6dfLcw/lrUkz/atzD/jcvn2jS7NP+Ny+faNLs0/43L59o0uzT+WtSTP9q3MP0n4T6dfLcw//Tp7f8isyz+wfaZXMSzLP2TA0S+aq8o/FwP9BwMryj/LRSjga6rJP36IU7jUKck/Mct+kD2pyD/lDapopijIP5hQ1UAPqMc/TJMAGXgnxz//1Svx4KbGP7MYV8lJJsY/ZluCobKlxT8Znq15GyXFP83g2FGEpMQ/gCMEKu0jxD80Zi8CVqPDP+eoWtq+IsM/m+uFsieiwj9OLrGKkCHCPwJx3GL5oME/tbMHO2IgwT9o9jITy5/AP2j2MhPLn8A/","dtype":"float64","shape":[54]},"y":{"__ndarray__":"AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHj6nsdH/gJAePqex0f+AkDoGznGTAIDQP020FyyBgNAJVt87jsNA0A48j3U0BQDQOIscv0zHwNA+O2EuQorA0D8jjiVxzkDQJyUXmKrSANA1ldlqeRYA0Dzv0vlXWgDQB1yAmDKdwNAYISzSMmHA0At50JLX5gDQEIZu+uKqANAFvBzBJW6A0D3PTX4Hc4DQOgRr85Y4gNAFRGlFcn2A0A6HCTMQw0EQMd6YUFKJARAUxX5cBo9BEDyTJFAGFUEQLC69+F4bQRACGkMw3KCBEDkWCk5OJYEQAAAAAAAAAAA","dtype":"float64","shape":[54]}},"selected":{"id":"98330","type":"Selection"},"selection_policy":{"id":"98329","type":"UnionRenderers"}},"id":"98306","type":"ColumnDataSource"},{"attributes":{},"id":"98328","type":"Selection"},{"attributes":{"formatter":{"id":"98325","type":"BasicTickFormatter"},"ticker":{"id":"98276","type":"BasicTicker"}},"id":"98275","type":"LinearAxis"},{"attributes":{"fill_alpha":0.75,"fill_color":"#2a2eec","line_color":null,"x":{"field":"x"},"y":{"field":"y"}},"id":"98307","type":"Patch"},{"attributes":{"dimension":1,"ticker":{"id":"98276","type":"BasicTicker"}},"id":"98279","type":"Grid"},{"attributes":{},"id":"98329","type":"UnionRenderers"},{"attributes":{"fill_alpha":0.1,"fill_color":"#1f77b4","line_alpha":0.1,"line_color":"#1f77b4","x":{"field":"x"},"y":{"field":"y"}},"id":"98308","type":"Patch"},{"attributes":{},"id":"98276","type":"BasicTicker"},{"attributes":{"overlay":{"id":"98335","type":"BoxAnnotation"}},"id":"98281","type":"BoxZoomTool"},{"attributes":{},"id":"98330","type":"Selection"},{"attributes":{"callback":null},"id":"98264","type":"DataRange1d"},{"attributes":{},"id":"98280","type":"PanTool"},{"attributes":{"data_source":{"id":"98306","type":"ColumnDataSource"},"glyph":{"id":"98307","type":"Patch"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"98308","type":"Patch"},"selection_glyph":null,"view":{"id":"98310","type":"CDSView"}},"id":"98309","type":"GlyphRenderer"},{"attributes":{},"id":"98331","type":"UnionRenderers"},{"attributes":{"callback":null},"id":"98262","type":"DataRange1d"},{"attributes":{"fill_alpha":0.1,"fill_color":"#1f77b4","line_alpha":0.1,"line_color":"#1f77b4","x":{"field":"x"},"y":{"field":"y"}},"id":"98303","type":"Patch"},{"attributes":{"source":{"id":"98306","type":"ColumnDataSource"}},"id":"98310","type":"CDSView"},{"attributes":{"fill_alpha":0.75,"fill_color":"#2a2eec","line_color":null,"x":{"field":"x"},"y":{"field":"y"}},"id":"98302","type":"Patch"},{"attributes":{},"id":"98332","type":"Selection"},{"attributes":{"callback":null,"data":{"x":{"__ndarray__":"LzDOHiWvzT987aJGvC/OP8iqd25TsM4/FWhMluowzz9hJSG+gbHPP1fx+nIMGdA//U/lBlhZ0D+jrs+ao5nQP0kNui7v2dA/8Gukwjoa0T+Wyo5WhlrRPzwpeerRmtE/4odjfh3b0T+J5k0SaRvSPy9FOKa0W9I/1aMiOgCc0j98Ag3OS9zSPyJh92GXHNM/yL/h9eJc0z9uHsyJLp3TPxV9th163dM/u9ugscUd1D9hOotFEV7UPweZddlcntQ/rvdfbaje1D9UVkoB9B7VP/q0NJU/X9U/oRMfKYuf1T9Hcgm91t/VP+3Q81AiINY/ky/e5G1g1j+TL97kbWDWP5Mv3uRtYNY/7dDzUCIg1j9Hcgm91t/VP6ETHymLn9U/+rQ0lT9f1T9UVkoB9B7VP673X22o3tQ/B5l12Vye1D9hOotFEV7UP7vboLHFHdQ/FX22HXrd0z9uHsyJLp3TP8i/4fXiXNM/ImH3YZcc0z98Ag3OS9zSP9WjIjoAnNI/L0U4prRb0j+J5k0SaRvSP+KHY34d29E/PCl56tGa0T+Wyo5WhlrRP/BrpMI6GtE/SQ26Lu/Z0D+jrs+ao5nQP/1P5QZYWdA/V/H6cgwZ0D9hJSG+gbHPPxVoTJbqMM8/yKp3blOwzj987aJGvC/OPy8wzh4lr80/LzDOHiWvzT8=","dtype":"float64","shape":[64]},"y":{"__ndarray__":"AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACSP4RV6Yj4P5I/hFXpiPg/MBBjCiQU+T8QncQhE6/5P79g7UcmUPo/GzHqjWcA+z9Fa03j37X7P6YteRwAdvw/Dg/FdDk6/T95DRmsjP/9Pyd/g3Ctxf4/c+9dBwKJ/z/E4TStYSMAQJP8kj7ifQBA1kXH7hfUAEDEjw9MpSMBQCk402bObgFANYZb1qKyAUAB1ABCqe8BQJ0KvzwgJQJAf5HpPUVTAkACdkaWmHsCQCv31EYYnQJA3O0XHnC4AkD4g3LIds8CQMpJm5Zd4AJAf/zWPnHrAkBKNNAEZvICQGJTMHvA9wJA3BmN+Yb6AkC7vSVcvvsCQBZr/9od/QJAAAAAAAAAAAA=","dtype":"float64","shape":[64]}},"selected":{"id":"98332","type":"Selection"},"selection_policy":{"id":"98331","type":"UnionRenderers"}},"id":"98311","type":"ColumnDataSource"},{"attributes":{"callback":null,"data":{"x":{"__ndarray__":"K6IAB9TXgD/0dkyERuGIP94lzIBcdZA/QxByvxV6lD+o+hf+zn6YPwzlvTyIg5w/uOexvSBEoD/r3ARdfUaiPx3SV/zZSKQ/T8eqmzZLpj+BvP06k02oP7SxUNrvT6o/5qajeUxSrD8YnPYYqVSuP6XIJNyCK7A/PkPOK7EssT/XvXd73y2yP3A4IcsNL7M/CbPKGjwwtD+iLXRqajG1PzuoHbqYMrY/1SLHCccztz9unXBZ9TS4PwcYGqkjNrk/oJLD+FE3uj85DW1IgDi7P9KHFpiuObw/awLA59w6vT8FfWk3Czy+P573Eoc5Pb8/HDle6zMfwD8cOV7rMx/APxw5XuszH8A/nvcShzk9vz8FfWk3Czy+P2sCwOfcOr0/0ocWmK45vD85DW1IgDi7P6CSw/hRN7o/BxgaqSM2uT9unXBZ9TS4P9UixwnHM7c/O6gdupgytj+iLXRqajG1Pwmzyho8MLQ/cDghyw0vsz/XvXd73y2yPz5DziuxLLE/pcgk3IIrsD8YnPYYqVSuP+amo3lMUqw/tLFQ2u9Pqj+BvP06k02oP0/Hqps2S6Y/HdJX/NlIpD/r3ARdfUaiP7jnsb0gRKA/DOW9PIiDnD+o+hf+zn6YP0MQcr8VepQ/3iXMgFx1kD/0dkyERuGIPyuiAAfU14A/K6IAB9TXgD8=","dtype":"float64","shape":[64]},"y":{"__ndarray__":"AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACZCjv7uqUEQJkKO/u6pQRACeO3O+KxBEDuyKQG0bYEQGPO3RZ9tARAhh3ogY2qBEApjPCtGpcEQAjkxu6VegRAucH9/j9SBEDmE+ZrQR8EQL/OGUXB4ANAF4WufEWWA0DNcG6XqT8DQIWY5Osi2wJAqzq9VlJqAkCbvqSJ+usBQJSEI9ZeYAFAkaIIflbLAEA64vHDqywAQDp3ULEzDP8/vURBdDiz/T9l273MDVL8PzPonETp8/o/f6JHXEWe+T9iErXirVj4Pw2A/uI/Kvc/hiTmJ+cZ9j+4mpCKczH1PyMqDEfzdPQ/NpV+fBDp8z+DQ+1GlJXzP6oH78jSdvM/AAAAAAAAAAA=","dtype":"float64","shape":[64]}},"selected":{"id":"98328","type":"Selection"},"selection_policy":{"id":"98327","type":"UnionRenderers"}},"id":"98301","type":"ColumnDataSource"},{"attributes":{},"id":"98333","type":"UnionRenderers"},{"attributes":{"text":""},"id":"98322","type":"Title"},{"attributes":{"fill_alpha":0.75,"fill_color":"#2a2eec","line_color":null,"x":{"field":"x"},"y":{"field":"y"}},"id":"98312","type":"Patch"},{"attributes":{},"id":"98334","type":"Selection"},{"attributes":{},"id":"98282","type":"WheelZoomTool"},{"attributes":{"fill_alpha":0.1,"fill_color":"#1f77b4","line_alpha":0.1,"line_color":"#1f77b4","x":{"field":"x"},"y":{"field":"y"}},"id":"98313","type":"Patch"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"98335","type":"BoxAnnotation"},{"attributes":{"callback":null,"overlay":{"id":"98336","type":"BoxAnnotation"}},"id":"98283","type":"BoxSelectTool"},{"attributes":{"data_source":{"id":"98311","type":"ColumnDataSource"},"glyph":{"id":"98312","type":"Patch"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"98313","type":"Patch"},"selection_glyph":null,"view":{"id":"98315","type":"CDSView"}},"id":"98314","type":"GlyphRenderer"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"98336","type":"BoxAnnotation"},{"attributes":{"callback":null,"overlay":{"id":"98337","type":"PolyAnnotation"}},"id":"98284","type":"LassoSelectTool"},{"attributes":{"source":{"id":"98311","type":"ColumnDataSource"}},"id":"98315","type":"CDSView"},{"attributes":{"fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"xs_units":"screen","ys_units":"screen"},"id":"98337","type":"PolyAnnotation"}],"root_ids":["98261"]},"title":"Bokeh Application","version":"1.4.0"}}';
                  var render_items = [{"docid":"adb329b0-6de4-4de3-8af8-7aee1f4c0b86","roots":{"98261":"d3e7bf1e-7161-47cc-9862-14d59cc046fe"}}];
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