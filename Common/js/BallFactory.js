define(["require", "exports", "./Ball", "./VectorPoint", "./Util", "./Style"], function (require, exports, Ball_1, VectorPoint_1, Util_1, Style_1) {
    "use strict";
    var BallFactory = (function () {
        function BallFactory() {
            this.balls = [];
        }
        BallFactory.prototype.makeBalls = function (n) {
            for (var i = 0; i < n; i++) {
                this.balls.push(new Ball_1.Ball(null, null, null, 0, null));
            }
            return this;
        };
        BallFactory.prototype.randomLocation = function (bounds) {
            for (var _i = 0, _a = this.balls; _i < _a.length; _i++) {
                var ball = _a[_i];
                ball.location = new VectorPoint_1.VectorPoint(Util_1.Util.randomNumber(bounds.x + ball.radius, bounds.x + bounds.width - ball.radius), Util_1.Util.randomNumber(bounds.y + ball.radius, bounds.y + bounds.height - ball.radius));
            }
            return this;
        };
        BallFactory.prototype.randomRadius = function (min, max) {
            for (var _i = 0, _a = this.balls; _i < _a.length; _i++) {
                var ball = _a[_i];
                ball.radius = Util_1.Util.randomNumber(min, max);
            }
            return this;
        };
        BallFactory.prototype.randomVelocity = function (minX, maxX, minY, maxY) {
            for (var _i = 0, _a = this.balls; _i < _a.length; _i++) {
                var ball = _a[_i];
                ball.velocity = new VectorPoint_1.VectorPoint(Util_1.Util.randomNumber(minX, maxX), Util_1.Util.randomNumber(minY, maxY));
            }
            return this;
        };
        BallFactory.prototype.randomAcceleration = function (minX, maxX, minY, maxY) {
            for (var _i = 0, _a = this.balls; _i < _a.length; _i++) {
                var ball = _a[_i];
                ball.acceleration = new VectorPoint_1.VectorPoint(Util_1.Util.randomNumber(minX, maxX), Util_1.Util.randomNumber(minY, maxY));
            }
            return this;
        };
        BallFactory.prototype.randomMass = function (min, max) {
            for (var _i = 0, _a = this.balls; _i < _a.length; _i++) {
                var ball = _a[_i];
                ball.mass = Util_1.Util.randomNumber(min, max);
            }
            return this;
        };
        BallFactory.prototype.randomStyle = function () {
            for (var _i = 0, _a = this.balls; _i < _a.length; _i++) {
                var ball = _a[_i];
                ball.style = new Style_1.Style(Math.round(Util_1.Util.randomNumber(0, 255)), Math.round(Util_1.Util.randomNumber(0, 255)), Math.round(Util_1.Util.randomNumber(0, 255)), Math.round(Util_1.Util.randomNumber(0, 1) * 10) / 10);
            }
            return this;
        };
        BallFactory.prototype.randomHP = function (min, max) {
            for (var _i = 0, _a = this.balls; _i < _a.length; _i++) {
                var ball = _a[_i];
                ball.HP = Util_1.Util.randomNumber(min, max);
            }
            return this;
        };
        return BallFactory;
    }());
    exports.BallFactory = BallFactory;
});
//# sourceMappingURL=BallFactory.js.map