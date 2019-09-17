class NODIdle extends BevNodeTerminal {
    public constructor(parentNode: BevNode, nodePrecondition: BevNodePrecondition = null) {
        super(parentNode, nodePrecondition)

    }

    private waitingTime: number;

    doEnter(input: BevNodeInputParam) {
        this.waitingTime = 0.5;
    }

    doExit(input: BevNodeInputParam) {

        const timestep = 0.1;
        this.waitingTime -= timestep;

        if (this.waitingTime < 0) {
            return BevRunningStatus.BRS_Finish;
        }

        return BevRunningStatus.BRS_Executing;
    }
}