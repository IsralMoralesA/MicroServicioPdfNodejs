import { ReponseObject } from '../../commons/Response/ResponseObject';
import { ReportDataTO } from '../../to/ReportDataTO';
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
export async function generatePDF(data: ReportDataTO): Promise < ReponseObject > {
    return await reportingpdfsService.generatePDF(data);
}