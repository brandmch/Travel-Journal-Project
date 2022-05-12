// const http = require('http');
// const path = require('path');
// const fs = require('fs');
// const food = require('./data.json')

// const server = http.createServer((req, res) => {
//     res.writeHead(500);
//     res.end(JSON.stringify(food));
// });

// const PORT = process.env.PORT || 4000;

// server.listen(PORT, () => console.log(`Server is listening on Port ${PORT}`));


const express = require('express');

const app = express();
const PORT = 4000;

app.listen(PORT);

app.get('/', (req, res) => {
    res.send('<h1>fuck</h1>')
});