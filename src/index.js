const express = require('express');
const app = express();
const PORT = 4000;

app.get('/', (req, res) => {
    res.send("app GET");
});

app.post('/', (res, req) => {
    res.send("app POST");
});

app.delete('/', (req, res) => {
    res.send("app DELETE");
});

app.listen(PORT, () => {
    console.log(`App online na porta ${PORT}`);
});