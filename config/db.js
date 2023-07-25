const mongoose = require('mongoose');

mongoose.set('strictQuery', false);

const db = 'mongodb+srv://meuapp:meuapp@cluster0.nn9psyx.mongodb.net/properties?retryWrites=true&w=majority';

const connection = mongoose.connect(db, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})

module.exports = connection