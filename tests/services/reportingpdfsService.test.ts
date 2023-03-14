process.env.NODE_ENV = 'test'

import { expect } from "chai";
import { reportingpdfsService } from "../../src/services";
import { db } from '../../src/config/connection/database';
import reportingpdfs from "../../src/models/reportingpdfs.model";
import * as Kafka from "../../src/config/stream/kafka";

describe('reportingpdfsService Test', () => {

  before('Init', async() => {
    await db.sync({ force: true});
    reportingpdfs.create({
      id: 1,
      name: 'test',
      createdAt: '2020-01-01',
      updatedAt: '2020-01-01'
    });
    reportingpdfs.create({
      id: 2,
      name: 'test2',
      createdAt: '2020-01-01',
      updatedAt: '2020-01-01'
    });

    //Para lanzar pruebas con kafka
    // let topics = [
    //   'pruebas',
    //   'test'
    // ];
    // try{
    //     await Kafka.init(topics);
    //     console.log('Connected to Kafka');

    // }catch(err){
    //     console.log('Error', err);
    // }
  });

  describe('FindAll', async() => {
    it('should return one user', async () => {
      const reportingpdfs: any[] = await reportingpdfsService.findAll();
      expect(2).equal(reportingpdfs.length);
    });
  });

});