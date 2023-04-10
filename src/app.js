import express from 'express'; //importando e atribuindo o express
const app = express();

app.use(express.json());

//variavel simulando um registro inicial de dados
const livros = [
    {id: 1, "titulo": "Senhor dos Aneis"},
    {id: 2, "titulo": "O Hobbit"}
]

//rota padrão criada
app.get('/', (req, res) => {
    res.status(200).send('Curso de Node');

})

//rota que retorna os livros
app.get('/livros', (req, res) => {
    res.status(200).json(livros);
})

//rota de busca de livro
app.get('/livros/:id', (req, res) => {
    let index = buscaLivro(req.params.id);
    res.json(livros[index]); //retorna o json com o livro especificado na busca 
})


//rota para cadastro de livro
app.post('/livros', (req, res) => {
    livros.push(req.body);
    res.status(201).send('Livro foi cadastrado com sucesso!');
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