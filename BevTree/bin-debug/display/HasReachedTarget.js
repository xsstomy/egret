var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var HasReachedTarget = (function (_super) {
    __extends(HasReachedTarget, _super);
    function HasReachedTarget() {
        return _super.apply(this, arguments) || this;
    }
    HasReachedTarget.prototype.externalCondition = function (input) {
        var currPos = new egret.Point(input.owner.x, input.owner.y);
        var targetPos = input.targetPosition;
        var disX = Math.abs(currPos.x - targetPos.x);
        var disY = Math.abs(currPos.y - targetPos.y);
        var disLength = Math.sqrt(disY * disY + disX * disX);
        if (disLength < 1) {
            return true;
        }
        return false;
    };
    return HasReachedTarget;
}(BevNodePrecondition));
__reflect(HasReachedTarget.prototype, "HasReachedTarget");
//# sourceMappingURL=HasReachedTarget.js.map