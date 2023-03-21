import { ReponseObject } from "../../commons/Response/ResponseObject";
import { ReportDataTO } from "../../to/ReportDataTO";

/**
 * @export
 * @interface IreportingpdfsService
 */
export interface IreportingpdfsService {

    /**
     * @returns {Promise<any[]>}
     * @memberof IreportingpdfsService
     */
    findAll(): Promise<any[]>;

    /**
     * @returns {Promise<any[]>}
     * @memberof IreportingpdfsService
     */
    generatePDF(data: ReportDataTO): Promise<ReponseObject>;
}