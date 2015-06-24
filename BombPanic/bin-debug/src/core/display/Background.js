/**
 * Created by xiashishi on 15/6/18.
 */
var xss;
(function (xss) {
    var Background = (function (_super) {
        __extends(Background, _super);
        function Background() {
            _super.call(this);
            this.init();
        }
        var __egretProto__ = Background.prototype;
        __egretProto__.init = function () {
            this.bitmap = new egret.Bitmap(RES.getRes("bgImage"));
            this.addChild(this.bitmap);
        };
        Object.defineProperty(__egretProto__, "w", {
            get: function () {
                return this.stageW;
            },
            set: function (value) {
                this.stageW = value;
                this.bitmap.width = value;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(__egretProto__, "h", {
            get: function () {
                return this.stageH;
            },
            set: function (value) {
                this.stageH = value;
                this.bitmap.height = value;
            },
            enumerable: true,
            configurable: true
        });
        return Background;
    })(egret.Sprite);
    xss.Background = Background;
    Background.prototype.__class__ = "xss.Background";
})(xss || (xss = {}));
