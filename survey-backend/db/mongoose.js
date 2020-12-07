const mongoose = require('mongoose')

mongoose.connect("mongodb+srv://Admin:Qjt9DBrzYRzwLPb0@cluster0.msqoc.mongodb.net/survey?retryWrites=true&w=majority",{
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
})