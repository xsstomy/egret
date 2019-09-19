/**
 * //呼吸，表现是大小规律性变化
 */
var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var NodeBreathe = (function (_super) {
    __extends(NodeBreathe, _super);
    function NodeBreathe(parentNode, nodePrecondition) {
        if (nodePrecondition === void 0) { nodePrecondition = null; }
        var _this = _super.call(this, parentNode, nodePrecondition) || this;
        _this._isIncreasing = false;
        return _this;
    }
    NodeBreathe.prototype.doExecute = function (input, output) {
        var timestep = input.timeStep;
        var maxBodySize = 50;
        var minBodySize = 50;
        var size = 1;
        if (this._isIncreasing) {
            output.bodySize += (timestep * size);
            if (output.bodySize > maxBodySize) {
                output.bodySize = maxBodySize;
                this._isIncreasing = false;
            }
        }
        else {
            output.bodySize -= (timestep * size);
            if (output.bodySize < minBodySize) {
                output.bodySize = minBodySize;
                this._isIncreasing = true;
            }
        }
        return BevRunningStatus.BRS_Executing;
    };
    return NodeBreathe;
}(BevNodeTerminal));
__reflect(NodeBreathe.prototype, "NodeBreathe");
//# sourceMappingURL=NodeBreathe.js.map