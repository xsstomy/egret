/**
 * 带优先级的选择节点
 */

class BevNodePrioritySelector extends BevNode {
    public constructor(parentNode: BevNode, nodePrecondition: BevNodePrecondition = null) {
        super(parentNode, nodePrecondition);
        this.currSelectIndex = InvalidChildNodeIndex;
        this.lastSelectIndex = InvalidChildNodeIndex;
    }

    currSelectIndex: number;
    lastSelectIndex: number;

    doEvaluate(input: BevNodeInputParam) {
        this.currSelectIndex = InvalidChildNodeIndex;
        for (let i = 0; i < this.childNodeCount; ++i) {
            let childNode = this.childNodeList[i];
            if (childNode.evaluate(input)) {
                this.currSelectIndex = i;
                return true;
            }
        }
        return false;
    }

    doTransition(input: BevNodeInputParam) {
        if (this.checkIndex(this.lastSelectIndex)) {
            let childNode = this.childNodeList[this.lastSelectIndex];
            childNode.transition(input);
        }
        this.lastSelectIndex = InvalidChildNodeIndex;
    }

    doTick(input: BevNodeInputParam, output: BevNodeOutputParam) {
        let isFinish = BevRunningStatus.BRS_Finish;
        if (this.checkIndex(this.currSelectIndex)) {
            if (this.lastSelectIndex != this.currSelectIndex) {
                if (this.checkIndex(this.lastSelectIndex)) {
                    let childNode = this.childNodeList[this.lastSelectIndex];
                    childNode.transition(input)
                }
                this.lastSelectIndex = this.currSelectIndex;
            }
        }

        if (this.checkIndex(this.lastSelectIndex)) {
            let childNode = this.childNodeList[this.lastSelectIndex];
            isFinish = childNode.tick(input, output);
            if (isFinish) {
                this.lastSelectIndex = InvalidChildNodeIndex;
            }
        }

        return isFinish;
    }
}