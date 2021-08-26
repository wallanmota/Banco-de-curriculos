const express = require('express');
const mongoose = require('mongoose');
const swaggerUI = require('swagger-ui-express');
const swaggerDocs = require('./swagger.json');
const routes = require('./routes.js')
const app = express();


mongoose.connect( 'mongodb+srv://user-01:jhDdMqBfZzNhrmWx@cluster0.g2ws4.mongodb.net/myFirstDatabase?retryWrites=true&w=majority',{
    useNewUrlParser: true,
    // useCreateIndex: true
}); 

app.use(express.json());
app.use(routes);
app.use('/docs', swaggerUI.serve, swaggerUI.setup(swaggerDocs));
app.listen('5000', () =>{
    console.log("Rodando na porta 5000");
});
