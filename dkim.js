import crypto from 'crypto';

const genDKIM = async () => {
  const rsa = await crypto.subtle.generateKey(
    {
      name: "RSA-OAEP",
      modulusLength: 2048,
      publicExponent: new Uint8Array([0x01, 0x00, 0x01]),
      hash: "SHA-256"
    },
    true,
    ["encrypt", "decrypt"]
  ).catch(e => console.error);

  const pem = {
    pub: await crypto.subtle.exportKey('spki', rsa.publicKey),
    priv: await crypto.subtle.exportKey('pkcs8', rsa.privateKey),
  };

  const b64 = {
    pub: btoa(String.fromCharCode.apply(null, new Uint8Array(pem.pub))),
    priv: btoa(String.fromCharCode.apply(null, new Uint8Array(pem.priv))),
  };

  const dns = `v=DKIM1;p=${b64.pub}`;

  return { ...rsa, pem, b64, dns };
};

const { dns, b64 } = await genDKIM();
console.log(JSON.stringify({
  dns,
  privateKey: b64.priv,
}, null, '  '));
