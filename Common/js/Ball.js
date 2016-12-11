var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", "./NatrueObject"], function (require, exports, NatrueObject_1) {
    "use strict";
    var Ball = (function (_super) {
        __extends(Ball, _super);
        function Ball(location, velocity, acceleration, radius) {
            var _this = _super.call(this, location, velocity, acceleration) || this;
            _this.radius = radius;
            return _this;
        }
        Ball.prototype.display = function (paint) {
            paint.beginPath().arc(this.location.x, this.location.y, this.radius, 0, 2 * Math.PI).fill();
            return this;
        };
        Ball.prototype.collisionDetection = function (system) {
            if (this.location.x + this.radius > system.width || this.location.x - this.radius < 0) {
                this.velocity.x += this.acceleration.x;
                this.velocity.x *= -1;
            }
            if (this.location.y + this.radius > system.height || this.location.y - this.radius < 0) {
                this.velocity.y += this.acceleration.y;
                this.velocity.y *= -1;
            }
            var result = system.quadTree.retrieve(this);
            for (var _i = 0, result_1 = result; _i < result_1.length; _i++) {
                var ball = result_1[_i];
                if (this.location.x + this.radius > ball.location.x + ball.radius) {
                    this.velocity.x *= -1;
                    ball.velocity.x *= -1;
                }
            }
            return this;
        };
        return Ball;
    }(NatrueObject_1.NatrueObject));
    exports.Ball = Ball;
});
//# sourceMappingURL=Ball.js.map