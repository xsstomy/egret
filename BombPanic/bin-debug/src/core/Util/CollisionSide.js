/**
 * Created by xiashishi on 15/6/20.
 */
var xss;
(function (xss) {
    /**
     * 判断方向
     * 分离数据
     */
    var CollisionSide = (function () {
        function CollisionSide() {
        }
        var __egretProto__ = CollisionSide.prototype;
        CollisionSide.LEFT = "left";
        CollisionSide.RIGHT = "right";
        CollisionSide.TOP = "top";
        CollisionSide.BOTTOM = "bottom";
        return CollisionSide;
    })();
    xss.CollisionSide = CollisionSide;
    CollisionSide.prototype.__class__ = "xss.CollisionSide";
})(xss || (xss = {}));
