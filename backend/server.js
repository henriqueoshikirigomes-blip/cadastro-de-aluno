const express = require('express');
const mySql = require('mysql2');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json())

const conexao = mySql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'escola'
});