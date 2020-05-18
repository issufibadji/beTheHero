const express = require ('express');//Importaçao da funcionalidade de express
const cors = require('cors'); 
const { errors } = require('celebrate');
const routes = require('./routes');//importando de arq routes.js

const app = express();//criando aplicacao

app.use(cors());
app.use(express.json());//informa que estamos usar o json para nossa requicoes 
app.use(routes);
app.use(errors());


module.exports = app;
//app.listen(3333);//porta de aplicaçao

//1-Routa/recurso 
 
/* 
*2-Metodos HTTP:
*GET: se usa quando quer buscar/listar informaçao do Back-end
*POST: se usa quando quer criar informaçao do Back-end
*PUT: se usa quando quer alterar informaçao do Back-end
*DELETE: se usa quando quer deletar informaçao do Back-end
*/

/* *
*3-Tipos de parametros:
*
*Query params: parâmetros nomeados enviados na rota após "?" (filtros, paginaçao)
*ROUTE params: prâmetros utilizados para identificar recursos
*Request Body:Corpo da requisão, utlizado para criar ou alterra recursos
*/

/**
 *4- SQL:MYQL,SQLite,PostgreSQL,Oracle, Microsoft SQL Serve
 *NoSQL:MongoDB, CouchDB, etc...
 */

 /**Tres formas principais 
  * 1-Driver: SELECT* FROM users
  * 2-Query Builder:table('users).select('*).where()
  */

