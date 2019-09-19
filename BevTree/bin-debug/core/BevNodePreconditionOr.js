var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var BevNodePreconditionOr = (function (_super) {
    __extends(BevNodePreconditionOr, _super);
    function BevNodePreconditionOr(lCondition, rCondition) {
        var _this = _super.call(this) || this;
        _this._lCondition = lCondition;
        _this._rCondition = rCondition;
        return _this;
    }
    BevNodePreconditionOr.prototype.externalCondition = function (input) {
        return this._lCondition.externalCondition(input) || this._rCondition.externalCondition(input);
    };
    return BevNodePreconditionOr;
}(BevNodePrecondition));
__reflect(BevNodePreconditionOr.prototype, "BevNodePreconditionOr");
//# sourceMappingURL=BevNodePreconditionOr.js.map