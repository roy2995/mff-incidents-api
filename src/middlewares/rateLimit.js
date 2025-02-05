import rateLimit from 'express-rate-limit';

// Límite general para endpoints públicos
export const publicRateLimit = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutos
  max: 100, // Máximo 100 solicitudes por IP
  message: 'Has excedido el límite de solicitudes. Intenta de nuevo más tarde.',
  standardHeaders: true,
  legacyHeaders: false,
});

// Límite estricto para generación de tokens
export const strictRateLimit = rateLimit({
  windowMs: 60 * 60 * 1000, // 1 hora
  max: 10, // Máximo 10 solicitudes por IP
  message: 'Demasiados intentos. Bloqueado por seguridad.',
});