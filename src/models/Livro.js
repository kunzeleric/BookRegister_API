import mongoose from 'mongoose';

const livroSchema = new mongoose.Schema(
    {
        id: { type: String },
        titulo: { type: String, required: true },
        autor: { type: mongoose.Schema.Types.ObjectId, ref: "autores" }, //tipo alterado para cria referencia com o esquema de Autores
        editora: { type: String, required: true },
        numeroPaginas: { type: Number }
    }
);

const livros = mongoose.model("livros", livroSchema);

export default livros;