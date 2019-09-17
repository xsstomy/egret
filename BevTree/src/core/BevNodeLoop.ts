/**
 * 循环节点
 * 预设的循环次数到了就返回False，否则，只调用第一个子节点的Evaluate方法，用它所返回的值作为自身的值返回
 */
class BevNodeLoop extends BevNode {
    public constructor(parentNode: BevNode, nodePrecondition: BevNodePrecondition = null, loopCount: number = BevNodeLoop.infiniteLoop) {
        super(parentNode, nodePrecondition);
        this.loopCount = loopCount;
        this.currentCount = 0;

    }

    protected loopCount: number;
    protected currentCount: number;
    static infiniteLoop: number = -1;

    doEvaluate(input: BevNodeInputParam) {
        let checkLoopCount = (this.loopCount == BevNodeLoop.infiniteLoop) || (this.currentCount < this.loopCount);

        if (!checkLoopCount) {
            return false;
        }

        if (this.checkIndex(0)) {
            let childNode = this.childNodeList[0];
            if (childNode.evaluate(input)) {
                return true;
            }
        }

        return false;
    }

    doTransition(input: BevNodeInputParam) {
        if (this.checkIndex(0)) {
            let childNode = this.childNodeList[0];
            childNode.doTransition(input);
        }
        this.currentCount = 0;
    }

    doTick(input: BevNodeInputParam, output: BevNodeOutputParam) {

        let isFinish = BevRunningStatus.BRS_Finish;

        if (this.checkIndex(0)) {
            let childNode = this.childNodeList[0];

            isFinish = childNode.tick(input, output);

            if (isFinish == BevRunningStatus.BRS_Finish) {
                if (this.loopCount != BevNodeLoop.infiniteLoop) {
                    this.currentCount++;
                    if (this.currentCount == this.loopCount) {
                        isFinish = BevRunningStatus.BRS_Executing;
                    }
                } else {
                    isFinish = BevRunningStatus.BRS_Executing;
                }

            }
        }

        if (isFinish) {
            this.currentCount = 0;
        }

        return BevRunningStatus.BRS_Finish;
    }
}