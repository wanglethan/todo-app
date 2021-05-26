goog.loadModule(function(exports) {
  "use strict";
  goog.module("goog.memoize");
  goog.module.declareLegacyNamespace();
  var reflect = goog.require("goog.reflect");
  var MODULE_LOCAL_CACHE = new WeakMap;
  function memoize(f, serializer) {
    serializer = serializer === undefined ? simpleSerializer : serializer;
    var uidF = goog.getUid(f);
    var keyFn = function($jscomp$destructuring$var3) {
      var $jscomp$destructuring$var4 = $jscomp.makeIterator($jscomp$destructuring$var3);
      var that = $jscomp$destructuring$var4.next().value;
      var args = $jscomp.arrayFromIterator($jscomp$destructuring$var4);
      return serializer(uidF, args);
    };
    var valueFn = function($jscomp$destructuring$var5) {
      var $jscomp$destructuring$var6 = $jscomp.makeIterator($jscomp$destructuring$var5);
      var that = $jscomp$destructuring$var6.next().value;
      var args = $jscomp.arrayFromIterator($jscomp$destructuring$var6);
      return f.apply(that, args);
    };
    var memoizedFn = function(args) {
      var $jscomp$restParams = [];
      for (var $jscomp$restIndex = 0; $jscomp$restIndex < arguments.length; ++$jscomp$restIndex) {
        $jscomp$restParams[$jscomp$restIndex - 0] = arguments[$jscomp$restIndex];
      }
      {
        var args$7 = $jscomp$restParams;
        if (memoize.ENABLE_MEMOIZE) {
          var cacheKey = this || goog.global;
          var cache = MODULE_LOCAL_CACHE.get(cacheKey);
          if (!cache) {
            cache = {};
            MODULE_LOCAL_CACHE.set(cacheKey, cache);
          }
          return reflect.cache(cache, [this].concat($jscomp.arrayFromIterable(args$7)), valueFn, keyFn);
        } else {
          return f.apply(this, args$7);
        }
      }
    };
    return memoizedFn;
  }
  exports = memoize;
  memoize.ENABLE_MEMOIZE = goog.define("goog.memoize.ENABLE_MEMOIZE", true);
  var clearCache = function(cacheOwner) {
    MODULE_LOCAL_CACHE.set(cacheOwner || goog.global, {});
  };
  exports.clearCache = clearCache;
  var simpleSerializer = function(functionUid, args) {
    var context = [functionUid];
    for (var i = args.length - 1; i >= 0; --i) {
      context.push(typeof args[i], args[i]);
    }
    return context.join("\x0B");
  };
  exports.simpleSerializer = simpleSerializer;
  return exports;
});

//# sourceMappingURL=goog.memoize.memoize.js.map
