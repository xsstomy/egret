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
        static collisionSide:string = "";


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
                            //并且下侧
                            this.collisionSide = "Top";

                            //将矩形移出碰撞区域
                            target1.y = target1.y + overY;
                        }
                        else
                        {
                            //并且上侧
                            this.collisionSide = "Bottom";
                            target1.y = target1.y - overY;
                        }
                    }
                    else
                    {
                        //碰撞发生在y轴
                        if(vx > 0)
                        {
                            this.collisionSide = "Left";
                            target1.x = target1.x + overX;
                        }
                        else
                        {
                            this.collisionSide = "Right";
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
    }
}