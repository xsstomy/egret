var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var BevNodeOutputParam = (function () {
    function BevNodeOutputParam() {
    }
    Object.defineProperty(BevNodeOutputParam.prototype, "bodyColor", {
        get: function () {
            return this._bodyColor;
        },
        set: function (value) {
            this._bodyColor = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BevNodeOutputParam.prototype, "bodySize", {
        get: function () {
            return this._bodySize;
        },
        set: function (value) {
            this._bodySize = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BevNodeOutputParam.prototype, "nextPosition", {
        get: function () {
            return this._nextPosition;
        },
        set: function (value) {
            this._nextPosition = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BevNodeOutputParam.prototype, "nextFacing", {
        get: function () {
            return this._nextFacing;
        },
        set: function (value) {
            this._nextFacing = value;
        },
        enumerable: true,
        configurable: true
    });
    return BevNodeOutputParam;
}());
__reflect(BevNodeOutputParam.prototype, "BevNodeOutputParam");
//# sourceMappingURL=BevNodeOutputParam.js.map