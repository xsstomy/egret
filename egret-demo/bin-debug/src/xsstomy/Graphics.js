var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
/**
 * Created by xiashishi on 15/3/9.
 */
var xsstomy;
(function (xsstomy) {
    var Graphics = (function (_super) {
        __extends(Graphics, _super);
        function Graphics() {
            _super.call(this);
            /**
             * 加载进度界面
             */
            this.canvas = new egret.Shape();
            //线条容器
            this.lineContainer = [];
            //线条粗细
            this.thickness = 2;
            //线条颜色
            this.color = 0x000000;
            this.addEventListener(egret.Event.ADDED_TO_STAGE, this.onAddToStage, this);
        }
        Graphics.prototype.onAddToStage = function (event) {
            this.removeEventListener(egret.Event.ADDED_TO_STAGE, this.onAddToStage, this);
            this.width = egret.MainContext.instance.stage.stageWidth;
            this.height = egret.MainContext.instance.stage.stageHeight;
            egret.Profiler.getInstance().run();
            this.canvas.graphics.beginFill(0xffffff, 1);
            this.canvas.graphics.drawRoundRect(0, 0, this.stage.stageWidth - 20, this.stage.stageHeight - 100, 10, 10);
            this.canvas.graphics.endFill();
            this.canvas.touchEnabled = true;
            this.stage.addChild(this.canvas);
            this.canvas.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.onCanvasTouch, this);
            this.stage.addEventListener(egret.TouchEvent.TOUCH_END, this.onStageTouch, this);
            this.canvas.x = 10;
            this.canvas.y = 80;
        };
        Graphics.prototype.onCanvasTouch = function (e) {
            this.line = new egret.Shape();
            this.stage.addChild(this.line);
            this.line.x = e.stageX;
            this.line.y = e.stageY;
            this.line.graphics.lineStyle(this.thickness, this.color, 1);
            this.line.graphics.lineTo(e.stageX - this.line.x, e.stageY - this.line.y);
            this.canvas.addEventListener(egret.TouchEvent.TOUCH_MOVE, this.onCanvasTouchMove, this);
        };
        Graphics.prototype.onStageTouch = function (e) {
            this.canvas.removeEventListener(egret.TouchEvent.TOUCH_MOVE, this.onCanvasTouchMove, this);
            var rtt = new egret.RenderTexture();
            rtt.drawToTexture(this.line, this.line.getBounds()); //引擎必须1.5.4以上，不然getBounds没有宽高
            var bmp = new egret.Bitmap(rtt);
            bmp.x = this.line.x;
            bmp.y = this.line.y;
            this.line.graphics.clear();
            this.stage.addChild(bmp);
        };
        Graphics.prototype.onCanvasTouchMove = function (e) {
            this.line.graphics.lineTo(e.stageX - this.line.x, e.stageY - this.line.y);
            this.line.graphics.moveTo(e.stageX - this.line.x, e.stageY - this.line.y);
        };
        return Graphics;
    })(egret.DisplayObjectContainer);
    xsstomy.Graphics = Graphics;
    Graphics.prototype.__class__ = "xsstomy.Graphics";
})(xsstomy || (xsstomy = {}));
