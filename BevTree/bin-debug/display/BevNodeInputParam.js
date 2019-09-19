var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var BevNodeInputParam = (function () {
    function BevNodeInputParam() {
    }
    Object.defineProperty(BevNodeInputParam.prototype, "timeStep", {
        get: function () {
            return this._timeStep;
        },
        set: function (value) {
            this._timeStep = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BevNodeInputParam.prototype, "targetPosition", {
        get: function () {
            return this._targetPosition;
        },
        set: function (value) {
            this._targetPosition = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BevNodeInputParam.prototype, "owner", {
        get: function () {
            return this._owner;
        },
        set: function (value) {
            this._owner = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BevNodeInputParam.prototype, "currFacing", {
        get: function () {
            return this._currFacing;
        },
        set: function (value) {
            this._currFacing = value;
        },
        enumerable: true,
        configurable: true
    });
    return BevNodeInputParam;
}());
__reflect(BevNodeInputParam.prototype, "BevNodeInputParam");
//# sourceMappingURL=BevNodeInputParam.js.map