
/**
 * 并行节点
 * 依次调用所有的子节点的Evaluate方法，若所有的子节点都返回True，则自身也返回True，否则，返回False
 */

class BevNodeParallel extends BevNode {
    public constructor(parentNode: BevNode, nodePrecondition: BevNodePrecondition = null) {
        super(parentNode, nodePrecondition);
        this.finishCondition = ParallelFinishCondition.PFC_OR;
        this.childNodeStatus = [];
        for (let i = 0; i < MAX_CHILD_NODE_CNT; i++) {
            this.childNodeStatus[i] = BevRunningStatus.BRS_Executing;
        }
    }

    finishCondition;
    childNodeStatus: BevRunningStatus[];

    doEvaluate(input: BevNodeInputParam) {

        for (let i = 0; i < this.childNodeCount; ++i) {
            let childNode = this.childNodeList[i];
            if (this.childNodeStatus[i] == 0) {
                if (!childNode.evaluate(input)) {
                    return false;
                }
            }
        }

        return true;
    }

    doTransition(input: BevNodeInputParam) {
        for (let i = 0; i < this.maxChildNodeCnt; ++i) {
            this.childNodeStatus[i] = BevRunningStatus.BRS_Executing;
        }

        for (let i = 0; i < this.childNodeCount; ++i) {
            let childNode = this.childNodeList[i];
            childNode.doTransition(input);
        }
    }

    doTick(input: BevNodeInputParam, output: BevNodeOutputParam) {
        let finishedChildCount = 0;

        for (let i = 0; i < this.childNodeCount; ++i) {
            let childNode = this.childNodeList[i];
            if (this.finishCondition == ParallelFinishCondition.PFC_OR) {

                if (this.childNodeStatus[i] == BevRunningStatus.BRS_Executing) {
                    this.childNodeStatus[i] = childNode.tick(input, output);

                } else if (this.childNodeStatus[i] != BevRunningStatus.BRS_Executing) {
                    for (let i = 0; i < this.maxChildNodeCnt; ++i) {
                        this.childNodeStatus[i] = BevRunningStatus.BRS_Executing;
                    }

                    return BevRunningStatus.BRS_Finish;
                }
            } else if (this.finishCondition == ParallelFinishCondition.PFC_AND) {

                if (this.childNodeStatus[i] == BevRunningStatus.BRS_Executing) {
                    this.childNodeStatus[i] = childNode.tick(input, output);

                } else {
                    finishedChildCount++;
                }

            } else {
                console.warn('BevNodeParallel errorFunc')
            }
        }

        if (finishedChildCount == this.childNodeCount) {
            for (let i = 0; i < this.maxChildNodeCnt; ++i) {
                this.childNodeStatus[i] = BevRunningStatus.BRS_Executing;
            }
            return BevRunningStatus.BRS_Finish;
        }

        return BevRunningStatus.BRS_Executing;
    }

    setFinishCondition(condition: ParallelFinishCondition) {
        this.finishCondition = condition;
        return this;
    }
}