const key = require('libsodium-wrappers');
let keypair;
let loadLibsodium = async () => await key.ready;

(async () => {
    await loadLibsodium();
    keypair = key.crypto_sign_keypair();
})();

module.exports.verifyingKey = async function verifyingKey()
{
    await loadLibsodium();
    return keypair.publicKey;
}

module.exports.sign = async function sign(msg)
{
    return key.crypto_sign(msg,keypair.privateKey);
}
