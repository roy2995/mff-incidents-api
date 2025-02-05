import svgCaptcha from 'svg-captcha';
import pkg from 'crypto-js';
const { SHA256 } = pkg;
export const CAPTCHA_SECRET = process.env.CAPTCHA_SECRET || 'default_secret';
export const CAPTCHA_EXPIRATION = 300;

export const generateCaptcha = () => {
    const captcha = svgCaptcha.create({
      size: 5,
      noise: 2,
      color: true,
      background: '#f0f0f0'
    });
  
    const hashedText = SHA256(captcha.text + CAPTCHA_SECRET).toString();
    const expiration = Date.now() + CAPTCHA_EXPIRATION * 1000; // Tiempo en segundos
  
    return {
      image: captcha.data,
      hash: `${hashedText}.${expiration}`
    };
  };
  
  export const validateCaptcha = (userInput, captchaHash) => {
    const [hash, expiration] = captchaHash.split('.');
    
    if (Date.now() > parseInt(expiration)) {
      return { valid: false, error: 'CAPTCHA expirado' };
    }
  
    const expectedHash = SHA256(userInput + CAPTCHA_SECRET).toString();
    return { valid: hash === expectedHash };
};