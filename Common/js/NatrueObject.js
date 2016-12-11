define(["require", "exports"], function (require, exports) {
    "use strict";
    var NatrueObject = (function () {
        function NatrueObject(location, velocity, acceleration) {
            this.location = location;
            this.velocity = velocity;
            this.acceleration = acceleration;
            this.destroy = false;
        }
        NatrueObject.prototype.isDestroy = function () {
            return this.destroy;
        };
        NatrueObject.prototype.display = function (paint) {
            return this;
        };
        NatrueObject.prototype.move = function () {
            this.velocity.add(this.acceleration);
            this.location.add(this.velocity);
            return this;
        };
        NatrueObject.prototype.collisionDetection = function (system) {
            if (this.location.x > system.width || this.location.x < 0) {
                this.velocity.x += this.acceleration.x;
                this.velocity.x *= -1;
            }
            if (this.location.y > system.height || this.location.y < 0) {
                this.velocity.y += this.acceleration.y;
                this.velocity.y *= -1;
            }
            return this;
        };
        return NatrueObject;
    }());
    exports.NatrueObject = NatrueObject;
});
//# sourceMappingURL=NatrueObject.js.map