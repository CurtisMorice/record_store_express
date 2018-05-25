const express = require('express');
const app = express();
let bodyParser = require('body-parser');

const port = 5000;
const recordRouter = require('./routers/record.router');
app.use('/record', recordRouter);
app.use(express.static('server/public'));

app.use(bodyParser.urlencoded({ extended: true }));

app.listen(port, () => {
    console.log('Listening on port', port);

});