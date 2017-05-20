//use crypto-js as base encrypted lib
var CryptoJS = require("crypto-js")
/**
 * 
 * @param {*} content 
 */
function encryptWithBase64(content){
    var encrypt_content = content || "";
    var str = CryptoJS.enc.Utf8.parse(encrypt_content);
    var base64 = CryptoJS.enc.Base64.stringify(str);
    return base64;
}
/**
 * 
 * @param {*} content 
 */
function decryptWithBase64(content){
    var decrpytContent = content || "";
    var str = CryptoJS.enc.Base64.parse(decrpytContent);
    var parseStr = str.toString(CryptoJS.enc.Utf8);
    return parseStr;
}

/**
 * @param content 加密内容的字符串
 * @param key 加密的密钥
 * @return 返回经过AES加密的字符串
 */

function encryptWithAES( content , key ){
	content = content || "";

    var ciphertext = CryptoJS.AES.encrypt(content, key,{
        mode:CryptoJS.mode.ECB,
        padding:CryptoJS.pad.Pkcs7
    });
    return ciphertext;
}

/**
 * @param content 待解密的字符串
 * @param key 加密的密钥
 * @return 返回经过AES解密的字符串
 */
function decryptWithAES( content, key){
	content = content || "";
    var bytes  =  CryptoJS.AES.decrypt(content.toString(), key,{
        mode:CryptoJS.mode.ECB,
        padding:CryptoJS.pad.Pkcs7
    });
    var plaintext = bytes.toString(CryptoJS.enc.Utf8);
    return plaintext;
}



exports.encryptWithBase64 = encryptWithBase64
exports.decryptWithBase64 = decryptWithBase64
exports.decryptWithAES = decryptWithAES
exports.encryptWithAES = encryptWithAES