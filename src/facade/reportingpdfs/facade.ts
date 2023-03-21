import { ReponseObject } from "../../commons/Response/ResponseObject";
import { reportingpdfsService } from "../../services";
import { ReportDataTO } from "../../to/ReportDataTO";
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
    },
    /**
     * @returns {Promise < any[] >}
     * @memberof reportingpdfsFacade
     */
    async generatePDF(data: ReportDataTO): Promise<ReponseObject> {
                
        let response = await reportingpdfsService.generatePDF(data);
        return response;
    }

}

export default reportingpdfsFacade;