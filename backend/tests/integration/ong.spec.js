const request = require ('supertest');
const app = require ('../../src/app');

describe('ONG', ()=>{
  it('should be generate unique ID', async () =>{
    const response = await request(app)
      .post('/ongs')
      .send({
        name: "APAD2",
        email: "issufibadji@gmail.com",
        whatsapp: "66996397593",
        city: "Rio do Sul",
        uf: "SC"
      });
  });
});