/**
 * 基础节点
 */
const MAX_CHILD_NODE_CNT = 16;
const InvalidChildNodeIndex = MAX_CHILD_NODE_CNT;

class BevNode extends egret.DisplayObjectContainer {
    constructor(parentNode: BevNode, nodePrecondition: BevNodePrecondition = null) {
        super();
        this.childNodeCount = 0;
        this.activeNode = null;
        this.lastActiveNode = null;
        this.nodePrecondition = null;
        this.debugName = 'UNNAMED';
        for (let i = 0; i < this.maxChildNodeCnt; i++) {
            this.childNodeList[i] = null;
        }
        this.setParentNode(parentNode);
        this.setNodePrecondition(nodePrecondition);
    }

    maxChildNodeCnt: number = MAX_CHILD_NODE_CNT;
    protected childNodeList: BevNode[];
    protected parentNode: BevNode;
    protected activeNode: BevNode;
    protected lastActiveNode: BevNode;
    protected debugName: string;
    protected childNodeCount: number;
    protected nodePrecondition: BevNodePrecondition;
    setParentNode(parentNode: BevNode) {
        this.parentNode = parentNode;
    }

    setNodePrecondition(nodePrecondition) {
        this.nodePrecondition = nodePrecondition;
    }

    setActiveNode(activeNode: BevNode) {
        this.lastActiveNode = this.activeNode;
        this.activeNode = activeNode;
        if (this.parentNode != null) {
            this.parentNode.setActiveNode(activeNode);
        }
    }

    setDebugName(debugName: string) {
        this.debugName = debugName;
    }

    getDebugName(): string {
        return this.debugName;
    }

    checkIndex(index: number): boolean {
        return index >= 0 && index < this.childNodeCount;

    }

    addChildNode(childNode: BevNode) {
        this.childNodeList[this.childNodeCount++] = childNode;
        return this;
    }

    transition(input: BevNodeInputParam) {
        this.doTransition(input);
    }

    doTransition(input: BevNodeInputParam) {

    }

    evaluate(input: BevNodeInputParam) {
        return (this.nodePrecondition == null || this.nodePrecondition.externalCondition()) && this.doEvaluate(input);
    }

    doEvaluate(input: BevNodeInputParam) {
    }

    tick(input: BevNodeInputParam, output: BevNodeOutputParam) {
        this.doTick(input, output);
    }

    doTick(input: BevNodeInputParam, output: BevNodeOutputParam) {

    }
}