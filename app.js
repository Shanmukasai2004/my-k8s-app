const express = require('express');
const app = express();
const PORT = 8080;

app.get('/', (req, res) => {
  res.send('🚀 Hello from Kubernetes running on Docker Desktop!');
});

app.listen(PORT, '0.0.0.0', () => {
  console.log(`Server running on http://localhost:${PORT}`);
});