class HasFacedTarget extends BevNodePrecondition {
    public externalCondition(input: BevNodeInputParam) {

        let currPos = new egret.Point(input.owner.x, input.owner.y);
        let targetPos = input.targetPosition;
        const disX = Math.abs(targetPos.x - currPos.x);
        const disY = Math.abs(targetPos.y - currPos.y);
        const disLength = Math.sqrt(disY * disY + disX * disX);
        if (disLength <= 1) {
            return true;
        } else {
            let angle = input.owner.rotation;
            let disAngle = Math.asin(disY / disLength) / (2 * Math.PI) * 360;

            if (Math.abs(angle - disAngle) <= 1) {
                return true;
            }
        }
        return false;
    }
}