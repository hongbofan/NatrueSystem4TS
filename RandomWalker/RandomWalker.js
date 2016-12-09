define(["require", "exports", "../Common/js/VectorPoint", "../Common/js/System", "../Common/js/Paint"], function (require, exports, VectorPoint_1, System_1, Paint_1) {
    "use strict";
    var system;
    var paint;
    var point;
    init();
    walk();
    function init() {
        system = new System_1.System(document.getElementById("canvas"));
        paint = new Paint_1.Paint(system.canvas.getContext("2d"));
        paint.setFillStyle('rgba(192, 80, 77, 0.1)');
        point = new VectorPoint_1.VectorPoint(system.width / 2, system.height / 2);
    }
    function walk() {
        point.move(new VectorPoint_1.VectorPoint((Math.random() - 0.5) * 20, (Math.random() - 0.5) * 20));
        point.display(paint);
        setTimeout(walk, 0);
    }
});
//# sourceMappingURL=RandomWalker.js.map