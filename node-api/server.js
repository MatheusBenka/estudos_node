const express = require('express')
const app = express();

app.listen(3001);

app.use(function (req, res, next) {
    res.header('Content-Type', 'application/json');
    next();
});

app.get('/',(req,res)=>{    
    res.send('Hello joao');
});

var usuarios = [
    {
        'nome':'joao',
        'idade':18,
        'email':'mail@mail.com'
    },
    {
        'nome':'maria',
        'idade':21,
        'email':'mail2@mail.com'
    }
]

app.get('/usuarios',(req,res)=>{
    res.json(usuarios)
});

app.get('/usuario',(req, res)=>{
    res.json(usuarios[0])
});