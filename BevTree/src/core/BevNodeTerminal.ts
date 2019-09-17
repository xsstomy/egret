/**
 * 行为节点
 */

//运行状态
enum BevRunningStatus {
    BRS_Executing = 0,
    BRS_Finish = 1,
    BRS_ERROR_Transition = -1,
};

// 行为状态
enum TerminationNodeStatus {
    TNS_Ready = 1,
    TNS_Running = 2,
    TNS_Finish = 3,
};

//并行状态
enum ParallelFinishCondition {
    PFC_OR = 1,
    PFC_AND = 2,
};

class BevNodeTerminal extends BevNode {
    public constructor(parentNode: BevNode, nodePrecondition: BevNodePrecondition = null) {
        super(parentNode, nodePrecondition);
        this.needExit = false;
        this.status = TerminationNodeStatus.TNS_Ready;
    }

    protected status;
    protected needExit: boolean;

    /**
     * 进入
     */
    doEnter(input: BevNodeInputParam) {

    }

    // 执行行为
    doExecute(input: BevNodeInputParam, output: BevNodeOutputParam) {
        return BevRunningStatus.BRS_Finish;
    }

    //退出
    doExit(input: BevNodeInputParam, exitId: BevRunningStatus) {

    }

    doTick(input: BevNodeInputParam, output: BevNodeOutputParam) {
        let isFinish = BevRunningStatus.BRS_Finish;

        if (this.status == TerminationNodeStatus.TNS_Ready) {
            this.doEnter(input);
            this.needExit = true;
            this.status = TerminationNodeStatus.TNS_Running;
            this.setActiveNode(this);
        }

        if (this.status == TerminationNodeStatus.TNS_Running) {
            isFinish = this.doExecute(input, output);
            this.setActiveNode(this);
            if (isFinish == BevRunningStatus.BRS_Finish || isFinish < 0) {
                this.status = TerminationNodeStatus.TNS_Finish;
            }
        }

        if (this.status == TerminationNodeStatus.TNS_Finish) {
            if (this.needExit) {
                this.doExit(input, isFinish);
            }

            this.status = TerminationNodeStatus.TNS_Ready;
            this.needExit = false;
            this.setActiveNode(null);
        }

        return isFinish;
    }

    doTransition(input: BevNodeInputParam) {

        if (this.needExit) {
            this.doExit(input, BevRunningStatus.BRS_ERROR_Transition);
        }

        this.setActiveNode(null);
        this.status = TerminationNodeStatus.TNS_Ready;
        this.needExit = false;
    }
}