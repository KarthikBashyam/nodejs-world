const express = require('express');
let movies = require('./services/movie-service');

let app = express();

app.set('port', process.env.PORT | 3000);

app.get('/movies', movies.findAll);

app.listen(app.get('port'), function() {
    console.log('Node Server running on port :' + app.get('port'));
});