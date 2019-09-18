class BevNodePreconditionTrue extends BevNodePrecondition {

    public constructor() {
        super();
    }

    public externalCondition(input: BevNodeInputParam) {
        return true;
    }
}