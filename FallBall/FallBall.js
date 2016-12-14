define(["require", "exports", "../Common/js/VectorPoint", "../Common/js/System", "../Common/js/Paint", "../Common/js/Ball", "../Common/js/Util", "../Common/js/Style"], function (require, exports, VectorPoint_1, System_1, Paint_1, Ball_1, Util_1, Style_1) {
    "use strict";
    var system;
    var paint;
    var balls = [];
    var number = 100;
    var pause = false;
    init();
    action();
    function init() {
        system = new System_1.System(document.getElementById("canvas"));
        paint = new Paint_1.Paint(system.canvas.getContext("2d"));
        for (var i = 0; i < number; i++) {
            var radius = Util_1.Util.randomNumber(10, 20);
            var location_1 = new VectorPoint_1.VectorPoint(Util_1.Util.randomNumber(radius, system.width - radius), Util_1.Util.randomNumber(radius, system.height - radius));
            var velocity = new VectorPoint_1.VectorPoint(Util_1.Util.randomNumber(-0.5, 0.5), Util_1.Util.randomNumber(-0.5, 0.5));
            var acceleration = new VectorPoint_1.VectorPoint(Util_1.Util.randomNumber(-0.01, 0.01), Util_1.Util.randomNumber(-0.01, 0.01));
            var style = new Style_1.Style(Math.floor(Util_1.Util.randomNumber(0, 255)), Math.floor(Util_1.Util.randomNumber(0, 255)), Math.floor(Util_1.Util.randomNumber(0, 255)), 0.7);
            var ball = new Ball_1.Ball(location_1, velocity, acceleration, radius, style);
            balls.push(ball);
        }
        system.pushObjects(balls);
        console.log(system.quadTree);
    }
    system.canvas.onmousedown = function (ev) {
        pause = !pause;
    };
    function action() {
        if (pause) {
            system.clear();
            system.quadTree.refresh(null);
            for (var _i = 0, balls_1 = balls; _i < balls_1.length; _i++) {
                var ball = balls_1[_i];
                ball.collisionDetection(system);
                ball.move();
                ball.display(paint);
            }
        }
        setTimeout(action, 0);
    }
});
//# sourceMappingURL=FallBall.js.map