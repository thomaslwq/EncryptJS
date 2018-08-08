# EncryptJS
A JS AES and BASE64 encrypt and decrypt lib
```
var enc = require("./EncryptJS")
//encrypt with base64
var content_base64 = "encrypt_content";
var encrypt_content_base64 = enc.encryptWithBase64(content_base64);
console.log("encrypt_content with base64:"+encrypt_content_base64);

var decrypt_content_base64 = enc.decryptWithBase64(encrypt_content_base64);
console.log("decrypt_content with base64:"+decrypt_content_base64);

//encrypt with AES
var content_AES = enc.encryptWithBase64(" content AES");
var key = "123";
var encrypt_content_AES = enc.encryptWithAES(content_AES,key);
console.log("encrypt_content with AES:"+encrypt_content_AES);
var decrypt_content_AES = enc.decryptWithAES(encrypt_content_AES,key);
console.log("decrypt_content with AES:"+enc.decryptWithBase64(decrypt_content_AES));
```
