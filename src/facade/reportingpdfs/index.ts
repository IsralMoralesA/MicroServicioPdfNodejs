import reportingpdfsFacade from './facade';
import { NextFunction, Request, Response } from 'express';
import HttpStatusCode from '../../commons/constants/HttpStatusCode';
import { ReponseObject } from '../../commons/Response/ResponseObject';

/**
 * @export
 * @param {Request} req
 * @param {Response} res
 * @param {NextFunction} next
 * @returns {Promise < void >}
 */
export async function findAll(req: Request, res: Response, next: NextFunction): Promise < void > {
    try {
        const reportingpdfs: any[] = await reportingpdfsFacade.findAll();
        res.status(HttpStatusCode.OK).json(reportingpdfs);
    } catch (error) {
        next(error);
    }
}

/**
 * @export
 * @param {Request} req
 * @param {Response} res
 * @param {NextFunction} next
 * @returns {Promise < void >}
 */
export async function pdfgenerator(req: Request, res: Response, next: NextFunction): Promise < void > {
    try {
        const body = req.body;        
        const reportingpdfs: ReponseObject = await reportingpdfsFacade.generatePDF(body);
        res.status(HttpStatusCode.OK).json(reportingpdfs);
    } catch (error) {
        next(error);
    }
}