const express = require('express');
const fs = require('fs');

const app = express();
const indexHtml = async () => await fs.readFileSync(__dirname + '/elements/index.html', 'utf-8').toString();

app.use(express.static(__dirname + '/elements'));
app.get('/email', (req, res) => {
    console.log('Oki?')
    res.status(res.statusCode).send(indexHtml);
})
app.get('*', (req, res) => {
    console.log('Fuck off')
    res.status(404)
})

app.listen(4100, () => console.log('Listening on port 4100'))

module.exports = app;
