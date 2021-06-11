const dotnev = require('dotenv');  
const mongoose = require('mongoose')
const express = require('express');
const app = express();

dotnev.config({path: './config.env'});
require('./db/conn');                   // connection with database is stored here in conn file.
// const User = require('./model/userSchema');
const PORT = process.env.PORT;

app.use(express.json());

// Now root page will load form auth file.
app.use(require('./router/auth'));

// Now no need of this thing below commented part:
// app.get('/', (req, res) => {
//     res.send('Hello world fromt the server !');
// });

app.get('/courses', (req, res) => {
    res.send('Hello to courses !');
});

app.get('/contact', (req, res) => {
    res.send('welcome to contact page !');
});

app.get('/signin', (req, res) => {
    res.send('welcome to signin page !');
});

// app.get('/profile', middleware, (req, res) => {
//     res.send('my courses !');
// });

app.get('/coursedetails', (req, res) => {
    res.send('course details !');
});

// app.get('/register', (req, res) => {
//     res.send('this is register !');
// });

app.listen(PORT, () => {
    console.log(`server is running in ${PORT}`);
});
