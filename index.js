const http = require('http');
const express = require('express');

const fileSystem = require('fs').promises;



const path = require('path');
const url = require('url');
const PORT = process.env.PORT || 3500;

const bodyParser = require('body-parser')
const app = express();

// parse application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: false }))
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())


app.use((req,res,next) =>{
    
     console.log(req.method);
     console.log(req.protocol);
     console.log(req.get('host'));
     console.log(req.headers.host);
     console.log(req.originalUrl);
   

     next();

});

app.get('/',(req,res) =>{

     console.log(req.url);
     res.send('<h1>Hi Eriik </h1>');
});

app.get('/About',(req,res) =>{
     res.json({
          name : 'Eriik',
          Surname : ' Elnino'
     });
});

app.post('/login',(req,res) =>{
     console.log(req.body.email);
     console.log(req.body.password);
     res.send('<h1>User logged In Successful</h1>');
});

app.listen(PORT, () =>{

     console.log('Server is running well');
})



