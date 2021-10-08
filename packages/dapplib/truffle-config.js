require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'grid climb frame sugar fire ridge remain uncover just castle outer table'; 
let testAccounts = [
"0x6bf145494ef57c391d2eeb64814cfb8d6de79364d2814a6eb2e8a0d165441d56",
"0xc1afa7a199847ac463bf66968080fc3f1bfa80d942f3f3e38979e810f5a653d6",
"0x28d7d738ea899dd4085d734a0eba43e492f1b13b03a5e51d1af22741760fb1dd",
"0x9a6b3006760ced7ea895a52cb28275a46d57c2aaa69da7ac3632da4823555f45",
"0x8348fd7d8173411abb55e3a927e34d5a728b4c02645904d53fdcaa7dac2b8252",
"0x4e0ead072d75dd0141fe6c617f78e7f2947eeab8f227be99f56157f9b79b5cfa",
"0xc57bcf3a2635b5b096e4ddc52c61a4b8fc5849edacd4da966c0d09d94e0b053d",
"0x2e5edac2819c2801d367a85e4158f029d40952ca272af296525a7044c32da46e",
"0xf8d41065870ac55e28bc9a77931d5786b2e42d82ea1744d382fa5c5623c7ec7b",
"0xaa5206d518c76911cf8e2b1b0477da0a7b51f8e2ae7f42e3e2c294ec774ee168"
]; 
let devUri = 'http://127.0.0.1:7545/';

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
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

