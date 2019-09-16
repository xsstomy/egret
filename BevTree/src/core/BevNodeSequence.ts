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

    }

    doTransition(input: BevNodeInputParam) {

    }

    doTick(input: BevNodeInputParam, output: BevNodeOutputParam) {

    }
}