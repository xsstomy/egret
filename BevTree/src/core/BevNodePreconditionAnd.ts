class BevNodePreconditionAnd extends BevNodePrecondition {
    public constructor(lCondition: BevNodePrecondition, rCondition: BevNodePrecondition) {
        super();
        this._lCondition = lCondition;
        this._rCondition = rCondition;
    }

    private _lCondition: BevNodePrecondition;
    private _rCondition: BevNodePrecondition;

    externalCondition(input: BevNodeInputParam) {
        return this._lCondition.externalCondition(input) && this._rCondition.externalCondition(input);
    }
}