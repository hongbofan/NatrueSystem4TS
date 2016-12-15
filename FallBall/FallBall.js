define(["require", "exports", "../Common/js/System", "../Common/js/Paint", "../Common/js/Rectangle", "../Common/js/BallFactory"], function (require, exports, System_1, Paint_1, Rectangle_1, BallFactory_1) {
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
        balls = new BallFactory_1.BallFactory()
            .makeBalls(number)
            .randomRadius(10, 20)
            .randomLocation(new Rectangle_1.Rectangle(0, 0, system.width, system.height))
            .randomVelocity(-0.5, 0.5, -0.5, 0.5)
            .randomAcceleration(-0.01, 0.01, -0.01, 0.01)
            .randomMass(10, 20)
            .randomHP(1, 1)
            .randomStyle()
            .balls;
        system.pushObjects(balls);
        console.log(system.quadTree);
    }
    system.canvas.onmousedown = function (ev) {
        pause = !pause;
    };
    function action() {
        if (pause) {
            system.clear();
            clearDestroy();
            system.quadTree.refresh(null);
            for (var _i = 0, balls_1 = balls; _i < balls_1.length; _i++) {
                var ball = balls_1[_i];
                ball.collisionDetection(system);
            }
            for (var _a = 0, balls_2 = balls; _a < balls_2.length; _a++) {
                var ball = balls_2[_a];
                ball.move();
                ball.display(paint);
            }
        }
        if (balls.length > 0) {
            setTimeout(action, 1);
        }
    }
    function clearDestroy() {
        for (var i = balls.length - 1; i >= 0; i--) {
            if (balls[i].HP <= 0) {
                balls[i].destroy = true;
            }
            if (balls[i].destroy) {
                balls.splice(i, 1);
            }
        }
    }
});
//# sourceMappingURL=FallBall.js.map