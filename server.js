const express = require('express');
const cors = require('cors');

const app = express();

const routes = require('./Routes/routes');

app.use(cors());
app.use(express.json());

app.use(routes);

app.use((req, res, next) => {
  const erro = new Error('Rota não encontrada');
  erro.status = 404;
  next(erro);
});

app.use((error, req, res, next) => {
  res.status(error.status || 500);
  return res.send({
    erro: {
      message: error.message
    }
  })
});

const port = process.env.PORT || 3000;
app.listen(port, () => console.log('Server is running!'));