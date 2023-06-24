const http = require('http');
const express = require('express');
const app = express();

const path = require('path');
const url = require('url');
const PORT = process.env.PORT || 3500;




app.listen(PORT, () =>{
     
     console.log('Server is running well');
})



