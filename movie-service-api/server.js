const express = require('express');

let app = express();

app.set('port', 3000);

app.get('/hello',(req, res, next) => {
    res.json('Welcome to Node World');
});

app.listen(app.get('port'), function() {
    console.log('Node Server running on port :' + app.get('port'));
});