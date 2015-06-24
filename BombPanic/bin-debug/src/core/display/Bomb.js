/**
 * Created by xiashishi on 15/6/18.
 */
var xss;
(function (xss) {
    var Bomb = (function (_super) {
        __extends(Bomb, _super);
        function Bomb() {
            _super.call(this);
            this.init();
        }
        var __egretProto__ = Bomb.prototype;
        __egretProto__.init = function () {
            this.addChild(new egret.Bitmap(RES.getRes("bombImage")));
        };
        return Bomb;
    })(egret.Sprite);
    xss.Bomb = Bomb;
    Bomb.prototype.__class__ = "xss.Bomb";
})(xss || (xss = {}));
