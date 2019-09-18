class BevNodePreconditionNot extends BevNodePrecondition {
    public constructor(lcondition: BevNodePrecondition) {
        super();
        this._lcondition = lcondition;
    }

    private _lcondition: BevNodePrecondition;

    externalCondition(input: BevNodeInputParam) {
        return !this._lcondition.externalCondition(input);
    }
}