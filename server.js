const express = require('express');

const app = express();

app.use(express.static(__dirname + '/src'));

console.log('listening on port 1337');
app.listen(1337);
