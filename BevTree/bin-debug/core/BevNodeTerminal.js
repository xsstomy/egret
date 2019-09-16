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
var BevRunningStatus;
(function (BevRunningStatus) {
    BevRunningStatus[BevRunningStatus["BRS_Executing"] = 0] = "BRS_Executing";
    BevRunningStatus[BevRunningStatus["BRS_Finish"] = 1] = "BRS_Finish";
    BevRunningStatus[BevRunningStatus["BRS_ERROR_Transition"] = -1] = "BRS_ERROR_Transition";
})(BevRunningStatus || (BevRunningStatus = {}));
;
var TerminationNode;
(function (TerminationNode) {
    TerminationNode[TerminationNode["TNS_Ready"] = 1] = "TNS_Ready";
    TerminationNode[TerminationNode["TNS_Running"] = 2] = "TNS_Running";
    TerminationNode[TerminationNode["TNS_Finish"] = 3] = "TNS_Finish";
})(TerminationNode || (TerminationNode = {}));
;
var BevNodeTerminal = (function (_super) {
    __extends(BevNodeTerminal, _super);
    function BevNodeTerminal(parentNode, nodePrecondition) {
        if (nodePrecondition === void 0) { nodePrecondition = null; }
        var _this = _super.call(this, parentNode, nodePrecondition) || this;
        _this.needExit = false;
        _this.status = TerminationNode.TNS_Ready;
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
    BevNodeTerminal.prototype.doTransition = function (input) {
    };
    return BevNodeTerminal;
}(BevNode));
__reflect(BevNodeTerminal.prototype, "BevNodeTerminal");
