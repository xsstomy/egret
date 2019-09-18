/**
 * //空闲，表现是颜色不停变化
 */
class NodeIdle extends BevNodeTerminal {
    public constructor(parentNode: BevNode, nodePrecondition: BevNodePrecondition = null) {
        super(parentNode, nodePrecondition)

    }

    private waitingTime: number;

    doEnter(input: BevNodeInputParam) {
        this.waitingTime = 0.5;
    }

    doExecute(input: BevNodeInputParam, output: BevNodeOutputParam) {

        const timestep = input.timeStep;
        this.waitingTime -= timestep;

        if (this.waitingTime < 0) {
            output.bodyColor = parseInt(Math.floor(Math.random() * 0xffffff).toString(16), 16);
            return BevRunningStatus.BRS_Finish;
        }

        return BevRunningStatus.BRS_Executing;
    }
}