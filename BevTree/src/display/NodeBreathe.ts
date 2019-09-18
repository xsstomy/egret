/**
 * //呼吸，表现是大小规律性变化
 */

class NodeBreathe extends BevNodeTerminal {
    public constructor(parentNode: BevNode, nodePrecondition: BevNodePrecondition = null) {
        super(parentNode, nodePrecondition);
        this._isIncreasing = false;
    }

    private _isIncreasing: boolean;

    doExecute(input: BevNodeInputParam, output: BevNodeOutputParam) {

        const timestep = input.timeStep;
        const maxBodySize = 12;
        const minBodySize = 10;
        const size = 10;
        if (this._isIncreasing) {
            output.bodySize += (timestep * size);
            if (output.bodySize > maxBodySize) {
                output.bodySize = maxBodySize;
                this._isIncreasing = false;
            }
        } else {
            output.bodySize -= (timestep * size);
            if (output.bodySize < minBodySize) {
                output.bodySize = minBodySize;
                this._isIncreasing = true;
            }
        }

        return BevRunningStatus.BRS_Executing;
    }


}