import { ReponseObject } from "../../commons/Response/ResponseObject";

/**
 * @export
 * @interface IAzureService
 */
export interface IAzureService {

    /**
     * @returns {string>}
     * @memberof IAzureService
     */
    uploadFileAzure(pathFile: string, azureContainerName: string): Promise<ReponseObject>;

    /**
     * @returns {string>}
     * @memberof IAzureService
     */
    uploadFileStreamAzure(pathFile: string, azureContainerName: string): Promise<ReponseObject>;
    
}