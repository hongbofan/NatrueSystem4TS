define(["require", "exports", "./Rectangle"], function (require, exports, Rectangle_1) {
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
        QuadTree.prototype.refresh = function (root) {
            var index = [];
            root = root || this;
            if (this.objects.length) {
                for (var i = this.objects.length - 1; i >= 0; i--) {
                    var ball = this.objects[i];
                    if (false) {
                    }
                    else {
                        index = this.getIndex(ball);
                        if (!this.isInner(ball, this.bounds)) {
                            console.log("reinsert:" + (index[0] + 1));
                            console.log(ball.location.x + ball.radius + "," + this.bounds.x + this.bounds + this.bounds.width);
                        }
                        else if (this.nodes.length) {
                            console.log("reinsertSplit");
                            for (var _i = 0, index_1 = index; _i < index_1.length; _i++) {
                                var i_1 = index_1[_i];
                                this.nodes[i_1].insert(this.objects.splice(i_1, 1)[0]);
                            }
                        }
                    }
                }
            }
            for (var _a = 0, _b = this.nodes; _a < _b.length; _a++) {
                var node = _b[_a];
                node.refresh(root);
            }
        };
        QuadTree.prototype.isInner = function (ball, bounds) {
            return ball.location.x - ball.radius >= bounds.x &&
                ball.location.x + ball.radius <= bounds.x + bounds.width &&
                ball.location.y - ball.radius >= bounds.y &&
                ball.location.y + ball.radius <= bounds.y + bounds.height;
        };
        QuadTree.prototype.retrieve = function (ball) {
            var result = [];
            var index;
            if (this.nodes.length) {
                index = this.getIndex(ball);
                for (var _i = 0, index_2 = index; _i < index_2.length; _i++) {
                    var i = index_2[_i];
                    result = result.concat(this.nodes[i].retrieve(ball));
                }
            }
            return result.concat(this.objects);
        };
        QuadTree.prototype.insert = function (ball) {
            var index;
            if (this.nodes.length) {
                index = this.getIndex(ball);
                for (var _i = 0, index_3 = index; _i < index_3.length; _i++) {
                    var i = index_3[_i];
                    this.nodes[i].insert(ball);
                }
                return;
            }
            this.objects.push(ball);
            if (!this.nodes.length) {
                if (this.objects.length > this.MAX_OBJECTS && this.level < this.MAX_LEVELS) {
                    this.split();
                    for (var i = this.objects.length - 1; i >= 0; i--) {
                        var ball_1 = this.objects.pop();
                        index = this.getIndex(ball_1);
                        for (var _a = 0, index_4 = index; _a < index_4.length; _a++) {
                            var j = index_4[_a];
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
            if (top) {
                if (right) {
                    index.push(0);
                }
                else if (left) {
                    index.push(3);
                }
                else {
                    index.push(0);
                    index.push(3);
                }
            }
            else if (bottom) {
                if (right) {
                    index.push(1);
                }
                else if (left) {
                    index.push(2);
                }
                else {
                    index.push(1);
                    index.push(2);
                }
            }
            else {
                if (right) {
                    index.push(0);
                    index.push(1);
                }
                else if (left) {
                    index.push(2);
                    index.push(3);
                }
                else {
                    index.push(0);
                    index.push(1);
                    index.push(2);
                    index.push(3);
                }
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