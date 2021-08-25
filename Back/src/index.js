const express = require('express');
const mongoose = require('mongoose');
const swaggerUI = require('swagger-ui-express');
const swaggerDocs = require('./swagger.json');
const routes = require('./routes')
const app = express();

mongoose.connect( 'mongodb+srv: user-01:jhDdMqBfZzNhrmWx@cluster0.g2ws4.mongodb.net/JobsNet?retryWrites=true&w=majority',{
    useNewUrlParser: true,
    useCreateIndex: true
}); 

app.use(express.json());
app.use('./docs', swaggerUI.serve, saggerUI.setup(swaggerDocs));
app.use(routes);
app.listen('5000', () =>{
    console.log('rodando na porta 5000');
});
