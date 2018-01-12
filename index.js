const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const app = express();


app.use(express.static('build'));

const PORT = process.env.port || 8080;
app.use(cors());
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

app.use(require('./router'));

app.listen(PORT, () => {
  console.log('alive on port', PORT)
});

