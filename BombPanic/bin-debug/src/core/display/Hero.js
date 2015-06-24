/**
 * Created by xiashishi on 15/6/18.
 */
var xss;
(function (xss) {
    /**
     * 主角
     */
    var Hero = (function (_super) {
        __extends(Hero, _super);
        function Hero() {
            _super.call(this);
            /**
             * 最高限制速度
             * @type {number}
             */
            this.speedLimit = 5;
            /**
             * X轴加速度
             * @type {number}
             */
            this.accelerationX = 0;
            /**
             * y轴加速度
             * @type {number}
             */
            this.accelerationY = 0;
            /**
             * x 轴移动速度
             * @type {number}
             */
            this.vx = 0;
            /**
             * y 轴移动速度
             * @type {number}
             */
            this.vy = 0;
            /**
             * 摩擦系数
             * @type {number}
             */
            this.friction = 0.96;
            /**
             * 反弹系数
             * @type {number}
             */
            this.bounce = -0.7;
            /**
             * 重力系数
             * @type {number}
             */
            this.gravity = 0.3;
            /**
             * 是否到达地面
             * @type {boolean}
             */
            this.isOnGround = false;
            /**
             * 默认跳的时候初速度
             * @type {number}
             */
            this.jumpForce = -10;
            this.init();
        }
        var __egretProto__ = Hero.prototype;
        __egretProto__.init = function () {
            this.addChild(new egret.Bitmap(RES.getRes("heroImage")));
        };
        return Hero;
    })(egret.Sprite);
    xss.Hero = Hero;
    Hero.prototype.__class__ = "xss.Hero";
})(xss || (xss = {}));
