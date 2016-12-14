define(["require", "exports", "../Common/js/VectorPoint", "../Common/js/System", "../Common/js/Paint", "../Common/js/Ball", "../Common/js/Util"], function (require, exports, VectorPoint_1, System_1, Paint_1, Ball_1, Util_1) {
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
        paint.setFillStyle('rgba(192, 80, 77, 0.8)');
        var radius = 30;
        var location = new VectorPoint_1.VectorPoint(40, 80);
        var velocity = new VectorPoint_1.VectorPoint(10, 0);
        var acceleration = new VectorPoint_1.VectorPoint(0, 0);
        var ball1 = new Ball_1.Ball(location, velocity, acceleration, radius);
        balls.push(ball1);
        for (var i = 0; i < number; i++) {
            var location2 = new VectorPoint_1.VectorPoint(Util_1.Util.randomNumber(radius, system.width - radius), Util_1.Util.randomNumber(radius, system.height - radius));
            var velocity2 = new VectorPoint_1.VectorPoint(0, 0);
            var ball2 = new Ball_1.Ball(location2, velocity2, acceleration, radius);
            balls.push(ball2);
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
            balls[0].collisionDetection(system);
            balls[0].move();
            for (var _i = 0, balls_1 = balls; _i < balls_1.length; _i++) {
                var ball = balls_1[_i];
                ball.display(paint);
            }
        }
        setTimeout(action, 0);
    }
});
//# sourceMappingURL=FallBall.js.map