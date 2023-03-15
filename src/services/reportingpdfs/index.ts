import { ReponseObject } from '../../commons/Response/ResponseObject';
import { RawMaterialRequestDetailTO } from '../../to/RawMaterialRequestDetailTO';
import reportingpdfsService from './service';

/**
 * @export
 * @returns {Promise < any[] >}
 */
export async function findAll(): Promise < any[] > {
    return await reportingpdfsService.findAll();
}

/**
 * @export
 * @returns {Promise < any[] >}
 */
export async function generatePDF(data: RawMaterialRequestDetailTO[]): Promise < ReponseObject > {
    return await reportingpdfsService.generatePDF(data);
}