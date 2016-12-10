define(["require", "exports"], function (require, exports) {
    "use strict";
    var System = (function () {
        function System(canvas) {
            this.canvas = canvas;
            this.width = canvas.width;
            this.height = canvas.height;
        }
        System.prototype.pushObjects = function (natrueObjects) {
            for (var _i = 0, natrueObjects_1 = natrueObjects; _i < natrueObjects_1.length; _i++) {
                var natrueObject = natrueObjects_1[_i];
                this.natrueObjects.push(natrueObject);
            }
        };
        System.prototype.clear = function () {
            this.canvas.getContext("2d").clearRect(0, 0, this.width, this.height);
        };
        return System;
    }());
    exports.System = System;
});
//# sourceMappingURL=System.js.map