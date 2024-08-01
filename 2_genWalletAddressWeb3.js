const { Web3 } = require('web3');

const web3 = new Web3();

const account = web3.eth.accounts.create();
// 1010111110010111001 - 256

const privatekey = account.privateKey;

const address = account.address;

console.log('private key', privatekey);
console.log('address', address);
