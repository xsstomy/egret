/**
 * //转向，转向到某方向
 */

class NodeFaceTo extends BevNodeTerminal {
    public constructor(parentNode: BevNode, nodePrecondition: BevNodePrecondition = null) {
        super(parentNode, nodePrecondition);
    }

    doEnter(input: BevNodeInputParam) {

    }

    doExecute(input: BevNodeInputParam, output: BevNodeOutputParam) {
        let currPos = new egret.Point(input.owner.x, input.owner.y);
        let targetPos = input.targetPosition;
        const disX = Math.abs(targetPos.x - currPos.x);
        const disY = Math.floor(targetPos.y - currPos.y);
        const disLength = disY * disY + disX * disX;
        if (Math.sqrt(disLength) < 1) {
            return BevRunningStatus.BRS_Finish;
        } else {
            let angle = input.owner.rotation;
            let disAngle = Math.floor(Math.asin(disY / disLength) / (2 * Math.PI) * 360);

            if (Math.abs(angle - disAngle) > 1) {
                input.owner.rotation = disAngle;
            }
        }
        return BevRunningStatus.BRS_Finish;
    }
}