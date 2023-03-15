import { ReponseObject } from "../../commons/Response/ResponseObject";
import { RawMaterialRequestDetailTO } from "../../to/RawMaterialRequestDetailTO";

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
    generatePDF(data: RawMaterialRequestDetailTO[]): Promise<ReponseObject>;
}