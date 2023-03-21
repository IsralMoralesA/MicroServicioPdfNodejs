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

export class OrderedProductsTo {
    orderFabId: number;
    productId: string;
    description: string;
    baseQuantity: number;
    requiredQuantity: number;
    consumed: number;
    available: number;
    unit: string;
    warehouse: string;
    pendingQuantity: number;
    stock: number;
    warehouseQuantity: number;
    hasBatches: boolean;
    isItemSelected: boolean;
    chips: [];
    id: number;
    requestQuantity: string;

    /**
     *
     */
    constructor(orderFabId: number,
        productId: string,
        description: string,
        baseQuantity: number,
        requiredQuantity: number,
        consumed: number,
        available: number,
        unit: string,
        warehouse: string,
        pendingQuantity: number,
        stock: number,
        warehouseQuantity: number,
        hasBatches: boolean,
        isItemSelected: boolean,
        chips: [],
        id: number,
        requestQuantity: string) {
            this.orderFabId=orderFabId;
            this.productId=productId;
            this.description=description;
            this.baseQuantity=baseQuantity;
            this.requiredQuantity=requiredQuantity;
            this.consumed=consumed;
            this.available=available;
            this.unit=unit;
            this.warehouse=warehouse;
            this.pendingQuantity=pendingQuantity;
            this.stock=stock;
            this.warehouseQuantity=warehouseQuantity;
            this.hasBatches=hasBatches;
            this.isItemSelected=isItemSelected;
            this.chips=chips
            this.id=id;
            this.requestQuantity=requestQuantity;
    }
}