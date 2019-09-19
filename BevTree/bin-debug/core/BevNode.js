var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
/**
 * 基础节点
 */
var MAX_CHILD_NODE_CNT = 16;
var InvalidChildNodeIndex = MAX_CHILD_NODE_CNT;
var BevNode = (function (_super) {
    __extends(BevNode, _super);
    function BevNode(parentNode, nodePrecondition) {
        if (nodePrecondition === void 0) { nodePrecondition = null; }
        var _this = _super.call(this) || this;
        _this.maxChildNodeCnt = MAX_CHILD_NODE_CNT;
        _this.childNodeCount = 0;
        _this.activeNode = null;
        _this.lastActiveNode = null;
        _this.nodePrecondition = null;
        _this.childNodeList = [];
        _this.debugName = 'UNNAMED';
        for (var i = 0; i < _this.maxChildNodeCnt; i++) {
            _this.childNodeList[i] = null;
        }
        _this.setParentNode(parentNode);
        _this.setNodePrecondition(nodePrecondition);
        return _this;
    }
    BevNode.prototype.setParentNode = function (parentNode) {
        this.parentNode = parentNode;
    };
    BevNode.prototype.setNodePrecondition = function (nodePrecondition) {
        this.nodePrecondition = nodePrecondition;
    };
    BevNode.prototype.setActiveNode = function (activeNode) {
        this.lastActiveNode = this.activeNode;
        this.activeNode = activeNode;
        if (this.parentNode != null) {
            this.parentNode.setActiveNode(activeNode);
        }
    };
    BevNode.prototype.setDebugName = function (debugName) {
        this.debugName = debugName;
    };
    BevNode.prototype.getDebugName = function () {
        return this.debugName;
    };
    BevNode.prototype.checkIndex = function (index) {
        return index >= 0 && index < this.childNodeCount;
    };
    BevNode.prototype.addChildNode = function (childNode) {
        this.childNodeList[this.childNodeCount++] = childNode;
        return this;
    };
    BevNode.prototype.transition = function (input) {
        this.doTransition(input);
    };
    BevNode.prototype.doTransition = function (input) {
    };
    BevNode.prototype.evaluate = function (input) {
        return (this.nodePrecondition == null || this.nodePrecondition.externalCondition(input)) && this.doEvaluate(input);
    };
    BevNode.prototype.doEvaluate = function (input) {
        return true;
    };
    BevNode.prototype.tick = function (input, output) {
        return this.doTick(input, output);
    };
    BevNode.prototype.doTick = function (input, output) {
        return BevRunningStatus.BRS_Finish;
    };
    return BevNode;
}(egret.DisplayObjectContainer));
__reflect(BevNode.prototype, "BevNode");
//# sourceMappingURL=BevNode.js.map