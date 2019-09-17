class BevNodeFactory {
    //并行节点
    public static createParallelNode(parentNode: BevNode, condition: BevNodePrecondition, debugName: string) {
        let p = new BevNodeParallel(parentNode, condition);
        this.createNodeCommon(p, parentNode, debugName);
        return p;
    }

    //优先级选择节点
    public static createPrioritySelectorNode(parentNode: BevNode, debugName: string) {
        let p = new BevNodePrioritySelector(parentNode);
        this.createNodeCommon(p, parentNode, debugName);
        return p;
    }

    // 无优先级选择节点
    public static createNonePrioritySelectorNode(parentNode: BevNode, debugName: string) {
        let p = new BevNodeNonePrioritySelector(parentNode);
        this.createNodeCommon(p, parentNode, debugName);
        return p;
    }

    //序列节点
    public static createSequenceNode(parentNode: BevNode, debugName: string) {
        let p = new BevNodeSequence(parentNode);
        this.createNodeCommon(p, parentNode, debugName);
        return p;
    }

    // 循环节点
    public static createLoopNode(parentNode: BevNode, debugName: string, loopCount: number) {
        let p = new BevNodeLoop(parentNode, null, loopCount);
        this.createNodeCommon(p, parentNode, debugName);
        return p;
    }

    //行为节点
    public static createTerminalNode(parentNode: BevNode, debugName: string) {
        let p = new BevNodeTerminal(parentNode);
        this.createNodeCommon(p, parentNode, debugName);
        return p;
    }

    private static createNodeCommon(meNode: BevNode, parentNode: BevNode, debugName: string) {
        if (parentNode) {
            parentNode.addChildNode(meNode);
            meNode.setDebugName(debugName);
        }
    }
}