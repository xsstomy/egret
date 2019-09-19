var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var HasFacedTarget = (function (_super) {
    __extends(HasFacedTarget, _super);
    function HasFacedTarget() {
        return _super.apply(this, arguments) || this;
    }
    HasFacedTarget.prototype.externalCondition = function (input) {
        var currPos = new egret.Point(input.owner.x, input.owner.y);
        var targetPos = input.targetPosition;
        var disX = Math.abs(targetPos.x - currPos.x);
        var disY = Math.abs(targetPos.y - currPos.y);
        var disLength = Math.sqrt(disY * disY + disX * disX);
        if (disLength <= 1) {
            return true;
        }
        else {
            var angle = input.owner.rotation;
            var disAngle = Math.asin(disY / disLength) / (2 * Math.PI) * 360;
            if (Math.abs(angle - disAngle) <= 1) {
                return true;
            }
        }
        return false;
    };
    return HasFacedTarget;
}(BevNodePrecondition));
__reflect(HasFacedTarget.prototype, "HasFacedTarget");
//# sourceMappingURL=HasFacedTarget.js.map