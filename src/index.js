import 'dotenv/config';
import app from './app.js';


const PORT = 8080;

app.listen(PORT, () => {
  console.log(`API corriendo en http://localhost:${PORT}`);
});