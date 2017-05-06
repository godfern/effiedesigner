/**
 * Created by godfrey.f on 07/10/16.
 */

var express = require('express');
var app = express();

//app.use(express.static('public'));
 app.use('/node_modules', express.static(__dirname + '/node_modules/'));

 app.use('/css', express.static(__dirname + '/public/css/'));
 app.use('/js', express.static(__dirname + '/public/js/'));

app.get('*', function (req, res) {
    //res.send('Hello World!');
    res.sendFile(__dirname + '/public/index.html');
});

app.listen(process.env.PORT || 3000, function () {
    console.log('Example app listening on port 3000!');
});
