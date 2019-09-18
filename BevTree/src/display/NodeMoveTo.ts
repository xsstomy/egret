/**
 * //移动，平移到某目标点
 */
class NodeMoveTo extends BevNodeTerminal {
    public constructor(parentNode: BevNode, nodePrecondition: BevNodePrecondition = null) {
        super(parentNode, nodePrecondition);
    }

    doExecute(input: BevNodeInputParam, output: BevNodeOutputParam) {
        const distance = 10;
        let currPos = new egret.Point(input.owner.x, input.owner.y);
        let targetPos = input.targetPosition;
        const lengthX = targetPos.x - currPos.x;
        const lengthY = targetPos.y - currPos.y;
        const length = lengthY * lengthY + lengthX * lengthX;
        if (Math.sqrt(length) < distance) {
            output.nextPosition = input.targetPosition;

            return BevRunningStatus.BRS_Finish;
        } else {
            let disX = Math.floor(distance * Math.sin(input.owner.rotation / 360 * 2 * Math.PI));
            let disY = Math.floor(distance * Math.cos(input.owner.rotation / 360 * 2 * Math.PI));
            let nextX;
            let nextY;
            if (lengthX > 0 && lengthY > 0) {
                nextX = input.owner.x - disX;
                nextY = input.owner.y - disY;
            }

            if (lengthX > 0 && lengthY < 0) {
                nextX = input.owner.x - disX;
                nextY = input.owner.y + disY;
            }

            if (lengthX < 0 && lengthY > 0) {
                nextX = input.owner.x + disX;
                nextY = input.owner.y - disY;
            }

            if (lengthX < 0 && lengthY < 0) {
                nextX = input.owner.x + disX;
                nextY = input.owner.y + disY;
            }

            input.owner.x = nextX;
            input.owner.y = nextY;

            output.nextPosition = new egret.Point(nextX, nextY);
        }

        return BevRunningStatus.BRS_Executing;
    }
}