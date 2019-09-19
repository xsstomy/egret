/**
 * 行为节点
 */
var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
//运行状态
var BevRunningStatus;
(function (BevRunningStatus) {
    BevRunningStatus[BevRunningStatus["BRS_Executing"] = 0] = "BRS_Executing";
    BevRunningStatus[BevRunningStatus["BRS_Finish"] = 1] = "BRS_Finish";
    BevRunningStatus[BevRunningStatus["BRS_ERROR_Transition"] = -1] = "BRS_ERROR_Transition";
})(BevRunningStatus || (BevRunningStatus = {}));
;
// 行为状态
var TerminationNodeStatus;
(function (TerminationNodeStatus) {
    TerminationNodeStatus[TerminationNodeStatus["TNS_Ready"] = 1] = "TNS_Ready";
    TerminationNodeStatus[TerminationNodeStatus["TNS_Running"] = 2] = "TNS_Running";
    TerminationNodeStatus[TerminationNodeStatus["TNS_Finish"] = 3] = "TNS_Finish";
})(TerminationNodeStatus || (TerminationNodeStatus = {}));
;
//并行状态
var ParallelFinishCondition;
(function (ParallelFinishCondition) {
    ParallelFinishCondition[ParallelFinishCondition["PFC_OR"] = 1] = "PFC_OR";
    ParallelFinishCondition[ParallelFinishCondition["PFC_AND"] = 2] = "PFC_AND";
})(ParallelFinishCondition || (ParallelFinishCondition = {}));
;
var BevNodeTerminal = (function (_super) {
    __extends(BevNodeTerminal, _super);
    function BevNodeTerminal(parentNode, nodePrecondition) {
        if (nodePrecondition === void 0) { nodePrecondition = null; }
        var _this = _super.call(this, parentNode, nodePrecondition) || this;
        _this.needExit = false;
        _this.status = TerminationNodeStatus.TNS_Ready;
        return _this;
    }
    /**
     * 进入
     */
    BevNodeTerminal.prototype.doEnter = function (input) {
    };
    // 执行行为
    BevNodeTerminal.prototype.doExecute = function (input, output) {
        return BevRunningStatus.BRS_Finish;
    };
    //退出
    BevNodeTerminal.prototype.doExit = function (input, exitId) {
    };
    BevNodeTerminal.prototype.doTick = function (input, output) {
        var isFinish = BevRunningStatus.BRS_Finish;
        if (this.status == TerminationNodeStatus.TNS_Ready) {
            this.doEnter(input);
            this.needExit = true;
            this.status = TerminationNodeStatus.TNS_Running;
            this.setActiveNode(this);
        }
        if (this.status == TerminationNodeStatus.TNS_Running) {
            isFinish = this.doExecute(input, output);
            this.setActiveNode(this);
            if (isFinish == BevRunningStatus.BRS_Finish || isFinish < 0) {
                this.status = TerminationNodeStatus.TNS_Finish;
            }
        }
        if (this.status == TerminationNodeStatus.TNS_Finish) {
            if (this.needExit) {
                this.doExit(input, isFinish);
            }
            this.status = TerminationNodeStatus.TNS_Ready;
            this.needExit = false;
            this.setActiveNode(null);
        }
        return isFinish;
    };
    BevNodeTerminal.prototype.doTransition = function (input) {
        if (this.needExit) {
            this.doExit(input, BevRunningStatus.BRS_ERROR_Transition);
        }
        this.setActiveNode(null);
        this.status = TerminationNodeStatus.TNS_Ready;
        this.needExit = false;
    };
    return BevNodeTerminal;
}(BevNode));
__reflect(BevNodeTerminal.prototype, "BevNodeTerminal");
//# sourceMappingURL=BevNodeTerminal.js.map