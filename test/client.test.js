const app = require('../src/app');
const request = require('supertest');

describe('Client API', () => {
    describe('GET /clients', () => {
        test('should return all clients', async () => {
            const response = await request(app).get('/api/clients').send();
            expect(response.statusCode).toBe(200);
            expect(response.body).toBeInstanceOf(Array);
        });
    });

    describe('POST /clients', () => {
        test('should insert a client', async () => {
            const data = {
                    name: "Esteban",
                    nit: 46846531   
            }
            const response = await request(app).post('/api/clients').send(data);
            expect(response.statusCode).toBe(201);
            expect(response.body.code).toEqual(data.code);
        });
    });
});