// Imports 
const express = require('express');
// const expressLayouts = require('express-ejs-layouts');

const PORT = 3000;
const HOST = '0.0.0.0';

const app = express();
// const urlencodedParser = bodyParser.urlencoded({ extended: false })
// Arquivos estáticos
app.use(express.static('public'))
// app.use("/css", express.static(__dirname + 'public/css'))
// app.use("/js", express.static(__dirname + 'public/js'))
app.use(express.json());
app.use(express.urlencoded());

// Template Engine
// app.use(expressLayouts)
// app.set('layout', 'layouts/layout')
app.set('view engine', 'ejs')

// Navegação
// GET Requests
app.get('/', (req, res) => {
    res.redirect('/checkout')
})

app.get('/checkout', (req, res) => {
    res.render('pages/checkout')
})

app.get('/pagamento', (req, res) => {
    res.render('pages/pagamento')
})

app.get('/cupom', (req, res) => {
    res.render('pages/cupom')
})

app.get("*", (req, res) => { 
  
    // definir erro para todas as rotas não existentes
    res.send("PAGE NOT FOUND"); 
  });

// POST requests
app.post('/process', (req, res) => {
    console.log(req.body)
    
    res.render('pages/checkout')
    
})

// escutar na porta 3000
app.listen(PORT, HOST);