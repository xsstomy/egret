/**
 * 不带优先级的选择节点
 */
class BevNodeNonePrioritySelector extends BevNodePrioritySelector {
    public constructor(parentNode: BevNode, nodePrecondition: BevNodePrecondition = null) {
        super(parentNode, nodePrecondition);

    }

    doEvaluate(input: BevNodeInputParam) {

    }
}