const request = require('supertest');
const app = require('../../src/app');
const connection = require('../../src/database/connection');

describe('ONG', () => {
    beforeEach(async () => {
        await connection.migrate.rollback(); //zera bd teste
        await connection.migrate.latest();
    });

    afterAll(async () => {
        await connection.destroy();
    });


    it('should be able to create a new ONG', async () => {
        const response = await request(app).post('/ongs').send({
            name: "ONG TESTE",
            email: "contato@teste.com.br",
            whatsapp: "53981000000",
            city: "Pelotas",
            uf: "RS",
        });

        expect(response.body).toHaveProperty('id');
        expect(response.body.id).toHaveLength(8);

        //console.log(response.body);
    });
});