const mongoose = require('mongoose');
// const password = process.env.MONGODB_PASSWORD;


mongoose.Promise = global.Promise;
mongoose.connect('mongodb+srv://user-01:jhDdMqBfZzNhrmWx@cluster0.g2ws4.mongodb.net/myFirstDatabase?retryWrites=true&w=majority', {
    useNewUrlParser: true 
}).then(()=>{
    console.log("MongoDB Conectado")
}).catch((err)=>{
    console.error("Houve um erro ao se conectar ao mongoDB" + err);
})

module.exports = {mongoose: mongoose};