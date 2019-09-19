var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var BevNodeFactory = (function () {
    function BevNodeFactory() {
    }
    //并行节点
    BevNodeFactory.createParallelNode = function (parentNode, condition, debugName) {
        var p = new BevNodeParallel(parentNode);
        p.setFinishCondition(condition);
        this.createNodeCommon(p, parentNode, debugName);
        return p;
    };
    //优先级选择节点
    BevNodeFactory.createPrioritySelectorNode = function (parentNode, debugName) {
        var p = new BevNodePrioritySelector(parentNode);
        this.createNodeCommon(p, parentNode, debugName);
        return p;
    };
    // 无优先级选择节点
    BevNodeFactory.createNonePrioritySelectorNode = function (parentNode, debugName) {
        var p = new BevNodeNonePrioritySelector(parentNode);
        this.createNodeCommon(p, parentNode, debugName);
        return p;
    };
    //序列节点
    BevNodeFactory.createSequenceNode = function (parentNode, debugName) {
        var p = new BevNodeSequence(parentNode);
        this.createNodeCommon(p, parentNode, debugName);
        return p;
    };
    // 循环节点
    BevNodeFactory.createLoopNode = function (parentNode, debugName, loopCount) {
        var p = new BevNodeLoop(parentNode, null, loopCount);
        this.createNodeCommon(p, parentNode, debugName);
        return p;
    };
    //行为节点
    BevNodeFactory.createTerminalNode = function (t, parentNode, debugName) {
        var p = new t(parentNode);
        this.createNodeCommon(p, parentNode, debugName);
        return p;
    };
    BevNodeFactory.createNodeCommon = function (meNode, parentNode, debugName) {
        if (parentNode) {
            parentNode.addChildNode(meNode);
            meNode.setDebugName(debugName);
        }
    };
    return BevNodeFactory;
}());
__reflect(BevNodeFactory.prototype, "BevNodeFactory");
//# sourceMappingURL=BevNodeFactory.js.map