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

        /**
         * 最高限制速度
         * @type {number}
         */
        speedLimit:number = 5;
        /**
         * X轴加速度
         * @type {number}
         */
        accelerationX:number = 0;
        /**
         * y轴加速度
         * @type {number}
         */
        accelerationY:number = 0;
        /**
         * x 轴移动速度
         * @type {number}
         */
        vx:number = 0;
        /**
         * y 轴移动速度
         * @type {number}
         */
        vy:number = 0;

        /**
         * 摩擦系数
         * @type {number}
         */
        friction:number = 0.96;
        /**
         * 反弹系数
         * @type {number}
         */
        bounce:number = -0.7;
        /**
         * 重力系数
         * @type {number}
         */
        gravity:number = 0.3;
        /**
         * 是否到达地面
         * @type {boolean}
         */
        isOnGround:boolean = false;
        /**
         * 默认跳的时候初速度
         * @type {number}
         */
        jumpForce:number = -10;
        private init()
        {
            this.addChild(new egret.Bitmap(RES.getRes("heroImage")));
        }
    }
}