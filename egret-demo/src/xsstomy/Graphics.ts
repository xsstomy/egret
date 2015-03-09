/**
 * Created by xiashishi on 15/3/9.
 */
 module xsstomy {
    export class Graphics extends egret.DisplayObjectContainer
    {
        /**
         * 加载进度界面
         */
        private canvas:egret.Shape = new egret.Shape();
        //线条容器
        private lineContainer:egret.Shape[] = [];
        //当前绘制对象
        private line:egret.Shape;
        //线条粗细
        private thickness:number = 2;
        //线条颜色
        private color:number = 0x000000;

        public constructor() {
            super();
            this.addEventListener(egret.Event.ADDED_TO_STAGE, this.onAddToStage, this);
        }

        private onAddToStage(event:egret.Event) {
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

        }

        private onCanvasTouch(e:egret.TouchEvent) {

            this.line = new egret.Shape();
            this.stage.addChild(this.line);
            this.line.x = e.stageX;
            this.line.y = e.stageY;
            this.line.graphics.lineStyle(this.thickness, this.color, 1);
            this.line.graphics.lineTo(e.stageX - this.line.x, e.stageY - this.line.y);
            this.canvas.addEventListener(egret.TouchEvent.TOUCH_MOVE, this.onCanvasTouchMove, this);
        }


        private onStageTouch(e:egret.TouchEvent) {
                this.canvas.removeEventListener(egret.TouchEvent.TOUCH_MOVE, this.onCanvasTouchMove, this);

                var rtt: egret.RenderTexture = new egret.RenderTexture();
                rtt.drawToTexture(this.line, this.line.getBounds());  //引擎必须1.5.4以上，不然getBounds没有宽高
                var bmp: egret.Bitmap = new egret.Bitmap(rtt);
                bmp.x = this.line.x;
                bmp.y = this.line.y;

                this.line.graphics.clear();
                this.stage.addChild(bmp);
        }


        private onCanvasTouchMove(e:egret.TouchEvent) {
            this.line.graphics.lineTo(e.stageX - this.line.x, e.stageY - this.line.y);
            this.line.graphics.moveTo(e.stageX - this.line.x, e.stageY - this.line.y);
        }
    }
}