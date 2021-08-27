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
    numero:  {
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
    fone:  {
        type: String,
    },
    cel: {
        type: String
    },
    email: {
        type: String
    },
    rg:  {
        type: String
    },
    cpf: {
        type: String,
        unique: true,
        require: true,
    },
    veiculo:  {
        type: String
        
    },
    cnh: {
        type: String
    }
    
}) 

const User = db.mongoose.model('usuarios', UserSchema)

module.exports = User;