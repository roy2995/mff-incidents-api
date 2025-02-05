import db from '../../config/bd.js';

export const getPaises = async (req, res) => {
  try {
    const [paises] = await db.query(`
      SELECT * FROM countries
      ORDER BY country_name
    `);
    res.json(paises);
  } catch (error) {
    console.error('Error obteniendo países:', error);
    res.status(500).json({ error: 'Error interno del servidor' });
  }
};