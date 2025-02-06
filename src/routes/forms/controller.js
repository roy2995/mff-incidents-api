import db from '../../config/bd.js';

export const getIncidencias = async (req, res) => {
  try {
    const [results] = await db.query('SELECT * FROM incidents');
    res.json(results);
  } catch (err) {
    console.error('Error en la base de datos:', err);
    res.status(500).json({ error: 'Internal server error' });
  }
};

export const createIncidencia = async (req, res) => {
  const { name, email, phone, type_incident_id, image_incident, date_incident, description, isauthorized } = req.body;

  if (!name || !email || !date_incident || !description || !type_incident_id || !isauthorized || !phone) {
    return res.status(400).json({ error: 'Todos los campos son obligatorios' });
  }

  try {
    const [result] = await db.query(
      `INSERT INTO incidents 
      (name, email, phone, type_incident_id, image_incident, date_incident, description, isauthorized) 
      VALUES (?, ?, ?, ?, ?, ?, ?, ?)`,
      [name, email, phone, type_incident_id, image_incident, date_incident, description, isauthorized]
    );
    res.status(201).json({ id: result.insertId, mensaje: 'Incidence registry' });
  } catch (err) {
    console.error('Error en la base de datos:', err);
    res.status(500).json({ error: 'Internal server error' });
  }
};