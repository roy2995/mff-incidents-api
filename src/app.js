import express from 'express';
import cors from 'cors';
import { config } from 'dotenv';
import db from './config/bd.js';
import { captchaRouter } from './routes/captcha/routes.js';
import typeIncidentsRouter from './routes/type_incidents/routes.js';
import formsRouter from './routes/forms/routes.js';
import tokenRouter from './routes/auth/routes.js';
import paisesRouter from './routes/countries/routes.js';

config();
const app = express();

// Middlewares
app.use(cors({
  origin: '*', // Or specify your frontend origin
  exposedHeaders: ['X-Captcha-Hash'] // 👈 Add this line
}));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Rutas
app.use('/api/captcha', captchaRouter);
app.use('/api/types-incidents', typeIncidentsRouter);
app.use('/api/forms', formsRouter);
app.use('/api/token', tokenRouter);
app.use('/api/paises', paisesRouter);



// Prueba de conexión a DB
db.getConnection()
  .then(() => console.log('Connected to database'))
  .catch(err => console.error('Database connection failed:', err));

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

export default app;
