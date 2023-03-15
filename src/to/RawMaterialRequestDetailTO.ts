/**
 * @export
 * @class RawMaterialRequestDetailTO
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

export class RawMaterialRequestDetailTO {
    id: number;
    requestId: number;
    productId: string;
    unit: string;
    requestQuantity: number;
    warehouse: string;
    isLabel: boolean;

    /**
     *
     */
    constructor(id: number,
        requestId: number,
        productId: string,
        unit: string,
        requestQuantity: number,
        warehouse: string,
        isLabel: boolean) {
        this.id = id;
        this.requestId = requestId;
        this.productId = productId;
        this.unit = unit;
        this.requestQuantity = requestQuantity;
        this.warehouse = warehouse;
        this.isLabel = isLabel;
    }
}