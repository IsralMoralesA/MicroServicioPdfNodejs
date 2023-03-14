process.env.NODE_ENV = 'test'

import { expect } from "chai";
import reportingpdfsFacade from '../../src/facade/reportingpdfs/facade';
import { db } from '../../src/config/connection/database';
import reportingpdfs from "../../src/models/reportingpdfs.model";
import * as Kafka from "../../src/config/stream/kafka";

describe('reportingpdfsFacade Test', () => {

    before('Init', async() => {
        await db.sync({ force: true});
        reportingpdfs.create({
        id: 1,
        name: 'test',
        createdAt: '2020-01-01',
        updatedAt: '2020-01-01'
        });

        //Para lanzar pruebas con kafka
        // let topics = [
        //     'pruebas',
        //     'test'
        // ];
        // try{
        //     await Kafka.init(topics);
        //     console.log('Connected to Kafka');

        // }catch(err){
        //     console.log('Error', err);
        // }
    });
  
    describe('FindAll', () => {
        it('should return one user', async () => {
            const reportingpdfs: any[] = await reportingpdfsFacade.findAll();
            expect(1).equal(reportingpdfs.length);
        });
    });
});