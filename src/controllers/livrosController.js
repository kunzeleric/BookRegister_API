import livros from '../models/Livro.js';


class LivroController {

    static listarLivros = async (req, res) => {
        try {
            let resultadoLivros = await livros.find().populate('autor').exec();
            res.status(200).json(resultadoLivros);
            
        } catch (error) {
            res.status(500).json(error);
        }
    }

    static listarLivroPorId = async (req, res) => {
        const id = req.params.id;
        try {
            let livro = await livros.findById(id).populate('autor', 'nome').exec();
            res.status(200).send(livro);
        } catch (error) {
            res.status(400).send({message: `${error.message} - ID do livro não foi encontrado.`});
        }
    }

    static cadastrarLivro = async (req, res) => {
        try{
            let livro =  new livros(req.body);
            await livro.save();
            res.status(201).send(livro);
        }
        catch (error){
            res.status(500).send({
                message: `${error.message} - Falha ao cadastrar o livro.`});
        }
    }

    static atualizarLivro = async (req, res) => {
        const id = req.params.id;

        try {
            await livros.findByIdAndUpdate(id, {$set: req.body});
            res.status(200).send({message: 'Livro atualizado!'});
        } catch (error) {
            res.status(500).send({message: error.message});
        }
    }

    static deletarLivro = async (req, res) => {
        const id = req.params.id;
        try {
            await livros.findByIdAndDelete(id);
            res.status(200).send({message: 'Livro removido com sucesso.'});
        } catch (error) {
            res.status(500).send({message: error.message});
        }
    }
}

export default LivroController;