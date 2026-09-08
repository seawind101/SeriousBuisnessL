const express = require('express');
const app = express();
const server = require('http').createServer(app);  
const port = 3000;
//mid
app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.render('index');
});
server.listen(port, () => {
    console.log(`Example app listening on port http://localhost:${port}`);
});
