const stageWidth = 640;
const stageHeight = 1136;

class DrawObject extends egret.Sprite {
    public constructor() {
        super();
        this.bodyColor = parseInt(Math.floor(0xffffff).toString(16), 16);
        this.bodySize = 50;
        this.input = new BevNodeInputParam();
        this.output = new BevNodeOutputParam();
        this.targetPosition = new egret.Point(Math.floor(Math.random() * stageWidth), Math.floor(Math.random() * stageHeight));
        this.nextPosition = new egret.Point(Math.floor(Math.random() * stageWidth), Math.floor(Math.random() * stageHeight));
        this.x = this.nextPosition.x;
        this.y = this.nextPosition.y;

    }

    bodyColor: number;
    bodySize: number;
    bevNodeRoot: BevNode;
    input: BevNodeInputParam;
    output: BevNodeOutputParam;
    targetPosition: egret.Point;
    nextPosition: egret.Point;

    public create() {
        let rootNode = BevNodeFactory.createPrioritySelectorNode(null, 'root');
        let pNode = BevNodeFactory.createParallelNode(rootNode, ParallelFinishCondition.PFC_OR, 'parallel');
        pNode.setNodePrecondition(new BevNodePreconditionNot(new HasReachedTarget()));
        let sq = BevNodeFactory.createSequenceNode(pNode, 'sequence');

        BevNodeFactory.createTerminalNode(NodeFaceTo, sq, 'faceTo').
            setNodePrecondition(new BevNodePreconditionTrue());
        BevNodeFactory.createTerminalNode(NodeMoveTo, sq, 'moveTo').
            setNodePrecondition(new HasFacedTarget());
        BevNodeFactory.createTerminalNode(NodeBreathe, pNode, 'breathe').
            setNodePrecondition(new BevNodePreconditionTrue());
        BevNodeFactory.createTerminalNode(NodeIdle, rootNode, 'idle').
            setNodePrecondition(new BevNodePreconditionTrue());
        this.bevNodeRoot = rootNode;
    }

    public tick(timeStep) {
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
    }
}