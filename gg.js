const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
  const message = req.query.message || 'gg tu cola wey'; // Mensaje por defecto si no se especifica
  res.send(message);
});

app.listen(port, () => {
  console.log(`Servidor escuchando en el puerto ${port}`);
});