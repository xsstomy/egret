/**
 * Created by xiashishi on 15/6/18.
 */
module xss
{
    /**
     * 边界盒子
     */
    export class Box extends egret.Sprite
    {
        constructor()
        {
            super();
            this.init();
        }

        private init()
        {
            this.addChild(new egret.Bitmap(RES.getRes("boxImage")));
        }
    }
}