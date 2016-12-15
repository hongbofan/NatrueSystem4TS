define(["require", "exports"], function (require, exports) {
    "use strict";
    var Paint = (function () {
        function Paint(context2D) {
            this.context2D = context2D;
        }
        Paint.prototype.rotate = function (angle, midX, midY) {
            this.context2D.translate(midX, midY);
            this.context2D.rotate(angle * Math.PI / 180);
            this.context2D.translate(-midX, -midY);
        };
        Paint.prototype.arc = function (x, y, radius, startAngle, endAngle) {
            this.context2D.arc(x, y, radius, startAngle, endAngle);
            return this;
        };
        Paint.prototype.fill = function () {
            this.context2D.fill();
            return this;
        };
        Paint.prototype.beginPath = function () {
            this.context2D.beginPath();
            return this;
        };
        Paint.prototype.setFillStyle = function (fillStyle) {
            this.context2D.fillStyle = fillStyle;
            return this;
        };
        return Paint;
    }());
    exports.Paint = Paint;
});
//# sourceMappingURL=Paint.js.map