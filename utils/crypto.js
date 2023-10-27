import CryptoJS from 'crypto-js';

/**
 * 随机生成32位的字符串
 * @returns {string}
 */
export function generateRandomString(){
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  let result = '';
  const charactersLength = characters.length
  for (let i = 0; i < 32; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result
}

/**
 * 随机生成aes 密钥
 * @returns {string}
 */
export function generateAesKey(){
  return CryptoJS.enc.Utf8.parse(generateRandomString());
}

/**
 * 加密base64
 * @returns {string}
 */
export function encryptBase64(str){
  return CryptoJS.enc.Base64.stringify(str);
}

/**
 * 使用密钥对数据进行加密
 * @param message
 * @param aesKey
 * @returns {string}
 */
export function encryptWithAes(message, aesKey){
  const encrypted = CryptoJS.AES.encrypt(message, aesKey, {
    mode: CryptoJS.mode.ECB,
    padding: CryptoJS.pad.Pkcs7
  });
  return encrypted.toString();
}
