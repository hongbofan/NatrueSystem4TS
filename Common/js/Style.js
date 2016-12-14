define(["require", "exports"], function (require, exports) {
    "use strict";
    var Style = (function () {
        function Style(r, g, b, a) {
            this.r = r;
            this.g = g;
            this.b = b;
            this.a = a;
        }
        Style.prototype.getRGBA = function () {
            return 'rgba(' + this.r + ',' + this.g + ',' + this.b + ',' + this.a + ')';
        };
        return Style;
    }());
    exports.Style = Style;
});
//# sourceMappingURL=Style.js.map