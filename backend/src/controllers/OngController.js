const generateUniqueId = require ('../utils/generateUniqueId');
const connection = require('../database/connection');//Importaçao de banco
module.exports ={

 async index(request, response){
  const ongs = await connection('ongs').select('*');///seleciona dados de td ongs
  return response.json(ongs);//vai retonar array
},

async create(request, response) {
    const {name, email , whatsapp, city, uf} = request.body;
    const id = generateUniqueId();

    await connection('ongs').insert({
      id,
      name,
      email,
      whatsapp,
      city,
      uf,
    })
    return response.json({ id });
}
};