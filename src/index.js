const http = require('http');
const express = require('express');
const livros = [
    {
        id: 1,
        titulo: 'Trilogia da Fundação',
        descricao:'Trilogia da Fundação por Isaac Asimov',
        edicao:'Deluxe Capa dura – Edição de luxo',
        autor:'Isaac Asimov',
        ISBN:'978-8576571971' 
    },
    {
        id: 2,
        titulo: 'Eu, Robô',
        descricao:'Eu, Robô por Isaac Asimov',
        edicao:'Capa comum',
        autor:'Isaac Asimov',
        ISBN:'978-8576572008'
    }
    ]
const bodyParser = require('body-parser');
const app = express();
app.use(bodyParser.json());
const port = 3000;
app.set('port', port);
app.get("/livros",(req, res) =>{
    res.send(livros);
});

let contador = 3;
app.post('/livros',(req, res)=>{

    const livro = req.body;
    
    livros.push({
        id: contador+=1, 
        titulo: livro.titulo, 
        descricao: livro.descricao, 
        edicao: livro.edicao, 
        autor: livro.autor,
        ISBN: livro.ISBN
    });
    
    res.status(201).json(livros);
});

app.put("/livros", (req, res, next) => {
    livros.forEach((livro)=>{
        if(livro.id === req.body.id){

            livro.titulo = req.body.titulo;
            livro.descricao = req.body.descricao;
            livro.edicao = req.body.edicao;
            livro.autor = req.body.autor;
            livro.ISBN = req.body.ISBN;
        }
    })
 res.status(201).json(livros);
});

app.delete("/livros", (req, res, next) =>{
    livros.forEach(livro =>{
        if(cliente.id === req.body.id){
            const index  = livros.indexOf(livro);
            livros.splice(index,1);
        }
    })
    res.status(201).json(livros);
})
const server = http.createServer(app);
server.listen(3000);
