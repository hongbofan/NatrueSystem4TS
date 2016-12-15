define(["require", "exports", "../Common/js/System", "../Common/js/VectorPoint", "../Common/js/Paint"], function (require, exports, System_1, VectorPoint_1, Paint_1) {
    "use strict";
    var system;
    var paint;
    var a = 100;
    var Alpha = 0.7;
    var forlength = 20;
    init();
    function init() {
        system = new System_1.System(document.getElementById("canvas"));
        paint = new Paint_1.Paint(system.canvas.getContext("2d"));
        for (var i = 0; i < forlength; i++) {
            var canvasAngle = i * 360 / forlength;
            paint.setFillStyle('rgba(192, 80, 77,' + Alpha + ')');
            paint.rotate(canvasAngle, system.width / 2, system.height / 2);
            for (var angle = 0; angle <= 360; angle++) {
                var p = a * (1 - Math.cos(angle));
                var point = new VectorPoint_1.VectorPoint(0, 0).polar2Rectangular(angle, p);
                point.x += system.width / 2;
                point.y += system.height / 2;
                point.display(paint);
            }
            paint.rotate(-1 * canvasAngle, system.width / 2, system.height / 2);
        }
    }
});
//# sourceMappingURL=Polar.js.map