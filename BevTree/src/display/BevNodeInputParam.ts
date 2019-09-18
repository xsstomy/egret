class BevNodeInputParam {
    private _timeStep: number;
    public get timeStep() {
        return this._timeStep;
    }
    public set timeStep(value) {
        this._timeStep = value;
    }

    private _targetPosition: egret.Point;
    public get targetPosition(): egret.Point {
        return this._targetPosition;
    }
    public set targetPosition(value: egret.Point) {
        this._targetPosition = value;
    }

    private _owner: egret.DisplayObjectContainer;
    public get owner(): egret.DisplayObjectContainer {
        return this._owner;
    }
    public set owner(value: egret.DisplayObjectContainer) {
        this._owner = value;
    }

    private _currFacing;
    public get currFacing() {
        return this._currFacing;
    }
    public set currFacing(value) {
        this._currFacing = value;
    }
}