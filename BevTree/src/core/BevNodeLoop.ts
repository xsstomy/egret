/**
 * 循环节点
 * 预设的循环次数到了就返回False，否则，只调用第一个子节点的Evaluate方法，用它所返回的值作为自身的值返回
 */
class BevNodeLoop extends BevNode {
    public constructor(parentNode: BevNode, nodePrecondition: BevNodePrecondition = null, loopCount: number = -1) {
        super(parentNode, nodePrecondition);
        this.loopCount = loopCount;
        this.currentCount = 0;

    }

    protected loopCount: number;
    protected currentCount: number;

    doEvaluate(input: BevNodeInputParam) {

    }

    doTransition(input: BevNodeInputParam) {

    }

    doTick(input: BevNodeInputParam, output: BevNodeOutputParam) {

    }
}