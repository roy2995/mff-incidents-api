import db from '../../config/bd.js'; 

export const getTypesIncidents = async (req, res) => {
  try {
    const [results] = await db.query('SELECT * FROM type_incidents');  
    res.json(results);
  } catch (err) {
    console.error('Error en la base de datos:', err);
    res.status(500).json({ error: 'Error interno del servidor' });
  }
};
