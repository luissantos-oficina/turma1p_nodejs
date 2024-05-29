const express = require('express');
const mysql = require('mysql2'); // para ligar ao mysql

const connection = mysql.createConnection({
    host: 'serveo.net',
    user: 'root',
    password: '',
    database: 'turma1p2023',
    port: 3307 // por defeito ! é 3306
});

connection.connect((error) => {
    if (error) {
      console.error(error);
    } else {
      console.log('Connected to the database');
    }
});

const app = express();
const port = 3000;
 
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});