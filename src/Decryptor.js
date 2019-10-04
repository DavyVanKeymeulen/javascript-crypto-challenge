const soduim = require('libsodium-wrappers');
let setkey = null;

module.exports.setKey = async function setKey(key)
{
    setkey = key;
}
module.exports.decrypt = async  function decrypt(ciphertext, nonce)
{
    if(setkey == null)
    {
        throw 'no key';
    }
    else
    {
        return soduim.crypto_secretbox_open_easy(ciphertext,nonce,setkey);
    }
}