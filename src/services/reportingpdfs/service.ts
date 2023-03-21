import { IreportingpdfsService } from "./interface";
import reportingpdfs from "../../models/reportingpdfs.model";
import * as Kafka from "../../config/stream/kafka"
import { ReponseObject } from "../../commons/Response/ResponseObject";
import { type } from "os";
import azureService from "../azure/service";
import { ReportDataTO } from "../../to/ReportDataTO";
const html_to_pdf = require('html-pdf-node');
const file = require('fs');

const pdfsave = "./assets/pdf/";
const urltemplate = "./assets/template/Orden.html";
const urlheader = "./assets/template/header.html";
const urlfooter = "./assets/template/footer.html";
const hbs = require("handlebars");

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
    },
    /**
     * @returns {Promise < ReponseObject >}
     * @memberof reportingpdfsFacade
     */
    async generatePDF(data: ReportDataTO): Promise<ReponseObject> {
        let pathpdf = await generatePdf(data);
        // const responseAzure: ReponseObject = await azureService.uploadFileAzure(pathpdf,data.azureContainerName);
        const responseAzure: ReponseObject = await azureService.uploadFileStreamAzure(pathpdf,data.azureContainerName);
        file.unlinkSync(pathpdf);
        let response = new ReponseObject(responseAzure.msg);
        return response;
    }
}

const generatePdf = async(data: ReportDataTO) => {
    let patchFile = "";
    let info = file.readFileSync(urltemplate, { encoding: 'utf-8' });
    let header = file.readFileSync(urlheader, { encoding: 'utf-8' });
    let footer = file.readFileSync(urlfooter, { encoding: 'utf-8' });

    // footer template handlebars
    let footertemplate = hbs.compile(footer);

    // footer add data 
    let footerrender = footertemplate(data);

    // footer template handlebars
    let bodytemplate = hbs.compile(info);

    // footer add data 
    let bodyrrender = bodytemplate(data);

    let options = {
        path: pdfsave + data.filename,
        displayHeaderFooter: true,
        landscape: false,
        headerTemplate: header,
        footerTemplate: footerrender,
        margin: {
            top: 130,
            bottom: 400,
        },
        printBackground: true,
        preferCSSPageSize: true,
    };
    let text = { content: bodyrrender.toString() };
    await html_to_pdf.generatePdf(text, options);
    patchFile = pdfsave + data.filename;
    return patchFile;
}

export default reportingpdfsService;