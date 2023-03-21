/**
 * @export
 * @class ReportDataTO
 *
 * @swagger
 * components:
 *  schemas:
 *    Error:
 *      type: object
 *      properties:
 *        errorCode:
 *          type: string
 *          description: Código de error de negocio
 *          example: 10
 *        errorMessage:
 *          type: string
 *          description: Error de sistema
 *          example: Null pointer
 *        userError:
 *          type: string
 *          description: Human readable error
 *          example: No se encontró información
 *        info:
 *          type: string
 *          description: Información sobre solución del error
 *          example: http://info.com
 */

import { OrderedProductsTo } from "./OrderedProductsTo";

export class ReportDataTO {
    requestNum: string;
    date: string;
    signatureApplicant: string;
    warehouseSignature: string;
    signatureApplicantName: string;
    azureContainerName: string;
    observations: string;
    filename: string;
    orderedProducts: OrderedProductsTo[];

    /**
     *
     */
    constructor(requestNum: string,
        date: string,
        signatureApplicant: string,
        warehouseSignature: string,
        signatureApplicantName: string,
        azureContainerName: string,
        observations: string,
        filename: string,
        orderedProducts: OrderedProductsTo[]) {
        this.requestNum = requestNum;
        this.date = date;
        this.signatureApplicant = signatureApplicant;
        this.warehouseSignature = warehouseSignature;
        this.signatureApplicantName = signatureApplicantName;
        this.orderedProducts = orderedProducts;
        this.azureContainerName = azureContainerName;
        this.observations = observations;
        this.filename = filename;
    }
}