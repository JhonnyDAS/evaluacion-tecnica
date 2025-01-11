const app = require('../src/app');
const request = require('supertest');
const uuid = require('uuid');

describe('Product API', () => {
    describe('GET /products', () => {
        test('should return all products', async () => {
            const response = await request(app).get('/api/products').send();
            expect(response.statusCode).toBe(200);
            expect(response.body).toBeInstanceOf(Array);
            expect(response.body[0].code).toEqual("PD-1")
            expect(response.body[1].code).toEqual("PD-2")
        });
    });

    describe('POST /products', () => {
        test('should insert a product', async () => {
            const data = {
                    code: uuid.v4(),
                    name: "Product Test",
                    price: 53,
                    description: "This is a product test",
                    imageUrl: "http://image",
                    category: "TEST",
                    countInStock: 1000
                
            }
            const response = await request(app).post('/api/products').send(data);
            expect(response.statusCode).toBe(201);
            expect(response.body.code).toEqual(data.code);
        });

        test('Error validation', async () => {
            const data = {
                    name: "Product Test",
                    price: 53,
                    description: "This is a product test",
                    imageUrl: "http://image",
                    category: "TEST",
                    countInStock: 1000
                
            }
            const response = await request(app).post('/api/products').send(data);
            expect(response.statusCode).toBe(400);
            expect(response.body.message).toEqual("Error validation product");
        });
    });
});