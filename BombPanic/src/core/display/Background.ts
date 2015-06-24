/**
 * Created by xiashishi on 15/6/18.
 */
module xss
{
    export class Background extends egret.Sprite
    {
        constructor()
        {
            super();
            this.init();
        }

         stageW:number;
         stageH:number;
        private bitmap:egret.Bitmap;
        private init()
        {
            this.bitmap = new egret.Bitmap(RES.getRes("bgImage"));
            this.addChild( this.bitmap );
        }

        set w(value:number)
        {
            this.stageW = value;
            this.bitmap.width = value;
        }

        get w():number
        {
            return this.stageW;
        }

        set h(value:number)
        {
            this.stageH = value;
            this.bitmap.height = value;
        }

        get h():number
        {
            return this.stageH;
        }
    }
}