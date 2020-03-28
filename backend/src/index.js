const express = require('express');
const cors = require('cores');
const routes = require('./routes');

const app = express();

/** converte o json em algo entendivel pelo js */
app.use(cors());
app.use(express.json());

app.use(routes);

/* 
* Rota / Recurso 
*/

/**
 * Métodos HTTP:
 * 
 * GET: Buscar uma informação do back-end
 * POST: Criar uma informação no back-end
 * PUT:     uma informação no back-end
 * DELETE: Deletar uma informação no back-end
 * 
 */

 /**
  * Tipos de parâmetros:
  * 
  * Query Params: parâmetros nomeados enviados na rota após ? (filtros, paginação)
  * Route Params: parâmetros utilizados para identificas recursos (por ex: /users/:id)
  * Request Body: corpo da requiição, utilizado para criar ou alterar recursos
  * 
 */

 /**
  * SQL: MySQL, SQLite, PostgreSQL, Oracle, Microsoft SQL Serrver
  * NoSQL: MongoDB, CouchDB, etc
  * 
  * Agora sera escolhido o SQLite, pq da um maior controle do BD
  * 
  */

/**
 * Driver: SELECT * FROM users
 * Query Builder: table('users').select('*').where()
 */



app.listen(3333);