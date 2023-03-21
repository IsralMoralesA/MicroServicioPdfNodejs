import { ReponseObject } from "../../commons/Response/ResponseObject";
import azureService from "./service";

/**
 * @export
 * @returns {Promise<ReponseObject>}
 */
export async function uploadFileAzure(pathFile: string, azureContainerName: string): Promise<ReponseObject> {
    return await azureService.uploadFileAzure(pathFile, azureContainerName);
}

/**
 * @export
 * @returns {Promise<ReponseObject>}
 */
export async function uploadFileStreamAzure(pathFile: string, azureContainerName: string): Promise<ReponseObject> {
    return await azureService.uploadFileAzure(pathFile, azureContainerName);
}