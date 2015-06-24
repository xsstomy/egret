/**
 * Created by xiashishi on 15/6/20.
 */
module xss
{
    /**
     * 行为管理
     * 如旋转，自由掉落
     */
    export class ActionManager extends egret.Sprite
    {
        constructor()
        {
            super();
        }


        /**
         * 道具本身旋转动作 参数，0：自身旋转360度
         *  1：自定义设置角度
         * */
        public doRotation(tartget:any,type:number = 0,angle:number = 360)
        {

            tartget.anchorX = 0.5;
            tartget.anchorY = 0.5;

            tartget.x += tartget.width * 0.5;
            tartget.y += tartget.height * 0.5;

            if( type == 0)
            {
                egret.Tween.get(tartget,{loop:true}).to({rotation:angle},1000);
            }
            else if( type == 1 )
            {
                tartget.rotation = angle;
            }
        }
    }
}