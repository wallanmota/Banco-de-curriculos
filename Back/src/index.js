const express = require('express');
const mongoose = require('mongoose');
const swaggerUI = require('swagger-ui-express');
const swaggerDocs = require('./swagger.json');
// const routes = require('./routes.js')
const app = express();
const cors = require('cors');

const User = require('./models/User');

// const {
//     Op
// } = require("sequelize");


// mongoose.connect( 'mongodb+srv://user-01:jhDdMqBfZzNhrmWx@cluster0.g2ws4.mongodb.net/myFirstDatabase?retryWrites=true&w=majority',{
//     useNewUrlParser: true,
//     // useCreateIndex: true
// }); 

app.use(cors());
app.use(express.json());
// app.use(routes);
app.use('/docs', swaggerUI.serve, swaggerUI.setup(swaggerDocs));
// app.listen('5000', () =>{
//     console.log("Rodando na porta 5000");
// });

// Config
app.use(express.static(__dirname + '/Front'));

app.use(express.urlencoded({
    extended: false
}))

// Rotas
app.post('/add', async function (req, res) {
    cpf_matches = await User.findOne({
       cpf: req.body.cpf
    })
    console.log(cpf_matches);

    if (cpf_matches) {
        res.json({
            error: 1
        })
    } else {
        User.create({
            nome: req.body.nome,
            cargo: req.body.cargo,
            dataNascimento: req.body.dataNascimento,
            estadoCivil: req.body.estadoCivil,
            genero: req.body.genero,
            cep: req.body.cep,
            endereco: req.body.endereco,
            numResidencia: req.body.numResidencia,
            bairro: req.body.bairro,
            cidade: req.body.cidade,
            complemento: req.body.complemento,
            telefone: req.body.telefone,
            celular: req.body.celular,
            email: req.body.email,
            identidade: req.body.identidade,
            cpf_digitado: req.body.cpf_digitado,
            veiculo: req.body.veiculo,
            categoriaHabilitacao: req.body.categoriaHabilitacao
        }).then(() => {
            res.redirect(301, "/submitted.html")
        }).catch((erro) => {
            res.status(500)
        })
    }
})
const PORT = process.env.PORT || 8081
app.listen(PORT, () => {
    console.log(`Servidor rodando na url http://localhost:5000`)
});

