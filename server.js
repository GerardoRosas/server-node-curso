const express = require('express');
const app = express();

const hbs = require('hbs');
require('./hbs/helpers');

const port = process.env.PORT || 8080;

app.use( express.static(__dirname+'/public') );

hbs.registerPartials(__dirname + '/views/partials');
app.set('view engine', 'hbs');



app.get('/', (req, res) => {

    res.render('home', {
        nombre: 'Gerardo Rosas',
    })
});

app.get('/about', (req, res) => {
    res.render('about', {
        nombre: 'gerarDo rosas'
    })
})

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});