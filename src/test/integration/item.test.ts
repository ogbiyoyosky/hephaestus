import { expect } from 'chai';
import * as httpStatus from 'http-status';
import app from '../../config/express';
import 'mocha';
const request = require('supertest');
require('ts-mocha');

describe('USER', () => {

    const page = 1
    const perPage = 10

    describe('GET /items', () => {
        it('Should return all items from an external api', () => {
            return request(app)
                .get(`/items?page=${page}&perPage=&${perPage}`)
                .expect(httpStatus.OK)
                .then((res) => {
                    expect(res.body.results.results)
                        .to
                        .be
                        .an('array');

                    expect(res.body.results.results.length)
                        .to
                        .be
                        .equal(perPage)
                });
        });

    })

})
