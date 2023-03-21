import { ReponseObject } from "../../commons/Response/ResponseObject";
import { ReportDataTO } from "../../to/ReportDataTO";

/**
 * @export
 * @interface IreportingpdfsFacade
 */
export interface IreportingpdfsFacade {

    /**
     * @returns {Promise<any[]>}
     * @memberof IreportingpdfsFacade
     */
    findAll(): Promise<any[]>;

    /**
     * @returns {Promise<ReponseObject>}
     * @memberof IreportingpdfsFacade
     */
    generatePDF(data: ReportDataTO): Promise<ReponseObject>;
}