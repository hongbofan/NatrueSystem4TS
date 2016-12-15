import {Ball} from "./Ball"
import {Rectangle} from "./Rectangle"
import {VectorPoint} from "./VectorPoint"
import {Util} from "./Util"
import {Style} from "./Style"

export class BallFactory {
    balls: Ball[];
    constructor() {
        this.balls = [];
    }
    makeBalls(n: number) {
        for (let i = 0; i < n; i++) {
            this.balls.push(new Ball(null, null, null, 0, null));
        }
        return this;
    }
    randomLocation(bounds: Rectangle) {
        for (let ball of this.balls) {
            ball.location = new VectorPoint(
                Util.randomNumber(bounds.x + ball.radius, bounds.x + bounds.width - ball.radius),
                Util.randomNumber(bounds.y + ball.radius, bounds.y + bounds.height - ball.radius)
            );
        }
        return this;
    }
    randomRadius(min: number, max: number) {
        for (let ball of this.balls) {
            ball.radius = Util.randomNumber(min, max);
        }
        return this;
    }
    randomVelocity(minX: number, maxX: number, minY: number, maxY: number) {
        for (let ball of this.balls) {
            ball.velocity = new VectorPoint(
                Util.randomNumber(minX, maxX),
                Util.randomNumber(minY, maxY)
            );
        }
        return this;
    }
    randomAcceleration(minX: number, maxX: number, minY: number, maxY: number) {
        for (let ball of this.balls) {
            ball.acceleration = new VectorPoint(
                Util.randomNumber(minX, maxX),
                Util.randomNumber(minY, maxY)
            );
        }
        return this;
    }
    randomMass(min: number, max: number) {
        for (let ball of this.balls) {
            ball.mass = Util.randomNumber(min, max);
        }
        return this;
    }
    randomStyle() {
        for (let ball of this.balls) {
            ball.style = new Style(
                Math.round(Util.randomNumber(0, 255)),
                Math.round(Util.randomNumber(0, 255)),
                Math.round(Util.randomNumber(0, 255)),
                Math.round(Util.randomNumber(0, 1) * 10) / 10
            );
        }
        return this;
    }
    randomHP(min: number, max: number) {
        for (let ball of this.balls) {
            ball.HP = Util.randomNumber(min, max);
        }
        return this;
    }
}
