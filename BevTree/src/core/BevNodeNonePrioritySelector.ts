/**
 * 不带优先级的选择节点
 */
class BevNodeNonePrioritySelector extends BevNodePrioritySelector {
    public constructor(parentNode: BevNode, nodePrecondition: BevNodePrecondition = null) {
        super(parentNode, nodePrecondition);

    }

    doEvaluate(input: BevNodeInputParam) {

        if (this.checkIndex(this.currSelectIndex)) {
            let childNode = this.childNodeList[this.currSelectIndex];
            if (childNode.evaluate(input)) {
                return true;
            }
        }

        return super.doEvaluate(input);
    }
}