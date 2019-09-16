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
enum TerminationNode {
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
        this.status = TerminationNode.TNS_Ready;
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

    doTransition(input: BevNodeInputParam) {

    }
}