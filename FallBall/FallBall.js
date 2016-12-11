define(["require", "exports", "../Common/js/VectorPoint", "../Common/js/System", "../Common/js/Paint", "../Common/js/Ball", "../Common/js/Util"], function (require, exports, VectorPoint_1, System_1, Paint_1, Ball_1, Util_1) {
    "use strict";
    var system;
    var paint;
    var balls = [];
    var number = 20;
    init();
    action();
    function init() {
        system = new System_1.System(document.getElementById("canvas"));
        paint = new Paint_1.Paint(system.canvas.getContext("2d"));
        paint.setFillStyle('rgba(192, 80, 77, 0.8)');
        for (var i = 0; i < number; i++) {
            var radius = Util_1.Util.randomNumber(10, 20);
            var location_1 = new VectorPoint_1.VectorPoint(Util_1.Util.randomNumber(radius, system.width - radius), Util_1.Util.randomNumber(radius, system.height - radius));
            var velocity = new VectorPoint_1.VectorPoint(Util_1.Util.randomNumber(-0.5, 0.5), Util_1.Util.randomNumber(-0.5, 0.5));
            var acceleration = new VectorPoint_1.VectorPoint(Util_1.Util.randomNumber(-0.01, 0.01), Util_1.Util.randomNumber(-0.01, 0.01));
            var ball = new Ball_1.Ball(location_1, velocity, acceleration, radius);
            balls.push(ball);
        }
        system.pushObjects(balls);
    }
    function action() {
        system.clear();
        system.quadTree.refresh(null);
        for (var _i = 0, balls_1 = balls; _i < balls_1.length; _i++) {
            var ball = balls_1[_i];
            ball.collisionDetection(system);
            ball.move();
            ball.display(paint);
        }
        setTimeout(action, 0);
    }
});
//# sourceMappingURL=FallBall.js.map