/**
 * Created by xiashishi on 15/6/18.
 */
module xss
{
    /**
     * 主角
     */
    export class Hero extends egret.Sprite
    {
        constructor()
        {
            super();
            this.init();
        }

        private init()
        {
            this.addChild(new egret.Bitmap(RES.getRes("heroImage")));
        }
    }
}