class BevNodePreconditionFalse extends BevNodePrecondition {

    public constructor() {
        super();
    }

    public externalCondition(input: BevNodeInputParam) {
        return false;
    }
}