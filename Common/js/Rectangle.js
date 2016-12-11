define(["require", "exports"], function (require, exports) {
    "use strict";
    var Rectangle = (function () {
        function Rectangle(x, y, width, height) {
            this.width = width;
            this.height = height;
            this.x = x;
            this.y = y;
            this.midWidth = this.width / 2;
            this.midHeight = this.height / 2;
            this.midX = x + this.midWidth;
            this.midY = y + this.midHeight;
        }
        return Rectangle;
    }());
    exports.Rectangle = Rectangle;
});
//# sourceMappingURL=Rectangle.js.map