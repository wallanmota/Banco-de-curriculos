const express = require('express');
const app = express();
const swaggerUI = require('swagger-ui-express');
const swaggerDocs = require('./swagger.json');
const cors = require('cors');
const User = require('./models/User');


const serverless = require('serverless-http');
const router = express.Router();

router.get('/');

const {
    Op
} = require("sequelize");

app.use('/docs', swaggerUI.serve, swaggerUI.setup(swaggerDocs));

app.use(express.static(__dirname + '/public'));

app.use(express.urlencoded({
    extended: false
}))
app.use(express.json())


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
            dataNasc: req.body.dataNasc,
            estadoCivil: req.body.estadoCivil,
            sexo: req.body.sexo,
            cep: req.body.cep,
            rua: req.body.rua,
            numero: req.body.numero,
            bairro: req.body.bairro,
            cidade: req.body.cidade,
            complemento: req.body.complemento,
            email: req.body.email,
            celular: req.body.celular,
            tel1: req.body.tel1,
            identidade: req.body.identidade,
            cpf: req.body.cpf,
            habilitacao: req.body.habilitacao,
            carro: req.body.carro
        }).then(() => {
            res.redirect(301, '/enviado.html')
        }).catch((erro) => {
            res.status(500)
        })
    }
})
const PORT = process.env.PORT || 5000
app.listen(PORT, () => {
    console.log(`Servidor rodando na url http://localhost:5000`)
});

app.use('/.netlify/functions/api', router)
module.exports= app;
module.exports.handler = serverless(app);