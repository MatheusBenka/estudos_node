const express = require('express')
const app = express();

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

app.use(express.json())
app.listen(3001);

app.use(function (req, res, next) {    
    res.header('Content-Type', 'application/json');
    next();
});

app.route('/')
    .get((req,res)=>{    
        res.send('Hello joao');
    });

app.route('/usuario')
    .get((req,res)=>{        
        res.json(usuarios[0])
    })
    .post((req,res)=>{        
        if(req.body === undefined){            
            res.send('impossivel continuar com body vazio');            
        }             
        usuarios.push(req.body)      
        res.json({'Mensagem':'Usuario adicionado com sucesso', 'Usuario':req.body})
    })
    .delete((req,res)=>{
        res.send('deletado')
    });

app.route('/usuarios')
    .get((req,res)=>{
        res.json(usuarios)
    })