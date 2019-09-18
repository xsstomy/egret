class BevNodeOutputParam {
    private _bodyColor: number;
    public get bodyColor(): number {
        return this._bodyColor;
    }
    public set bodyColor(value: number) {
        this._bodyColor = value;
    }

    private _bodySize;
    public get bodySize() {
        return this._bodySize;
    }
    public set bodySize(value) {
        this._bodySize = value;
    }

    private _nextPosition: egret.Point;
    public get nextPosition(): egret.Point {
        return this._nextPosition;
    }
    public set nextPosition(value: egret.Point) {
        this._nextPosition = value;
    }

    private _nextFacing;
    public get nextFacing() {
        return this._nextFacing;
    }
    public set nextFacing(value) {
        this._nextFacing = value;
    }
}