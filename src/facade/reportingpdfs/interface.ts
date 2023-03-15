import { ReponseObject } from "../../commons/Response/ResponseObject";
import { RawMaterialRequestDetailTO } from "../../to/RawMaterialRequestDetailTO";

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
     * @returns {Promise<any[]>}
     * @memberof IreportingpdfsFacade
     */
    generatePDF(data: RawMaterialRequestDetailTO[]): Promise<ReponseObject>;
}