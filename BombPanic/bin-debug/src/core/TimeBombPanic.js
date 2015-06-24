/**
 * Created by xiashishi on 15/6/18.
 */
var xss;
(function (xss) {
    var TimeBombPanic = (function (_super) {
        __extends(TimeBombPanic, _super);
        function TimeBombPanic() {
            _super.call(this);
            this.init();
        }
        var __egretProto__ = TimeBombPanic.prototype;
        __egretProto__.init = function () {
            this.stageH = egret.MainContext.instance.stage.stageHeight;
            this.stageW = egret.MainContext.instance.stage.stageWidth;
            this.output = new egret.TextField();
            this.input = new egret.TextField();
            this.hero = new xss.Hero();
            this.background = new xss.Background();
            this.gameOver = new xss.GameOver();
            //bombs
            this.bomb1 = new xss.Bomb();
            this.bomb2 = new xss.Bomb();
            this.bomb3 = new xss.Bomb();
            this.bomb4 = new xss.Bomb();
            this.bomb5 = new xss.Bomb();
            this.boxex = [];
            this.boxex.push(this.bomb1);
            this.boxex.push(this.bomb2);
            this.boxex.push(this.bomb3);
            this.boxex.push(this.bomb4);
            this.boxex.push(this.bomb5);
            this.addGameObjectToStage(this.bomb1, 105, 600);
            this.addGameObjectToStage(this.bomb2, 205, 700);
            this.addGameObjectToStage(this.bomb3, 305, 700);
            this.addGameObjectToStage(this.bomb4, 305, 400);
            this.addGameObjectToStage(this.bomb5, 305, 650);
            this.bombDefused = 0;
            this.addGameObjectToStage(this.background, 0, 0);
            //this.background.width = 480;
            //this.background.height = 800;
            this.background.w = 480;
            this.background.h = 800;
            this.addGameObjectToStage(this.hero, 50, 50);
            //
            this.setupEventListeners();
        };
        __egretProto__.setupEventListeners = function () {
            var _this = this;
            //添加键盘事件监听
            document.addEventListener("keydown", function (e) { return _this.onKeyDown(e); }, false);
            document.addEventListener("keyup", function (e) { return _this.onKeyUp(e); }, false);
            this.addEventListener(egret.Event.ENTER_FRAME, this.onEnterFrame, this);
        };
        //键盘键位按下
        __egretProto__.onKeyDown = function (e) {
            if (e.keyCode == KeyBoard.LEFT) {
                this.hero.accelerationX = -0.2;
            }
            else if (e.keyCode == KeyBoard.RIGHT) {
                this.hero.accelerationX = 0.2;
            }
            else if (e.keyCode == KeyBoard.UP) {
                //this.hero.vy = -5;
                if (this.hero.isOnGround) {
                    //this.hero.gravity = 0.3;
                    this.hero.vy += this.hero.jumpForce;
                    this.hero.isOnGround = false;
                }
            }
            //else if(e.keyCode == KeyBoard.DOWN)
            //{
            //    this.hero.vy = 5;
            //}
        };
        //键盘键位弹起
        __egretProto__.onKeyUp = function (e) {
            if (e.keyCode == KeyBoard.LEFT || e.keyCode == KeyBoard.RIGHT) {
                this.hero.accelerationX = 0;
            }
            else if (e.keyCode == KeyBoard.DOWN || e.keyCode == KeyBoard.UP) {
                this.hero.accelerationY = 0;
            }
        };
        __egretProto__.onEnterFrame = function (e) {
            //x轴速度处理
            this.hero.vx += this.hero.accelerationX;
            this.hero.vx *= this.hero.friction;
            //y轴速度处理
            this.hero.vy += this.hero.gravity;
            /**
             * 限制处理速度，以免速度过快
             */
            if (this.hero.vx > this.hero.speedLimit) {
                this.hero.vx = this.hero.speedLimit;
            }
            else if (this.hero.vx < -this.hero.speedLimit) {
                this.hero.vx = -this.hero.speedLimit;
            }
            if (this.hero.vy > this.hero.speedLimit * 2) {
                this.hero.vy = this.hero.speedLimit * 2;
            }
            if (Math.abs(this.hero.vx) < 0.1) {
                this.hero.vx = 0;
            }
            if (Math.abs(this.hero.vy) < 0.1) {
                this.hero.vy = 0;
            }
            //移动角色
            this.hero.x += this.hero.vx;
            this.hero.y += this.hero.vy;
            if (this.hero.x < 0) {
                this.hero.vx = 0;
                this.hero.x = 0;
            }
            if (this.hero.y < 0) {
                this.hero.vy = 0;
                this.hero.y = 0;
            }
            if (this.hero.x + this.hero.width > this.stageW) {
                this.hero.vx = 0;
                this.hero.x = this.stageW - this.hero.width;
            }
            if (this.hero.y + this.hero.height > this.stageH) {
                this.hero.vy = 0;
                this.hero.y = this.stageH - this.hero.height;
                this.hero.isOnGround = true;
            }
            for (var i = 0, length = this.boxex.length; i < length; i += 1) {
                xss.Collision.block(this.hero, this.boxex[i]);
                if (xss.Collision.collisionSide === xss.CollisionSide.BOTTOM) {
                    this.hero.isOnGround = true;
                    //this.hero.vy = - this.hero.gravity;
                    this.hero.vy = 0;
                }
                else if (xss.Collision.collisionSide === xss.CollisionSide.TOP) {
                    this.hero.vy = 0;
                }
                else if (xss.Collision.collisionSide === xss.CollisionSide.LEFT || xss.Collision.collisionSide === xss.CollisionSide.RIGHT) {
                    this.hero.vx = 0;
                }
            }
        };
        /**
         *
         * @param target
         */
        __egretProto__.moveHero = function (target) {
            //x轴速度处理
            target.vx += target.accelerationX;
            target.vx *= target.friction;
            //y轴速度处理
            target.vy += target.gravity;
            /**
             * 限制处理速度，以免速度过快
             */
            if (target.vx > target.speedLimit) {
                target.vx = target.speedLimit;
            }
            else if (target.vx < -target.speedLimit) {
                target.vx = -target.speedLimit;
            }
            if (target.vy > target.speedLimit * 2) {
                target.vy = target.speedLimit * 2;
            }
            if (Math.abs(target.vx) < 0.1) {
                target.vx = 0;
            }
            if (Math.abs(target.vy) < 0.1) {
                target.vy = 0;
            }
            //移动角色
            target.x += target.vx;
            target.y += target.vy;
        };
        /**
         * 添加对象到舞台
         * @param target
         * @param xPos
         * @param yPos
         * @param parentLayer
         */
        __egretProto__.addGameObjectToStage = function (target, xPos, yPos, parentLayer) {
            if (parentLayer === void 0) { parentLayer = null; }
            if (!parentLayer) {
                this.addChild(target);
            }
            else if (parentLayer) {
                parentLayer.addChild(target);
                this.addChild(parentLayer);
            }
            target.x = xPos;
            target.y = yPos;
        };
        return TimeBombPanic;
    })(egret.Sprite);
    xss.TimeBombPanic = TimeBombPanic;
    TimeBombPanic.prototype.__class__ = "xss.TimeBombPanic";
})(xss || (xss = {}));
