var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var BevNodePreconditionNot = (function (_super) {
    __extends(BevNodePreconditionNot, _super);
    function BevNodePreconditionNot(lcondition) {
        var _this = _super.call(this) || this;
        _this._lcondition = lcondition;
        return _this;
    }
    BevNodePreconditionNot.prototype.externalCondition = function (input) {
        return !this._lcondition.externalCondition(input);
    };
    return BevNodePreconditionNot;
}(BevNodePrecondition));
__reflect(BevNodePreconditionNot.prototype, "BevNodePreconditionNot");
//# sourceMappingURL=BevNodePreconditionNot.js.map