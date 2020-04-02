const express = require('express');
const cors = require('cors');
const routes = require('./routes');
const { errors } = require('celebrate');

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);
app.use(errors());

//app.listen(3333);

module.exports = app;



/**
 * Métodos HTTP:
 * GET: Listar informações
 * POST: Enviar informações
 * PUT: Alterar uma informação no BE
 * DELETE: Deletar uma informação no BE
 */

/**
 * Tipos de Parâmetros
 * 
 * Query Params: Parâmetros nomeados enviados na rota após "?" (Filtros, paginação)
 * Route Params: Parâmetros utilizados para identificar recursos
 * Request Body: Corpo da requisição, utilizado para criar ou alterar recursos
 * 
 */

/**
 * SQL: MySQL, SQLite, PostgreeSQL, Oracle, Microsoft SQL Server
 * NoSQL: MongoDB, CouchDB, etc
 */

/**
 * Driver: SELECT * FROM users;
 * Query Builder: table('user').select('*').where() #KNEX
 */




