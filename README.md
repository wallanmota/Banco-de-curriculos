# Banco de Currículos JobsNET

Para ver o projeto finalizado [**Clique Aqui!**](https://cadastro-jobsnet.herokuapp.com)

Documentação API dos recursos Web Services REST - Uso do Swagger [**Aqui!**](https://cadastro-jobsnet.herokuapp.com/docs)

***Projeto de conclusão de curso de desenvolvimento Full Stack da Gama Academy + Ambev Tech***

## Desafio Proposto:
Desenvolver uma página para a empresa JobsNET para atração de profissionais para conectar as oportunidades de emprego.

### Frontend

***Fase 1 - Criação da Página***

- Apresentar a estrutura do projeto no github;
- Landing page com formulário para preenchimento de candidatura;
- Não existe uma regra para o layout da página;
- Hospedar página;

### Backend

***Domínio - Modelagem de Dados***

- Cadastro de candidatos com os campos: Id, Nome, Data Nascimento, Endereço {cep, logradouro, numero, bairro, cidade e estado}, Telefone, Email e Profissão e demais campos mencionados na imagem de ilustração de formulário de candidatos;
- Para a conclusão do cadastro, consultar o seu endereço pelo CEP informado (Consultar a API VIA Cep);

***Regra de Negócio***

- Não pode haver 2 cadastros de candidatos com o mesmo cpf;
- Todo candidato precisará preencher os campos: CPF, Nome, Data Nascimento, Cep, Logradouro, Número, Bairro, Cidade, Email, Profissão e Celular;

***Integração entre a Página de Formulário e o Back-end***

- Disponibilizar uma API Rest com a funcionalidade de cadastro de candidatos armazenando em um banco de dados;
- Disponibilizar a documentação dos recursos Web Services REST - Uso do Swagger.

##

### Como rodar o projeto localmente?

* Fazer o fork
* Fazer o clone para pasta de preferência 

Para rodar o projeto é preciso ter o node instalado, e instalar as dependências abaixo:

```
Express
Swagger-ui-express
Cors 
Sequelize
Mongoose
```
Com as dependências instaladas basta rodar em localhost e acessar através da porta 5000
