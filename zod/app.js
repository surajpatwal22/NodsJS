const express = require('express');
const app = express();
const PORT = require('./env.js');


// const PORT = process.env.PORT || 4000;

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.get('/about', (req, res) => {
    res.send('About Page');
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});