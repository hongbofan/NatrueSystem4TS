define(["require", "exports"], function (require, exports) {
    "use strict";
    var VectorPoint = (function () {
        function VectorPoint(x, y) {
            this.x = x;
            this.y = y;
        }
        VectorPoint.prototype.display = function (paint) {
            paint.beginPath().arc(this.x, this.y, 10, 0, 2 * Math.PI).fill();
        };
        VectorPoint.prototype.move = function (p) {
            this.x += p.x;
            this.y += p.y;
            return this;
        };
        return VectorPoint;
    }());
    exports.VectorPoint = VectorPoint;
});
//# sourceMappingURL=VectorPoint.js.map