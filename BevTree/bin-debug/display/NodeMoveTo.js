var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
/**
 * //移动，平移到某目标点
 */
var NodeMoveTo = (function (_super) {
    __extends(NodeMoveTo, _super);
    function NodeMoveTo(parentNode, nodePrecondition) {
        if (nodePrecondition === void 0) { nodePrecondition = null; }
        return _super.call(this, parentNode, nodePrecondition) || this;
    }
    NodeMoveTo.prototype.doExecute = function (input, output) {
        var distance = 10;
        var currPos = new egret.Point(input.owner.x, input.owner.y);
        var targetPos = input.targetPosition;
        var lengthX = targetPos.x - currPos.x;
        var lengthY = targetPos.y - currPos.y;
        var lengthDistance = Math.sqrt(lengthY * lengthY + lengthX * lengthX);
        if (lengthDistance < distance) {
            output.nextPosition = input.targetPosition;
            input.owner.x = targetPos.x;
            input.owner.y = targetPos.y;
            return BevRunningStatus.BRS_Finish;
        }
        else {
            var disX = Math.floor(distance * Math.sin(input.owner.rotation / 360 * 2 * Math.PI));
            var disY = Math.floor(distance * Math.cos(input.owner.rotation / 360 * 2 * Math.PI));
            // if (disX <= 4) {
            //     disX = 4;
            // }
            // if (disY <= 4) {
            //     disY = 4;
            // }
            disX = disY = distance;
            var nextX = void 0;
            var nextY = void 0;
            if (lengthX > 0 && lengthY > 0) {
                nextX = input.owner.x + disX;
                nextY = input.owner.y + disY;
            }
            if (lengthX > 0 && lengthY < 0) {
                nextX = input.owner.x + disX;
                nextY = input.owner.y - disY;
            }
            if (lengthX < 0 && lengthY > 0) {
                nextX = input.owner.x - disX;
                nextY = input.owner.y + disY;
            }
            if (lengthX < 0 && lengthY < 0) {
                nextX = input.owner.x - disX;
                nextY = input.owner.y - disY;
            }
            input.owner.x = nextX;
            input.owner.y = nextY;
            output.nextPosition = new egret.Point(nextX, nextY);
        }
        return BevRunningStatus.BRS_Executing;
    };
    return NodeMoveTo;
}(BevNodeTerminal));
__reflect(NodeMoveTo.prototype, "NodeMoveTo");
//# sourceMappingURL=NodeMoveTo.js.map