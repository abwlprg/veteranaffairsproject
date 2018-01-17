const router = require('express').Router();
const path = require('path');

router.get('/api/users/:id', (req, res) =>{

});

router.get('*', (req, res) => {
  res.sendFile(path.join(__dirname + '/index.html'));
});

// app.get('/index', (req, res) => {
//   res.sendFile(path.join(__dirname + '/index.html'));
// });

// app.post('/contact', (req, res) => {
//   res.sendFile(path.join(__dirname + '/index.html'));
// });

// app.post('/form', (req, res) => {
//   res.sendFile(path.join(__dirname + '/index.html'));
// });

var PORT = 9000;
app.listen(PORT, function() {
    console.log('http://localhost:' + PORT);
});



module.exports = router;
