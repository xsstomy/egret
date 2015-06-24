/**
 * Created by xiashishi on 15/6/18.
 */
module xss
{
    /**
     * 静态方法，计算判断重叠
     *
     */
    export class Collision
    {
        /**
         * 记录目标相对于主角的位置
         */
        static collisionSide:string;

        /**
         * 判断两者是否碰撞，碰撞了不能出现重叠，自动归位
         * @param target1 主角
         * @param target2  目标
         */
        static block(target1:egret.Sprite , target2:egret.Sprite)
        {
            //计算矢量距离
            var vx:number = (target1.x + target1.width * 0.5) - (target2.x + target2.width * 0.5);
            var vy:number = (target1.y + target1.height * 0.5) - (target2.y + target2.height * 0.5);

            //检查vx 是否小于宽度之和
            if(Math.abs(vx) < (target1.width + target2.width) * 0.5)
            {
                //检查vy 是否小于高度之和
                if(Math.abs(vy) < ( target1.height + target2.height ) * 0.5)
                {
                    //发生碰撞，找出重叠的尺寸
                    var overX:number = (target1.width + target2.width) * 0.5 - Math.abs(vx);

                    var overY:number = (target1.height + target2.height ) * 0.5 - Math.abs(vy);

                    // 找出是那个方向
                    if( overX >= overY )
                    {
                        //碰撞发生在X轴

                        if(vy > 0)
                        {
                            //主角在目标的下侧
                            //this.collisionSide = "Top";
                            this.collisionSide = CollisionSide.TOP;
                            //将矩形移出碰撞区域
                            target1.y = target1.y + overY;
                        }
                        else
                        {
                            //主角在目标的上侧
                            //this.collisionSide = "Bottom";
                            this.collisionSide = CollisionSide.BOTTOM;
                            target1.y = target1.y - overY;
                        }
                    }
                    else
                    {
                        //碰撞发生在y轴
                        if(vx > 0)
                        {
                            //主角在目标的右侧
                            //this.collisionSide = "Left";
                            this.collisionSide = CollisionSide.LEFT;
                            target1.x = target1.x + overX;
                        }
                        else
                        {
                            //主角在目标的左侧
                            //this.collisionSide = "Right";
                            this.collisionSide = CollisionSide.RIGHT;
                            target1.x = target1.x - overX;
                        }
                    }
                }
                else
                {
                    this.collisionSide = "No collision";
                }
            }
            else
            {
                this.collisionSide = "No collision";
            }
        }

        /**
         * 检测碰撞
         * @param target1
         * @param target2
         * @returns {boolean}
         */
        static hitTest(target1:any,target2:any):boolean
        {

            var t1x:number = target1.x + target1.width*0.5;
            var t1y:number = target1.y + target1.height*0.5;
            var t2x:number = target2.x + target2.width*0.5;
            var t2y:number = target2.y + target2.height*0.5;

            var dx:number = Math.abs( t1x - t2x );
            var dy:number = Math.abs( t1y - t2y );

            if( dx < Math.abs( target1.width*0.5 + target2.width*0.5 ) && dy < Math.abs( target1.height*0.5 + target2.height*0.5))
                return true;
            return false;
        }
    }
}