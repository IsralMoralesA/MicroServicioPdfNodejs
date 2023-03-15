import { IreportingpdfsService } from "./interface";
import reportingpdfs from "../../models/reportingpdfs.model";
import * as Kafka from "../../config/stream/kafka"
import { ReponseObject } from "../../commons/Response/ResponseObject";
import { RawMaterialRequestDetailTO } from "../../to/RawMaterialRequestDetailTO";

/**
 * @export
 * @implements {IreportingpdfsModelService}
 */
const reportingpdfsService: IreportingpdfsService = {
    /**
     * @returns {Promise < any[] >}
     * @memberof reportingpdfsFacade
     */
    async findAll(): Promise<any[]> {
        // Para enviar un mensaje a kafka
        // await Kafka.send("test", 'Hello');
        return reportingpdfs.findAll();
    },
    /**
     * @returns {Promise < any[] >}
     * @memberof reportingpdfsFacade
     */
    async generatePDF(data: RawMaterialRequestDetailTO[]): Promise<ReponseObject> {
        let response = new ReponseObject("Urls: .------." + data);
        return response;
    }
}

export default reportingpdfsService;