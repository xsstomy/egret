/**
 * Created by xiashishi on 15/6/18.
 */
module xss
{
    export class Bomb extends egret.Sprite
    {
        constructor()
        {
            super();
            this.init();
        }

        private init()
        {
            this.addChild(new egret.Bitmap(RES.getRes("bombImage")));
        }
    }
}