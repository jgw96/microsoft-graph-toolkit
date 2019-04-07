(function() {
  "use strict";

  var rootPath = getScriptPath();

  // decide es5 or es6 --TODO
  if (es6()) {
    window.WebComponents = window.WebComponents || {};
    window.WebComponents.root = rootPath + "wc/";

    addScript(rootPath + "wc/webcomponents-loader.js");
    addScript(rootPath + "mgt.es6.js");
  } else {
    addScript(rootPath + "mgt.es5.js");
  }

  function getScriptPath() {
    var scripts = document.getElementsByTagName("script");
    var path = scripts[scripts.length - 1].src.split("?")[0];
    var dir =
      path
        .split("/")
        .slice(0, -1)
        .join("/") + "/";
    return dir;
  }

  // from https://stackoverflow.com/questions/29046635/javascript-es6-cross-browser-detection
  function es6() {
    "use strict";

    if (typeof Symbol == "undefined") return false;
    try {
      eval("class Foo {}");
      eval("var bar = (x) => x+1");
    } catch (e) {
      return false;
    }

    return true;
  }

  function addScript(src, onload) {
    // TODO: support async loading

    var tag = document.createElement("script");
    tag.src = src;

    // if (onload) {
    //   tag.addEventListener("load", onload);
    // }

    document.write(tag.outerHTML);
    // document.head.appendChild(tag);
  }

})();