class HasReachedTarget extends BevNodePrecondition {
    public externalCondition(input: BevNodeInputParam) {

        let currPos = new egret.Point(input.owner.x, input.owner.y);
        let targetPos = input.targetPosition;
        const disX = Math.abs(currPos.x - targetPos.x);
        const disY = Math.abs(currPos.y - targetPos.y);
        const disLength = disY * disY + disX * disX;
        if (Math.sqrt(disLength) < 1) {
            return true;
        }

        return false;
    }
}