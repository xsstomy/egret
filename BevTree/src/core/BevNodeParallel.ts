
/**
 * 并行节点
 * 依次调用所有的子节点的Evaluate方法，若所有的子节点都返回True，则自身也返回True，否则，返回False
 */

class BevNodeParallel extends BevNode {
    public constructor(parentNode: BevNode, nodePrecondition: BevNodePrecondition = null) {
        super(parentNode, nodePrecondition);
        for (let i = 0; i < MAX_CHILD_NODE_CNT; i++) {
            this.childNodeStatus[i] = BevRunningStatus.BRS_Executing;
        }
    }

    finishCondition;
    childNodeStatus: BevRunningStatus[];
}