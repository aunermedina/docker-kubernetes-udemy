const express = require('express');

const app = express();

app.get('/', (req, res) => {
    res.send('Trying to get this right without building');
});


app.listen(8080, () => {
    console.log('listening on port 8080');
});