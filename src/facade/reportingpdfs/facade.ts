import { reportingpdfsService } from "../../services";
import { IreportingpdfsFacade } from "./interface";


/**
 * @export
 * @implements {IreportingpdfsModelService}
 */
const reportingpdfsFacade: IreportingpdfsFacade = {
    /**
     * @returns {Promise < any[] >}
     * @memberof reportingpdfsFacade
     */
    async findAll(): Promise<any[]> {

        let reportingpdfs = await reportingpdfsService.findAll();
        return reportingpdfs;
    }
}

export default reportingpdfsFacade;