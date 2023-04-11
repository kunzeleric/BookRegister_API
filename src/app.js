import express from 'express'; //importando e atribuindo o express
import db from './config/dbConnect.js';
import livros from './models/Livro.js';
import routes from './routes/index.js';

db.on('error', console.log.bind(console, 'Erro de conexão.'));
db.once("open", () => {
    console.log('Conexão com o banco feita com sucesso.');
})

const app = express();
app.use(express.json());
routes(app);

//rota de busca de livro
app.get('/livros/:id', (req, res) => {
    let index = buscaLivro(req.params.id);
    res.json(livros[index]); //retorna o json com o livro especificado na busca 
})

//rota para atualizar titulo de livro
app.put('/livros/:id', (req, res) => {
    let index = buscaLivro(req.params.id);
    livros[index].titulo = req.body.titulo;
    res.json(livros); //resposta é o array 'livros' em formato json
})

//rota para deletar livro
app.delete('/livros/:id', (req, res) => {
    let { id } = req.params;
    let index = buscaLivro(id);
    livros.splice(index, 1);
    res.send(`Livro ${id} excluido com sucesso!`);
})


const buscaLivro = (id) => {
    return livros.findIndex(livro => livro.id == id);
}

export default app;