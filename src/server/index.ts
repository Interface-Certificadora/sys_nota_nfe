import express from 'express';
import ipRouter from '@/app/api/ip/route';

const app = express();
const port = process.env.PORT || 3000;

app.use('/api/ip', ipRouter);

app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});
