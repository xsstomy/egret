var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var NODIdle = (function (_super) {
    __extends(NODIdle, _super);
    function NODIdle(parentNode, nodePrecondition) {
        if (nodePrecondition === void 0) { nodePrecondition = null; }
        return _super.call(this, parentNode, nodePrecondition) || this;
    }
    NODIdle.prototype.doEnter = function (input) {
        this.waitingTime = 0.5;
    };
    NODIdle.prototype.doExit = function (input) {
        var timestep = 0.1;
        this.waitingTime -= timestep;
        if (this.waitingTime < 0) {
            return BevRunningStatus.BRS_Finish;
        }
        return BevRunningStatus.BRS_Executing;
    };
    return NODIdle;
}(BevNodeTerminal));
__reflect(NODIdle.prototype, "NODIdle");
