var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
/**
 * 不带优先级的选择节点
 */
var BevNodeNonePrioritySelector = (function (_super) {
    __extends(BevNodeNonePrioritySelector, _super);
    function BevNodeNonePrioritySelector(parentNode, nodePrecondition) {
        if (nodePrecondition === void 0) { nodePrecondition = null; }
        return _super.call(this, parentNode, nodePrecondition) || this;
    }
    BevNodeNonePrioritySelector.prototype.doEvaluate = function (input) {
        if (this.checkIndex(this.currSelectIndex)) {
            var childNode = this.childNodeList[this.currSelectIndex];
            if (childNode.evaluate(input)) {
                return true;
            }
        }
        return _super.prototype.doEvaluate.call(this, input);
    };
    return BevNodeNonePrioritySelector;
}(BevNodePrioritySelector));
__reflect(BevNodeNonePrioritySelector.prototype, "BevNodeNonePrioritySelector");
//# sourceMappingURL=BevNodeNonePrioritySelector.js.map