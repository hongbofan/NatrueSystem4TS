define(["require", "exports", "./Rectangle"], function (require, exports, Rectangle_1) {
    "use strict";
    var QuadTree = (function () {
        function QuadTree(bounds, level) {
            this.objects = [];
            this.nodes = [];
            this.level = level;
            this.bounds = bounds;
            this.MAX_OBJECTS = 5;
            this.MAX_LEVELS = 5;
        }
        QuadTree.prototype.refresh = function (root) {
            var index = [];
            root = root || this;
            for (var i = this.objects.length - 1; i >= 0; i--) {
                var ball = this.objects[i];
                if (false) {
                }
                else {
                    index = this.getIndex(ball);
                    if (!this.isInner(ball, this.bounds)) {
                        for (var _i = 0, index_1 = index; _i < index_1.length; _i++) {
                            var j = index_1[_i];
                        }
                        root.insert(this.objects.splice(i, 1)[0]);
                    }
                    else if (this.nodes.length) {
                        console.log("reinsertSplit");
                        for (var _a = 0, index_2 = index; _a < index_2.length; _a++) {
                            var i_1 = index_2[_a];
                            this.nodes[i_1].insert(this.objects.splice(i_1, 1)[0]);
                        }
                    }
                }
            }
            for (var _b = 0, _c = this.nodes; _b < _c.length; _b++) {
                var node = _c[_b];
                node.refresh(root);
            }
        };
        QuadTree.prototype.isInner = function (ball, bounds) {
            return (ball.location.x - ball.radius) >= bounds.x &&
                (ball.location.x + ball.radius) <= (bounds.x + bounds.width) &&
                (ball.location.y - ball.radius) >= bounds.y &&
                (ball.location.y + ball.radius) <= (bounds.y + bounds.height);
        };
        QuadTree.prototype.retrieve = function (ball) {
            var result = [];
            var index;
            if (this.nodes.length) {
                index = this.getIndex(ball);
                for (var _i = 0, index_3 = index; _i < index_3.length; _i++) {
                    var i = index_3[_i];
                    result = result.concat(this.nodes[i].retrieve(ball));
                }
            }
            return result.concat(this.objects);
        };
        QuadTree.prototype.insert = function (ball) {
            var index;
            if (this.nodes.length) {
                index = this.getIndex(ball);
                for (var _i = 0, index_4 = index; _i < index_4.length; _i++) {
                    var i = index_4[_i];
                    this.nodes[i].insert(ball);
                }
                return;
            }
            if (this.objects.indexOf(ball) == -1) {
                this.objects.push(ball);
            }
            if (!this.nodes.length) {
                if (this.objects.length > this.MAX_OBJECTS && this.level < this.MAX_LEVELS) {
                    this.split();
                    for (var i = this.objects.length - 1; i >= 0; i--) {
                        var ball_1 = this.objects.pop();
                        index = this.getIndex(ball_1);
                        for (var _a = 0, index_5 = index; _a < index_5.length; _a++) {
                            var j = index_5[_a];
                            this.nodes[j].insert(ball_1);
                        }
                    }
                }
            }
        };
        QuadTree.prototype.getIndex = function (ball) {
            var index = [];
            var verticalMidpoint = this.bounds.midX;
            var horizontalMidpoint = this.bounds.midY;
            var top = (ball.location.y + ball.radius) <= horizontalMidpoint;
            var bottom = (ball.location.y - ball.radius) >= horizontalMidpoint;
            var left = (ball.location.x + ball.radius) <= verticalMidpoint;
            var right = (ball.location.x - ball.radius) >= verticalMidpoint;
            if (!(bottom || left)) {
                index.push(0);
            }
            if (!(top || left)) {
                index.push(1);
            }
            if (!(top || right)) {
                index.push(2);
            }
            if (!(bottom || right)) {
                index.push(3);
            }
            return index;
        };
        QuadTree.prototype.clear = function () {
            this.objects = [];
            for (var _i = 0, _a = this.nodes; _i < _a.length; _i++) {
                var node = _a[_i];
                node.clear();
            }
            this.nodes = [];
        };
        QuadTree.prototype.split = function () {
            var bounds = this.bounds;
            this.nodes.push(new QuadTree(new Rectangle_1.Rectangle(bounds.midX, bounds.y, bounds.midWidth, bounds.midHeight), this.level + 1));
            this.nodes.push(new QuadTree(new Rectangle_1.Rectangle(bounds.midX, bounds.midY, bounds.midWidth, bounds.midHeight), this.level + 1));
            this.nodes.push(new QuadTree(new Rectangle_1.Rectangle(bounds.x, bounds.midY, bounds.midWidth, bounds.midHeight), this.level + 1));
            this.nodes.push(new QuadTree(new Rectangle_1.Rectangle(bounds.x, bounds.y, bounds.midWidth, bounds.midHeight), this.level + 1));
        };
        return QuadTree;
    }());
    exports.QuadTree = QuadTree;
});
//# sourceMappingURL=QuadTree.js.map