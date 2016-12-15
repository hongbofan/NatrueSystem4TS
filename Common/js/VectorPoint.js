define(["require", "exports"], function (require, exports) {
    "use strict";
    var VectorPoint = (function () {
        function VectorPoint(x, y) {
            this.x = x;
            this.y = y;
            this.mag = this.getMag();
        }
        VectorPoint.prototype.polar2Rectangular = function (angle, p) {
            this.x = Math.cos(angle) * p;
            this.y = Math.sin(angle) * p;
            return this;
        };
        VectorPoint.prototype.display = function (paint) {
            paint.beginPath().arc(this.x, this.y, 5, 0, 2 * Math.PI).fill();
        };
        VectorPoint.prototype.add = function (p) {
            this.x += p.x;
            this.y += p.y;
            return this;
        };
        VectorPoint.prototype.sub = function (p) {
            this.x -= p.x;
            this.y -= p.y;
        };
        VectorPoint.prototype.copySub = function (p) {
            return new VectorPoint(this.x - p.x, this.y - p.y);
        };
        VectorPoint.prototype.mult = function (n) {
            this.x *= n;
            this.y *= n;
        };
        VectorPoint.prototype.div = function (n) {
            if (n != 0) {
                this.x /= n;
                this.y /= n;
            }
        };
        VectorPoint.prototype.getMag = function () {
            return Math.sqrt(this.x * this.x + this.y * this.y);
        };
        VectorPoint.prototype.setMag = function () {
        };
        VectorPoint.prototype.normalize = function () {
            var m = this.getMag();
            if (m != 0) {
                return this.div(m);
            }
            else {
                return this.div(999999999999999);
            }
        };
        VectorPoint.prototype.limit = function (n) {
            if (this.mag > n) {
                this.mag = n;
            }
        };
        VectorPoint.prototype.heading2D = function () {
        };
        VectorPoint.prototype.rotate = function () {
        };
        VectorPoint.prototype.lerp = function () {
        };
        VectorPoint.prototype.dist = function () {
        };
        VectorPoint.prototype.angleBetween = function () {
        };
        VectorPoint.prototype.dot = function () {
        };
        VectorPoint.prototype.cross = function () {
        };
        VectorPoint.prototype.random2D = function () {
        };
        VectorPoint.prototype.random3D = function () {
        };
        return VectorPoint;
    }());
    exports.VectorPoint = VectorPoint;
});
//# sourceMappingURL=VectorPoint.js.map