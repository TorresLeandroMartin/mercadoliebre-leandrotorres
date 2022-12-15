const express = require('express');
const app = express();
const path = require('path');


// const publicPath= path.resolve(__dirname, './public')

app.use(express.static('public'));

app.get('/', (req, res) => {

    res.sendFile(path.join(__dirname, 'views/homeV1.2.html'));

})

app.get('/registro', (req, res) => {

    res.sendFile(path.join(__dirname, 'views/registerV0.html'));

})

app.get('/login', (req, res) => {

    res.sendFile(path.join(__dirname, 'views/loginV0.html'));

})
const port = process.env.PORT || 3000;
app.listen(port, () => console.log('Corriendo en puerto ' + port));

// funciona?

// a ver si funciona porque no actualiza nada en el visual