import { IreportingpdfsService } from "./interface";
import reportingpdfs from "../../models/reportingpdfs.model";
import * as Kafka from "../../config/stream/kafka"

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
    }
}

export default reportingpdfsService;