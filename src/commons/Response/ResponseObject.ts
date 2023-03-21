/**
 * @export
 * @class ReponseObject
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

export class ReponseObject {
    msg: string;

    /**
     *
     */
    constructor(msg: string) {
        this.msg = msg;
    }
}