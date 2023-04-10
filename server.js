import app from './src/app.js'; //utilizando o express

//criando um servidor local utilizando somente NodeJS

//const http = require('http'); //importando 
const port = process.env.PORT || 3000;

app.listen(3000, () => console.log(`Servidor rodando na porta ${port}`));

// const rotas = {
//     '/': 'Curso de Node',
//     '/livros': 'Entrei na página de livros',
//     '/autores': 'Listagem de Autores',
//     '/editora': 'Página da Editora'
// }
// 
// 
// const server = http.createServer((req, res) => {
//     res.writeHead(200, {'Content-Type': 'text/plain'}); //define no cabeçalho o tipo de dado a ser passado
//     res.end(rotas[req.url]); //dependendo da url será chamada uma rota específica
// })
//server.listen(3000, () => console.log(`Servidor rodando na porta ${port}`));

