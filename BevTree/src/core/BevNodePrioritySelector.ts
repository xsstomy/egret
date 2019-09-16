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

    }

    doTransition(input: BevNodeInputParam) {

    }

    doTick(input: BevNodeInputParam, output: BevNodeOutputParam) {

    }
}