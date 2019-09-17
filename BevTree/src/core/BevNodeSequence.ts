/**
 * 序列节点
 */
class BevNodeSequence extends BevNode {
    public constructor(parentNode: BevNode, nodePrecondition: BevNodePrecondition = null) {
        super(parentNode, nodePrecondition);
        this.currNodeIndex = InvalidChildNodeIndex;
    }

    currNodeIndex: number;

    doEvaluate(input: BevNodeInputParam) {
        let testNodeIndex;
        if (this.currNodeIndex == InvalidChildNodeIndex) {
            testNodeIndex = 0;
        } else {
            testNodeIndex = this.currNodeIndex;
        }

        if (this.checkIndex(testNodeIndex)) {
            let childNode = this.childNodeList[testNodeIndex];
            if (childNode.evaluate(input)) {
                return true;
            }
        }

        return false;
    }

    doTransition(input: BevNodeInputParam) {

        if (this.checkIndex(this.currNodeIndex)) {
            let childNode = this.childNodeList[this.currNodeIndex];
            childNode.transition(input);
        }

        this.currNodeIndex = InvalidChildNodeIndex;
    }

    doTick(input: BevNodeInputParam, output: BevNodeOutputParam) {
        let isFinish = BevRunningStatus.BRS_Finish;

        if (this.currNodeIndex == InvalidChildNodeIndex) {
            this.currNodeIndex = 0;
        }

        let childNode = this.childNodeList[this.currNodeIndex];
        isFinish = childNode.tick(input, output);
        if (isFinish == BevRunningStatus.BRS_Finish) {
            ++this.currNodeIndex;

            if (this.currNodeIndex == this.childNodeCount) {
                this.currNodeIndex = InvalidChildNodeIndex;
            } else {
                isFinish = BevRunningStatus.BRS_Executing;
            }
        }

        if (isFinish < 0) {
            this.currNodeIndex = InvalidChildNodeIndex;
        }

        return isFinish;
    }
}