const express = require('express')
const mongoose = require('mongoose')
const url ="mongodb+srv://hibataih:hibataih@cluster0.zlo0k.mongodb.net/tpbloc?retryWrites=true&w=majority"
const app = express()

mongoose.connect(url, {useNewUrlParser:true})
const con = mongoose.connection

con.on('open', () => {
    console.log('connected...')
})

app.use(express.json())


const blocRouter = require('./routes/blocs')
app.use('/blocs',blocRouter)
const salleRouter = require('./routes/salles')
app.use('/salles',salleRouter)


app.listen(process.env.PORT || 3000, function(){
    console.log("Express server listening on port %d in %s mode", this.address().port, app.settings.env);
  });