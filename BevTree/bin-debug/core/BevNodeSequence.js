var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
/**
 * 序列节点
 */
var BevNodeSequence = (function (_super) {
    __extends(BevNodeSequence, _super);
    function BevNodeSequence(parentNode, nodePrecondition) {
        if (nodePrecondition === void 0) { nodePrecondition = null; }
        var _this = _super.call(this, parentNode, nodePrecondition) || this;
        _this.currNodeIndex = InvalidChildNodeIndex;
        return _this;
    }
    BevNodeSequence.prototype.doEvaluate = function (input) {
        var testNodeIndex;
        if (this.currNodeIndex == InvalidChildNodeIndex) {
            testNodeIndex = 0;
        }
        else {
            testNodeIndex = this.currNodeIndex;
        }
        if (this.checkIndex(testNodeIndex)) {
            var childNode = this.childNodeList[testNodeIndex];
            if (childNode.evaluate(input)) {
                return true;
            }
        }
        return false;
    };
    BevNodeSequence.prototype.doTransition = function (input) {
        if (this.checkIndex(this.currNodeIndex)) {
            var childNode = this.childNodeList[this.currNodeIndex];
            childNode.transition(input);
        }
        this.currNodeIndex = InvalidChildNodeIndex;
    };
    BevNodeSequence.prototype.doTick = function (input, output) {
        var isFinish = BevRunningStatus.BRS_Finish;
        if (this.currNodeIndex == InvalidChildNodeIndex) {
            this.currNodeIndex = 0;
        }
        var childNode = this.childNodeList[this.currNodeIndex];
        isFinish = childNode.tick(input, output);
        if (isFinish == BevRunningStatus.BRS_Finish) {
            ++this.currNodeIndex;
            if (this.currNodeIndex == this.childNodeCount) {
                this.currNodeIndex = InvalidChildNodeIndex;
            }
            else {
                isFinish = BevRunningStatus.BRS_Executing;
            }
        }
        if (isFinish < 0) {
            this.currNodeIndex = InvalidChildNodeIndex;
        }
        return isFinish;
    };
    return BevNodeSequence;
}(BevNode));
__reflect(BevNodeSequence.prototype, "BevNodeSequence");
//# sourceMappingURL=BevNodeSequence.js.map