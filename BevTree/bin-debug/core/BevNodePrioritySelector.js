/**
 * 带优先级的选择节点
 */
var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var BevNodePrioritySelector = (function (_super) {
    __extends(BevNodePrioritySelector, _super);
    function BevNodePrioritySelector(parentNode, nodePrecondition) {
        if (nodePrecondition === void 0) { nodePrecondition = null; }
        var _this = _super.call(this, parentNode, nodePrecondition) || this;
        _this.currSelectIndex = InvalidChildNodeIndex;
        _this.lastSelectIndex = InvalidChildNodeIndex;
        return _this;
    }
    BevNodePrioritySelector.prototype.doEvaluate = function (input) {
        this.currSelectIndex = InvalidChildNodeIndex;
        for (var i = 0; i < this.childNodeCount; ++i) {
            var childNode = this.childNodeList[i];
            if (childNode.evaluate(input)) {
                this.currSelectIndex = i;
                return true;
            }
        }
        return false;
    };
    BevNodePrioritySelector.prototype.doTransition = function (input) {
        if (this.checkIndex(this.lastSelectIndex)) {
            var childNode = this.childNodeList[this.lastSelectIndex];
            childNode.transition(input);
        }
        this.lastSelectIndex = InvalidChildNodeIndex;
    };
    BevNodePrioritySelector.prototype.doTick = function (input, output) {
        var isFinish = BevRunningStatus.BRS_Finish;
        if (this.checkIndex(this.currSelectIndex)) {
            if (this.lastSelectIndex != this.currSelectIndex) {
                if (this.checkIndex(this.lastSelectIndex)) {
                    var childNode = this.childNodeList[this.lastSelectIndex];
                    childNode.transition(input);
                }
                this.lastSelectIndex = this.currSelectIndex;
            }
        }
        if (this.checkIndex(this.lastSelectIndex)) {
            var childNode = this.childNodeList[this.lastSelectIndex];
            isFinish = childNode.tick(input, output);
            if (isFinish) {
                this.lastSelectIndex = InvalidChildNodeIndex;
            }
        }
        return isFinish;
    };
    return BevNodePrioritySelector;
}(BevNode));
__reflect(BevNodePrioritySelector.prototype, "BevNodePrioritySelector");
//# sourceMappingURL=BevNodePrioritySelector.js.map