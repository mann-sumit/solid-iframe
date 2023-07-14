const express = require('express');
const app = express();

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', 'http://your-vue-app-domain.com');
  res.setHeader('Access-Control-Allow-Credentials', 'true');
  next();
});

app.get('/cookie-check', (req, res) => {
  // Send a response indicating successful cookie check
  res.status(200).send('OK');
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
