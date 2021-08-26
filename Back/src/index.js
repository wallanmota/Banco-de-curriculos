const express = require('express');
const mongoose = require('mongoose');
const swaggerUI = require('swagger-ui-express');
const swaggerDocs = require('./swagger.json');
const routes = require('./routes.js')
const app = express();
const cors = require('cors');


mongoose.connect( 'mongodb+srv://user-01:jhDdMqBfZzNhrmWx@cluster0.g2ws4.mongodb.net/myFirstDatabase?retryWrites=true&w=majority',{
    useNewUrlParser: true,
    // useCreateIndex: true
}); 

app.use(cors());
app.use(express.json());
app.use(routes);
app.use('/docs', swaggerUI.serve, swaggerUI.setup(swaggerDocs));
app.listen('5000', () =>{
    console.log("Rodando na porta 5000");
});

