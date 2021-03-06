const express = require ('express');
const app = express();
const config = require('./config/database');
const mongoose = require('mongoose');
const path = require ('path');

mongoose.Promise = global.Promise;
mongoose.connect(config.uri, { useMongoClient: true }, (err) => {
    if(err){
        console.log('Could not connected to database :' , err);
    } else{
        console.log('Connected to databse :' + config.db);
    }
});


app.use(express.static(__dirname + '/client/dist/'));
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname + '/client/dist/index.html'));
});

app.listen(8080, () => {
    console.log('Listening on port 8080');
});