const mongoose = require('mongoose');
// const { string } = require('prop-types');

const CandidateSchema = new mongoose.Schema({
    nome: { type: String, unique: false, required: true },
    cargo: { type: String, unique: false, required: true },
    dataNascimento: { type: String, unique: false, required: true },
    estadoCivil: { type: String, unique: false, required: false },
    genero: { type: String, unique: false, required: false },
    cep: { type: String, unique: false, required: true },
    endereco: { type: String, unique: false, required: true },
    numero: { type: String, unique: false, required: true },
    bairro: { type: String, unique: false, required: true },
    cidade: { type: String, unique: false, required: true },
    complemento: { type: String, unique: false, required: false },
    fone: { type: String, unique: false, required: false },
    cel: { type: String, unique: false, required: true },
    email: { type: String, unique: false, required: true },
    rg: { type: String, unique: true, required: true },
    cpf: { type: String, unique: true, required: true },
    veiculo: { type: String, unique: false, required: false },
    cnh: { type: String, unique: false, required: false },
},{
    timestamps: true
});

module.exports = mongoose.model('candidate', CandidateSchema);