import { type } from "os";
import { ReponseObject } from "../../commons/Response/ResponseObject";
import { IAzureService } from "./interface";
const { AbortController } = require('@azure/abort-controller');
import { BlobServiceClient, ContainerClient, StorageSharedKeyCredential } from "@azure/storage-blob";
const fs = require("fs");
const path = require("path");
import config from "../../config/env/index";

const ONE_MEGABYTE = 1024 * 1024;
const FOUR_MEGABYTES = 4 * ONE_MEGABYTE;
const ONE_MINUTE = 60 * 1000;
const aborter = AbortController.timeout(30 * ONE_MINUTE);

/**
 * @export
 * @implements {IAzureService}
 */
const azureService: IAzureService = {
    /**
     * @returns {Promise<ReponseObject>}
     * @memberof reportingpdfsFacade
     */
    async uploadFileAzure(pathFile: string, azureContainerName: string): Promise<ReponseObject> {        
        const credentials = new StorageSharedKeyCredential(config.azure.AzureAccountName, config.azure.AzureAccountKey);
        const blobServiceClient = new BlobServiceClient(`https://${config.azure.AzureAccountName}.blob.core.windows.net`, credentials);
        const containerClient = blobServiceClient.getContainerClient(azureContainerName);
        console.log("Containers:");
        await showContainerNames(aborter, blobServiceClient);
        await uploadLocalFile(aborter, containerClient, pathFile);
        console.log(`Local file "${pathFile}" is uploaded`);
        await showBlobNames(aborter, containerClient);
        let arrypath = pathFile.split("/");
        let filename = arrypath[arrypath.length-1];
        let res = new ReponseObject(""+containerClient.getBlockBlobClient(filename).url);
        return res;
    },
    /**
     * @returns {Promise<ReponseObject>}
     * @memberof reportingpdfsFacade
     */
    async uploadFileStreamAzure(pathFile: string, azureContainerName: string): Promise<ReponseObject> {
        console.log("type aborder: ", typeof(aborter));
        const credentials:StorageSharedKeyCredential = new StorageSharedKeyCredential(config.azure.AzureAccountName, config.azure.AzureAccountKey);
        const blobServiceClient = new BlobServiceClient(`https://${config.azure.AzureAccountName}.blob.core.windows.net`, credentials);
        const containerClient: ContainerClient = blobServiceClient.getContainerClient(azureContainerName);
        // console.log("Containers:");
        // await showContainerNames(aborter, blobServiceClient);
        await uploadStream(aborter, containerClient, pathFile);
        console.log(`Local file stream "${pathFile}" is uploaded`);
        await showBlobNames(aborter, containerClient);
        let arrypath = pathFile.split("/");
        let filename = arrypath[arrypath.length-1];
        let res = new ReponseObject(""+containerClient.getBlockBlobClient(filename).url);
        return res;
    }

}

async function showContainerNames(aborter:any, blobServiceClient:BlobServiceClient) {
    let iter = await blobServiceClient.listContainers(aborter);
    for await (const container of iter) {
        console.log(` - ${container.name}`);
    }
}

async function uploadLocalFile(aborter:any, containerClient:ContainerClient, filePath:string) {
    filePath = path.resolve(filePath);

    const fileName = path.basename(filePath);

    const blobClient = containerClient.getBlobClient(fileName);
    const blockBlobClient = blobClient.getBlockBlobClient();

    return await blockBlobClient.uploadFile(filePath, aborter);
}

async function uploadStream(aborter: any, containerClient: ContainerClient, filePath:any) {
    filePath = path.resolve(filePath);
  
    const fileName = path.basename(filePath);
  
    const blobClient = containerClient.getBlobClient(fileName);
    const blockBlobClient = blobClient.getBlockBlobClient();
  
    const stream = fs.createReadStream(filePath, {
      highWaterMark: FOUR_MEGABYTES,
    });
  
    const uploadOptions = {
      bufferSize: FOUR_MEGABYTES,
      maxBuffers: 5,
    };
  
    return await blockBlobClient.uploadStream(
      stream,
      uploadOptions.bufferSize,
      uploadOptions.maxBuffers,
      aborter);
  }

async function showBlobNames(aborter:any, containerClient:ContainerClient) {

    let iter = await containerClient.listBlobsFlat(aborter);
    for await (const blob of iter) {
        console.log(` - ${blob.name}`);
    }
}

export default azureService;