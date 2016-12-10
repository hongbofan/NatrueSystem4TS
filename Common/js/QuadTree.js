define(["require", "exports"], function (require, exports) {
    "use strict";
    var QuadTree = (function () {
        function QuadTree(bounds, level) {
            this.objects = [];
            this.nodes = [];
            this.level = level;
            this.bounds = bounds;
            this.MAX_OBJECTS = 10;
            this.MAX_LEVELS = 5;
        }
        return QuadTree;
    }());
    exports.QuadTree = QuadTree;
});
//# sourceMappingURL=QuadTree.js.map