import autores from '../models/Autor.js';


class AutorController {

    static listarAutores = async (req, res) => {
        try {
            const autoresResultado = await autores.find();
            res.status(200).json(autoresResultado);
        } catch (error) {
            res.status(500).json(error);
        }
    }

    static listarAutorPorId = async (req, res) => {
        const id = req.params.id;
        try {
            let autor = await autores.findById(id);
            res.status(200).send(autor.toJSON);
        } catch (error) {
            res.status(400).send({message: `${error.message} - ID do Autor não foi encontrado.`});
        }
    }

    static cadastrarAutor = async (req, res) => {
        try{
            let autor = new autores(req.body);
            await autor.save();
            res.status(201).send(autor.toJSON());
        }
        catch (error){
            res.status(500).send({
                message: `${error.message} - Falha ao cadastrar o Autor.`});
        }
    }

    static atualizarAutor = async (req, res) => {
        const id = req.params.id;

        try {
            await autores.findByIdAndUpdate(id, {$set: req.body});
            res.status(200).send({message: 'Autor atualizado!'});
        } catch (error) {
            res.status(500).send({message: error.message});
        }
    }

    static deletarAutor = async (req, res) => {
        const id = req.params.id;
        try {
            await autores.findByIdAndDelete(id);
            res.status(200).send({message: 'Autor removido com sucesso.'});
        } catch (error) {
            res.status(500).send({message: error.message});
        }
    }
}

export default AutorController;