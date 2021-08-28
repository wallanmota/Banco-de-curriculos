const mongoose = require('mongoose');

const mongoURL = 'mongodb+srv://user-01:jhDdMqBfZzNhrmWx@cluster0.g2ws4.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';

mongoose.Promise = global.Promise;
mongoose.connect( mongoURL, {
    useNewUrlParser: true 
}).then(()=>{
    console.log("BD Conectado")
}).catch((err)=>{
    console.error("Houve um erro ao se conectar ao BD" + err);
})

module.exports = {mongoose: mongoose};

