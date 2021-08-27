const db = require('./db');


const UserSchema = db.mongoose.Schema({
    nome: {
        type: String
    },
    cargo: {
        type: String
    },
    dataNascimento:  {
        type: String
    },
    estadoCivil:  {
        type: String
    },
    genero:  {
        type: String
    },
    cep:  {
        type: String
    },
    endereco:  {
        type: String
    },
    numResidencia:  {
        type: String
    },
    bairro: {
        type: String
    },
    cidade:  {
        type: String
    },
    estcomplemento:  {
        type: String
    },
    telefone:  {
        type: String,
    },
    celular: {
        type: String
    },
    email: {
        type: String
    },
    identidade:  {
        type: String
    },
    cpf_digitado: {
        type: String,
        unique: true,
        require: true,
    },
    veiculo:  {
        type: String
        
    },
    categoriaHabilitacao: {
        type: String
    }
    
}) 

const User = db.mongoose.model('usuarios', UserSchema)

module.exports = User;