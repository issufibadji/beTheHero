const connection = require('../database/connection');//Importaçao de banco

module.exports ={
 async create(request, response){
  const { id } = request.body;

  // buscando ong no banco
  const ong = await connection('ongs')
    .where('id', id)
    .select('name')
    .first();

    //ong nao existe  , retorna status(401)
  if(!ong){
    return response. status(400).json({error: 'No ONG fund with this ID'});
}
//se td da certo retorna o meu dados em json
  return response.json(ong);
}
};