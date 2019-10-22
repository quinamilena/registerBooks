const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const _schema = {
    livroNome: String,
    autorNome: String,
    ISBN13: Number,
    ISBN10: Number,
    editoraNome: String,
    lancamentoAno: Number,
    livroImg: String,
    idioma: String,
    paginas: Number,
    genero: String,
    preco: Number,
    qtdEstoque: Number,
    preVenda: Boolean,
    disponivel: Boolean
}

const LivrariaSchema = new Schema(_schema, {versionKey: false});
const LivrariaModel = mongoose.model('livrariaprojeto', LivrariaSchema, 'livrariaprojeto');

module.exports = LivrariaModel;