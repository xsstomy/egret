/**
 * Created by xiashishi on 15/6/18.
 */
var xss;
(function (xss) {
    var GameOver = (function (_super) {
        __extends(GameOver, _super);
        function GameOver() {
            _super.call(this);
            this.init();
        }
        var __egretProto__ = GameOver.prototype;
        __egretProto__.init = function () {
            this.addChild(new egret.Bitmap(RES.getRes("gameOver")));
        };
        return GameOver;
    })(egret.Sprite);
    xss.GameOver = GameOver;
    GameOver.prototype.__class__ = "xss.GameOver";
})(xss || (xss = {}));
