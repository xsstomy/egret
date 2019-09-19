var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var stageWidth = 640;
var stageHeight = 1136;
var DrawObject = (function (_super) {
    __extends(DrawObject, _super);
    function DrawObject() {
        var _this = _super.call(this) || this;
        _this.bodyColor = parseInt(Math.floor(0xffffff).toString(16), 16);
        _this.bodySize = 50;
        _this.input = new BevNodeInputParam();
        _this.output = new BevNodeOutputParam();
        _this.targetPosition = new egret.Point(Math.floor(Math.random() * stageWidth), Math.floor(Math.random() * stageHeight));
        _this.nextPosition = new egret.Point(Math.floor(Math.random() * stageWidth), Math.floor(Math.random() * stageHeight));
        _this.x = _this.nextPosition.x;
        _this.y = _this.nextPosition.y;
        return _this;
    }
    DrawObject.prototype.create = function () {
        var rootNode = BevNodeFactory.createPrioritySelectorNode(null, 'root');
        var pNode = BevNodeFactory.createParallelNode(rootNode, ParallelFinishCondition.PFC_OR, 'parallel');
        pNode.setNodePrecondition(new BevNodePreconditionNot(new HasReachedTarget()));
        var sq = BevNodeFactory.createSequenceNode(pNode, 'sequence');
        BevNodeFactory.createTerminalNode(NodeFaceTo, sq, 'faceTo').
            setNodePrecondition(new BevNodePreconditionTrue());
        BevNodeFactory.createTerminalNode(NodeMoveTo, sq, 'moveTo').
            setNodePrecondition(new HasFacedTarget());
        BevNodeFactory.createTerminalNode(NodeBreathe, pNode, 'breathe').
            setNodePrecondition(new BevNodePreconditionTrue());
        BevNodeFactory.createTerminalNode(NodeIdle, rootNode, 'idle').
            setNodePrecondition(new BevNodePreconditionTrue());
        this.bevNodeRoot = rootNode;
    };
    DrawObject.prototype.tick = function (timeStep) {
        this.input.owner = this;
        this.input.timeStep = timeStep;
        this.output.bodySize = this.bodySize;
        this.output.bodyColor = this.bodyColor;
        this.output.nextPosition = this.nextPosition;
        this.input.targetPosition = this.targetPosition;
        if (this.bevNodeRoot.evaluate(this.input)) {
            this.bevNodeRoot.tick(this.input, this.output);
        }
        this.bodyColor = this.output.bodyColor;
        this.bodySize = this.output.bodySize;
        this.graphics.clear();
        this.graphics.beginFill(this.bodyColor, 1);
        this.graphics.drawRect(0, 0, this.bodySize, this.bodySize);
        this.graphics.endFill();
        console.log('x', this.x, 'y', this.y, 'targetPositionX', this.targetPosition.x, 'targetPositionY', this.targetPosition.y);
    };
    return DrawObject;
}(egret.Sprite));
__reflect(DrawObject.prototype, "DrawObject");
//# sourceMappingURL=DrawObject.js.map