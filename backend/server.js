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

app.post("/salvar", (req, res) => {
    let nome = req.body.nome;
    let idade = red.body.idade;

    let sql = "INSERT INTO alunos (nome, idade)VALUES (?, ?);"

    conexao.query(sql, [nome, idade], (erro, resultado) => {
        if(erro) {
            console.log(erro);
        } else {
            res.send("Aluno salvo com sucesso");
        }
    });
});

app.listen(3000, () =>{
    console.log("servidor rodando naporta 3000");
});
