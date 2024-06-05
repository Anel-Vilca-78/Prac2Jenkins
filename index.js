const express = require('express');
const app = express();
const port = 3000;

app.get('/api/v1/welcome', (req, res) => {
    res.send('Hello, WORLDSITO x356565');
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});