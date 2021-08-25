const candidate = require('../models/candidate');

module.exports = {
    async register(req, res){
        const { nome, cargo, dataNascimento, estadoCivil, genero, cep, endereco, numero, bairro, cidade, complemento, fone, cel, emai, rg, cpf, veiculo, cnh } = req.body

        const newCandidate = new candidate();

        newCandidate.nome = nome;
        newCandidate.cargo = cargo;
        newCandidate.dataNascimento = dataNascimento;
        newCandidate.estadoCivil = estadoCivil;
        newCandidate.genero = genero;
        newCandidate.cep = cep;
        newCandidate.endereco = endereco;
        newCandidate.numero = numero;
        newCandidate.bairro = bairro;
        newCandidate.cidade = cidade;
        newCandidate.complemento = complemento;
        newCandidate.fone = fone;
        newCandidate.cel = cel;
        newCandidate.emai = emai;
        newCandidate.rg = rg;
        newCandidate.cpf = cpf;
        newCandidate.veiculo = veiculo;
        newCandidate.cnh = cnh;

        newCandidate.save((err, savedCandidate) => {
            if(err){
                console.log(err);
                return res.statu(500).send();
            }
            else{
                return res.statu(200).send(savedCandidate);
            }    
        });
    }
};