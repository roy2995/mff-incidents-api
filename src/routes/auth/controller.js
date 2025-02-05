import jwt from 'jsonwebtoken';

export const generateToken = (req, res) => {
  try {
    // Generar un token con expiración corta (ejemplo: 30 minutos)
    const token = jwt.sign(
      { access: 'form_submission' },
      process.env.JWT_SECRET,
      { expiresIn: '30m' }
    );

    res.json({ token });
  } catch (error) {
    console.error('Error generando token:', error);
    res.status(500).json({ error: 'Error interno del servidor' });
  }
};
