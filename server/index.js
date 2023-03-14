import express from 'express';
import cors from 'cors';
import router from './router.js';

const PORT = 4001;

const app = new express();

app.use(cors());
app.use(express.json({ limit: '50mb' }));

app.use(router);

app.listen(PORT, () =>
  console.log(`Server running at http://localhost:${PORT}`)
);