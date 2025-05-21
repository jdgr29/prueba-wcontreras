const request = require('supertest');
const { faker } = require("@faker-js/faker");
const baseURL = `http://localhost:${process.env.PORT || 3000}`;

describe('Inventory Mini-API', () => {
    let createdId;

    test('POST /products creates a product 201', async () => {
        const productName = faker.commerce.productName();
        const res = await request(baseURL)
            .post('/products')
            .send({ name: productName, price: 1299.99, stock: 25 });

        expect(res.statusCode).toBe(201);
        expect(res.body).toMatchObject({ name: productName, price: 1299.99, stock: 25 });
        createdId = res.body.id;
    });

    test('GET /products returns list', async () => {
        const res = await request(baseURL).get('/products');
        expect(res.statusCode).toBe(200);
        expect(Array.isArray(res.body)).toBe(true);
        expect(res.body[0]).toHaveProperty('id');
    });

    test('GET /products/:id returns record', async () => {
        const res = await request(baseURL).get(`/products/${createdId}`);
        expect(res.statusCode).toBe(200);
        expect(res.body.id).toBe(createdId);
    });

    test('Invalid POST responds with 400', async () => {
        const res = await request(baseURL)
            .post('/products')
            .send({ price: -1 });
        expect(res.statusCode).toBe(400);
    });
});