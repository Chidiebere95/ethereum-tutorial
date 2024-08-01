const ethers = require('ethers');

const wallet = ethers.Wallet.createRandom();
// 0100010111011101010111001 - 256

const privateKey = wallet.privateKey;
const publicKey = wallet.publicKey;
const address = wallet.address;

console.log('private key', privateKey);
console.log('public key', publicKey);
console.log('address', address);
