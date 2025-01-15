const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/public/index.html');
});

app.get('/about', (req,res) =>
{
  //res.sendFile(__dirname + '/public/about.html');
  res.send('ABOYT');
});
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
