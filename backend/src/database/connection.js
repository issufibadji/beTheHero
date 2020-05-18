const knex = require('knex');//impor tar 
const configuration = require('../../knexfile');//importa config q esta no knexfile
const config = process.env.NODE_ENV == 'test' ? configuration.test : configuration.development;
const connection = knex(config);//passar configoraçao devolop

module.exports = connection;//exportar 

