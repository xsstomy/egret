class DrawObject extends egret.Sprite {
    public constructor() {
        super();
    }

    bodyColor: number;
    bodySize: number;
    bevNodeRoot: BevNode;
    input: BevNodeInputParam;
    output: BevNodeOutputParam;
    targetPosition: egret.Point;

    public tick() {

    }
}