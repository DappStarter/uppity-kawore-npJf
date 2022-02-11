require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'install logic bottom trophy name remember magic unknown include civil army gather'; 
let testAccounts = [
"0x34f3d4b2b0820ac00d31b6f606b7dc0f5ab44cced9ebe67603ee41d5c0f479a7",
"0x1782efb8ff0e3d99e3ded2bc27f7c17357edce41a5c06d8f5afc6637d00105f3",
"0xfa323e4007e7eaeab21ce69e647356912203efed9132265d52315cab90abbaa9",
"0x5b9c2f6dcaa4f4c645ca9b6d0d1675dbd2ccc15bb91bf47a63a5e9243c645613",
"0xb7706989a010dd17f3cedc9c32f0f4219e21f0a1ffbbbbfd45ddd1f43a02abaf",
"0x4fd8704c79463fedeaba5566bd8c7fd097d6a8c47b411ba0f758a434ec4d9099",
"0x7c3c81ff262150fed1f605c316e29dd89ffe04ac2e074312ff2ccb4828daff6f",
"0x671a00410584092161a3b6e0a8ea1cf2edf47c66d06c6ab971d54a7407b1fdaf",
"0x033bf9682877e5c67adc4f69dcca5e1bdbb0a0586adc53678e200dc00e638645",
"0x7a33a23637dc61b606482f605dac7ba48f673f70e5e37190665bbc75471a47b6"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

