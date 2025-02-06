import { generateCaptcha, validateCaptcha } from '../../middlewares/captcha.js';

export const getCaptcha = (req, res) => {
  try {
    const captcha = generateCaptcha();
    res.set('X-Captcha-Hash', captcha.hash); 
    res.type('svg').status(200).send(captcha.image);
  } catch (error) {
    res.status(500).json({ error: 'Error generating CAPTCHA' });
  }
  // return res;
};
export const validateCaptchaMiddleware = (req, res, next) => {
  const { captchaText, captchaHash } = req.body;
  
  if (!captchaText || !captchaHash) {
    return res.status(400).json({ error: 'CAPTCHA its requeued' });
  }

  const validation = validateCaptcha(captchaText, captchaHash);
  
  if (!validation.valid) {
    return res.status(403).json({ 
      error: validation.error || 'CAPTCHA invalid' 
    });
  }

  next();
};