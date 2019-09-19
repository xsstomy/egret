/**
 * 并行节点
 * 依次调用所有的子节点的Evaluate方法，若所有的子节点都返回True，则自身也返回True，否则，返回False
 */
var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var BevNodeParallel = (function (_super) {
    __extends(BevNodeParallel, _super);
    function BevNodeParallel(parentNode, nodePrecondition) {
        if (nodePrecondition === void 0) { nodePrecondition = null; }
        var _this = _super.call(this, parentNode, nodePrecondition) || this;
        _this.finishCondition = ParallelFinishCondition.PFC_OR;
        _this.childNodeStatus = [];
        for (var i = 0; i < MAX_CHILD_NODE_CNT; i++) {
            _this.childNodeStatus[i] = BevRunningStatus.BRS_Executing;
        }
        return _this;
    }
    BevNodeParallel.prototype.doEvaluate = function (input) {
        for (var i = 0; i < this.childNodeCount; ++i) {
            var childNode = this.childNodeList[i];
            if (this.childNodeStatus[i] == 0) {
                if (!childNode.evaluate(input)) {
                    return false;
                }
            }
        }
        return true;
    };
    BevNodeParallel.prototype.doTransition = function (input) {
        for (var i = 0; i < this.maxChildNodeCnt; ++i) {
            this.childNodeStatus[i] = BevRunningStatus.BRS_Executing;
        }
        for (var i = 0; i < this.childNodeCount; ++i) {
            var childNode = this.childNodeList[i];
            childNode.doTransition(input);
        }
    };
    BevNodeParallel.prototype.doTick = function (input, output) {
        var finishedChildCount = 0;
        for (var i = 0; i < this.childNodeCount; ++i) {
            var childNode = this.childNodeList[i];
            if (this.finishCondition == ParallelFinishCondition.PFC_OR) {
                if (this.childNodeStatus[i] == BevRunningStatus.BRS_Executing) {
                    this.childNodeStatus[i] = childNode.tick(input, output);
                }
                else if (this.childNodeStatus[i] != BevRunningStatus.BRS_Executing) {
                    for (var i_1 = 0; i_1 < this.maxChildNodeCnt; ++i_1) {
                        this.childNodeStatus[i_1] = BevRunningStatus.BRS_Executing;
                    }
                    return BevRunningStatus.BRS_Finish;
                }
            }
            else if (this.finishCondition == ParallelFinishCondition.PFC_AND) {
                if (this.childNodeStatus[i] == BevRunningStatus.BRS_Executing) {
                    this.childNodeStatus[i] = childNode.tick(input, output);
                }
                else {
                    finishedChildCount++;
                }
            }
            else {
                console.warn('BevNodeParallel errorFunc');
            }
        }
        if (finishedChildCount == this.childNodeCount) {
            for (var i = 0; i < this.maxChildNodeCnt; ++i) {
                this.childNodeStatus[i] = BevRunningStatus.BRS_Executing;
            }
            return BevRunningStatus.BRS_Finish;
        }
        return BevRunningStatus.BRS_Executing;
    };
    BevNodeParallel.prototype.setFinishCondition = function (condition) {
        this.finishCondition = condition;
        return this;
    };
    return BevNodeParallel;
}(BevNode));
__reflect(BevNodeParallel.prototype, "BevNodeParallel");
//# sourceMappingURL=BevNodeParallel.js.map