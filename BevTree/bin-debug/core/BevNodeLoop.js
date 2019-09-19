var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
/**
 * 循环节点
 * 预设的循环次数到了就返回False，否则，只调用第一个子节点的Evaluate方法，用它所返回的值作为自身的值返回
 */
var BevNodeLoop = (function (_super) {
    __extends(BevNodeLoop, _super);
    function BevNodeLoop(parentNode, nodePrecondition, loopCount) {
        if (nodePrecondition === void 0) { nodePrecondition = null; }
        if (loopCount === void 0) { loopCount = BevNodeLoop.infiniteLoop; }
        var _this = _super.call(this, parentNode, nodePrecondition) || this;
        _this.loopCount = loopCount;
        _this.currentCount = 0;
        return _this;
    }
    BevNodeLoop.prototype.doEvaluate = function (input) {
        var checkLoopCount = (this.loopCount == BevNodeLoop.infiniteLoop) || (this.currentCount < this.loopCount);
        if (!checkLoopCount) {
            return false;
        }
        if (this.checkIndex(0)) {
            var childNode = this.childNodeList[0];
            if (childNode.evaluate(input)) {
                return true;
            }
        }
        return false;
    };
    BevNodeLoop.prototype.doTransition = function (input) {
        if (this.checkIndex(0)) {
            var childNode = this.childNodeList[0];
            childNode.doTransition(input);
        }
        this.currentCount = 0;
    };
    BevNodeLoop.prototype.doTick = function (input, output) {
        var isFinish = BevRunningStatus.BRS_Finish;
        if (this.checkIndex(0)) {
            var childNode = this.childNodeList[0];
            isFinish = childNode.tick(input, output);
            if (isFinish == BevRunningStatus.BRS_Finish) {
                if (this.loopCount != BevNodeLoop.infiniteLoop) {
                    this.currentCount++;
                    if (this.currentCount == this.loopCount) {
                        isFinish = BevRunningStatus.BRS_Executing;
                    }
                }
                else {
                    isFinish = BevRunningStatus.BRS_Executing;
                }
            }
        }
        if (isFinish) {
            this.currentCount = 0;
        }
        return BevRunningStatus.BRS_Finish;
    };
    return BevNodeLoop;
}(BevNode));
BevNodeLoop.infiniteLoop = -1;
__reflect(BevNodeLoop.prototype, "BevNodeLoop");
//# sourceMappingURL=BevNodeLoop.js.map