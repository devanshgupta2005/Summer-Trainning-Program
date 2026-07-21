const express = require('express');
const app = express();
const port = 3000;

//GET - Fetch data from the server
//post - Send data to the server
//Put - Update data on the server
//PATCH - Update part of the data on the server
//Declare a route for the root URL

app.get('/', (req, res) => {
    res.send('Hello, World!');
});
app.get('/about', (req, res) => {
    res.send('This is the about page.');
});
app.get('/contact', (req, res) => {
    res.send('This is the contact page.');
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
