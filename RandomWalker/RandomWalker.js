define(["require", "exports", "../Common/js/VectorPoint"], function (require, exports, VectorPoint_1) {
    "use strict";
    var canvas = document.getElementById("canvas");
    var ctx = canvas.getContext("2d");
    ctx.fillStyle = 'rgba(192, 80, 77, 0.1)';
    var point = new VectorPoint_1.VectorPoint(canvas.width / 2, canvas.height / 2);
    function walk() {
        point.move(new VectorPoint_1.VectorPoint((Math.random() - 0.5) * 20, (Math.random() - 0.5) * 20));
        point.display(ctx);
        setTimeout(walk, 0);
    }
    walk();
});
//# sourceMappingURL=RandomWalker.js.map