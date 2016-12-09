define(["require", "exports"], function (require, exports) {
    "use strict";
    var System = (function () {
        function System(canvas) {
            this.canvas = canvas;
            this.width = canvas.width;
            this.height = canvas.height;
        }
        return System;
    }());
    exports.System = System;
});
//# sourceMappingURL=System.js.map