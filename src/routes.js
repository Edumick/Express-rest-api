'use strict'; 
const express = require('express');
const mysql = require('mysql');
const app = express();
app.use(express.json());


const router = express.Router();

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'edu102030',
  database: 'restaurant'
});


connection.connect((err) => {
  if (err) {
    console.error('Erro ao conectar ao banco de dados:', err);
    return;
  }
  console.log('Conexão bem-sucedida ao banco de dados MySQL');
});



// Roteamento


// Adicionar produto
 router.post('/product', (req, res) => {
  // Lógica para adicionar um produto
  const product = req.body
  connection.query('INSERT INTO product SET ?', product, function (error, results, fields) {
    if (error) throw error;
    // Neat!
  });
  res.send('informacoes recebidas pelo servidor')
 });

// // Retorna os produtos cadastrados
router.get('/products', (req, res) => {

  connection.query('SELECT * FROM product', (err, results) => {
    
    
    // Enviar os resultados da consulta como resposta
    res.send(results);
  });
  
  
});
// // Atualização parcial do produto
// router.patch('/product/:productId', (req, res) => {
//   // Lógica para atualização parcial do produto
// });

// // Atualização total do produto
// router.put('/product/:productId', (req, res) => {
//   // Lógica para atualização total do produto
// });

// // Exclusão do produto
// router.delete('/product/:productId', (req, res) => {
//     // Lógica para exclusão do produto
// });

app.use('/', router);

module.exports = app;
