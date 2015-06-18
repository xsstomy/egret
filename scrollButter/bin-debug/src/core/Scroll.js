/**
 * Created by xiashishi on 15/6/18.
 */
var xss;
(function (xss) {
    var Scroll = (function (_super) {
        __extends(Scroll, _super);
        function Scroll() {
            _super.call(this);
            //视口
            this.rightBoundary = 0;
            this.leftBoundary = 0;
            this.topBoundary = 0;
            this.bottomBoundary = 0;
            //图片资源
            this.bg = null;
            this.hero = null;
            //主角移动的速度
            this.vx = 0;
            this.vy = 0;
            //舞台宽高
            this.stageW = 0;
            this.stageH = 0;
            //按钮
            this.leftBtn = null;
            this.rightBtn = null;
            this.topBtn = null;
            this.bottomBtn = null;
            this.uiSprite = null;
            this.init();
        }
        var __egretProto__ = Scroll.prototype;
        __egretProto__.init = function () {
            var _this = this;
            this.stageH = egret.MainContext.instance.stage.stageHeight;
            this.stageW = egret.MainContext.instance.stage.stageWidth;
            //添加背景
            this.bg = new egret.Bitmap(RES.getRes("bgImage"));
            this.addChild(this.bg);
            this.bg.x = -(this.bg.width - this.stageW) * 0.5;
            this.bg.y = -(this.bg.height - this.stageH) * 0.5;
            //添加角色
            this.hero = new egret.Bitmap(RES.getRes("heroImage"));
            this.addChild(this.hero);
            this.hero.x = (this.stageW - this.hero.width) * 0.5;
            this.hero.y = (this.stageH - this.hero.height) * 0.5;
            //UI层初始化
            this.uiSprite = new egret.Sprite();
            this.addChild(this.uiSprite);
            //按钮初始化
            this.leftBtn = new egret.TextField();
            this.leftBtn.text = "左";
            this.leftBtn.x = 0;
            this.leftBtn.y = 50;
            this.uiSprite.addChild(this.leftBtn);
            this.rightBtn = new egret.TextField();
            this.rightBtn.text = "右";
            this.rightBtn.x = 100;
            this.rightBtn.y = 50;
            this.uiSprite.addChild(this.rightBtn);
            this.topBtn = new egret.TextField();
            this.topBtn.text = "上";
            this.topBtn.x = 50;
            this.topBtn.y = 0;
            this.uiSprite.addChild(this.topBtn);
            this.bottomBtn = new egret.TextField();
            this.bottomBtn.text = "下";
            this.bottomBtn.x = 50;
            this.bottomBtn.y = 50;
            this.uiSprite.addChild(this.bottomBtn);
            this.uiSprite.x = this.stageW - this.uiSprite.width;
            this.uiSprite.y = this.stageH - this.uiSprite.height;
            //定义边界
            this.rightBoundary = this.stageW * 0.75;
            this.leftBoundary = this.stageW * 0.25;
            this.topBoundary = this.stageH * 0.25;
            this.bottomBoundary = this.stageH * 0.75;
            //添加键盘事件监听
            document.addEventListener("keydown", function (e) { return _this.onKeyDown(e); }, false);
            //this.bg.touchEnabled = true;
            //this.bg.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.onKeyDown , this);
            //this.bg.addEventListener(egret.TouchEvent.TOUCH_END, this.onKeyUp , this);
            document.addEventListener("keyup", function (e) { return _this.onKeyUp(e); }, false);
            this.addEventListener(egret.Event.ENTER_FRAME, this.onEnterFrame, this);
            this.bottomBtn.touchEnabled = true;
            this.topBtn.touchEnabled = true;
            this.leftBtn.touchEnabled = true;
            this.rightBtn.touchEnabled = true;
            this.bottomBtn.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.onTouchBegin, this);
            this.bottomBtn.addEventListener(egret.TouchEvent.TOUCH_END, this.onTouchEnd, this);
            this.topBtn.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.onTouchBegin, this);
            this.topBtn.addEventListener(egret.TouchEvent.TOUCH_END, this.onTouchEnd, this);
            this.leftBtn.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.onTouchBegin, this);
            this.leftBtn.addEventListener(egret.TouchEvent.TOUCH_END, this.onTouchEnd, this);
            this.rightBtn.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.onTouchBegin, this);
            this.rightBtn.addEventListener(egret.TouchEvent.TOUCH_END, this.onTouchEnd, this);
        };
        //按下
        __egretProto__.onTouchBegin = function (e) {
            if (e.target.text == "左") {
                this.vx = -5;
            }
            else if (e.target.text == "右") {
                this.vx = 5;
            }
            else if (e.target.text == "上") {
                this.vy = -5;
            }
            else if (e.target.text == "下") {
                this.vy = 5;
            }
        };
        //弹起
        __egretProto__.onTouchEnd = function (e) {
            this.vx = 0;
            this.vy = 0;
            //这里可以将对应的封装一下,解除耦合
            //if(e.target == Touch.LEFT || e.target == Touch.RIGHT)
            //{
            //    this.vx = 0;
            //}
            //else if(e.target == Touch.DOWN || e.target == Touch.UP)
            //{
            //    this.vy = 0;
            //}
        };
        //键盘键位按下
        __egretProto__.onKeyDown = function (e) {
            if (e.keyCode == KeyBoard.LEFT) {
                this.vx = -5;
            }
            else if (e.keyCode == KeyBoard.RIGHT) {
                this.vx = 5;
            }
            else if (e.keyCode == KeyBoard.UP) {
                this.vy = -5;
            }
            else if (e.keyCode == KeyBoard.DOWN) {
                this.vy = 5;
            }
        };
        //键盘键位弹起
        __egretProto__.onKeyUp = function (e) {
            if (e.keyCode == KeyBoard.LEFT || e.keyCode == KeyBoard.RIGHT) {
                this.vx = 0;
            }
            else if (e.keyCode == KeyBoard.DOWN || e.keyCode == KeyBoard.UP) {
                this.vy = 0;
            }
        };
        __egretProto__.onEnterFrame = function (e) {
            //移动角色
            this.hero.x += this.vx;
            this.hero.y += this.vy;
            //console.log("....");
            //在内部边缘停住角色
            if (this.hero.x < this.leftBoundary) {
                this.hero.x = this.leftBoundary;
                this.rightBoundary = this.stageW * 0.75;
                this.bg.x -= this.vx;
            }
            else if (this.hero.x + this.hero.width > this.rightBoundary) {
                this.hero.x = this.rightBoundary - this.hero.width;
                this.leftBoundary = this.stageW * 0.25;
                this.bg.x -= this.vx;
            }
            else if (this.hero.y < this.topBoundary) {
                this.hero.y = this.topBoundary;
                this.bottomBoundary = this.stageH * 0.75;
                this.bg.y -= this.vy;
            }
            else if (this.hero.y + this.hero.height > this.bottomBoundary) {
                this.hero.y = this.bottomBoundary - this.hero.height;
                this.topBoundary = this.stageH * 0.25;
                this.bg.y -= this.vy;
            }
            //限制边界处理
            if (this.bg.x > 0) {
                this.bg.x = 0;
                this.leftBoundary = 0;
            }
            if (this.bg.y > 0) {
                this.bg.y = 0;
                this.topBoundary = 0;
            }
            if (this.bg.x < this.stageW - this.bg.width) {
                this.bg.x = this.stageW - this.bg.width;
                this.rightBoundary = this.stageW;
            }
            if (this.bg.y < this.stageH - this.bg.height) {
                this.bg.y = this.stageH - this.bg.height;
                this.bottomBoundary = this.stageH;
            }
        };
        return Scroll;
    })(egret.Sprite);
    xss.Scroll = Scroll;
    Scroll.prototype.__class__ = "xss.Scroll";
})(xss || (xss = {}));
