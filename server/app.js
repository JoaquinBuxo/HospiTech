import express from 'express';
import cors from 'cors';
import router from './router/router.js';

const app = new express();

app.use(cors());
app.use(express.json({ limit: '50mb' }));

app.use(router);

export default app;
