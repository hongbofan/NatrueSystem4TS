define(["require", "exports"], function (require, exports) {
    "use strict";
    var Util = (function () {
        function Util() {
        }
        Util.randomNumber = function (start, end) {
            var random = Math.random() * (end - start) + start;
            return random;
        };
        return Util;
    }());
    exports.Util = Util;
});
//# sourceMappingURL=Util.js.map