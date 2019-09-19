var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
/**
 * //空闲，表现是颜色不停变化
 */
var NodeIdle = (function (_super) {
    __extends(NodeIdle, _super);
    function NodeIdle(parentNode, nodePrecondition) {
        if (nodePrecondition === void 0) { nodePrecondition = null; }
        return _super.call(this, parentNode, nodePrecondition) || this;
    }
    NodeIdle.prototype.doEnter = function (input) {
        this.waitingTime = 0.5;
    };
    NodeIdle.prototype.doExecute = function (input, output) {
        var timestep = input.timeStep;
        this.waitingTime -= timestep;
        if (this.waitingTime < 0) {
            output.bodyColor = parseInt(Math.floor(Math.random() * 0xffffff).toString(16), 16);
            return BevRunningStatus.BRS_Finish;
        }
        return BevRunningStatus.BRS_Executing;
    };
    return NodeIdle;
}(BevNodeTerminal));
__reflect(NodeIdle.prototype, "NodeIdle");
//# sourceMappingURL=NodeIdle.js.map