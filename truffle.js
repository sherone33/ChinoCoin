
const HDWalletProvider = require('truffle-hdwallet-provider');
require('dotenv').config()  // Store environment-specific variable from '.env' to process.env


module.exports = {
  networks: {
    development: {
      host: 'localhost',
      port: 8545,
      network_id: '*', // Match any network id
      gas: 2000000,
      gasPrice: 20000000000
    },
    ropsten: {
      // Hard-coded version - which works! (the other way - using the '.env' file - wasn't working):
      provider: new HDWalletProvider("candy maple cake sugar pudding cream honey rich smooth crumble sweet treat", "https://ropsten.infura.io/v3/991feee0349b43e6bdcbff10c338d84d"),

      // Using CONST's defined in the ".env" file (this did NOT work!):
      //provider: new HDWalletProvider(process.env.MNENOMIC, "https://ropsten.infura.io/v3/" + process.env.ENDPOINT_KEY_ROPSTEN)

      network_id: 3,
      from: "0x627306090abaB3A6e1400e9345bC60c78a8BEf57",
      gas: 4612388,
      gasPrice: 210000000
    }

  }
};



// Some older stuff:
    // rinkeby: {
    //   provider: () => new HDWalletProvider(process.env.MNENOMIC, "https://rinkeby.infura.io/v3/" + process.env.ENDPOINT_KEY),
    //   network_id: 4,
    //   from: "0x627306090abaB3A6e1400e9345bC60c78a8BEf57",
    //   gas: 4612388,
    //   gasPrice: 210000000
    // },


// module.exports = {
//   networks: {
//     development: {
//       host: "127.0.0.1",
//       port: 7545,
//       network_id: "*" // Match any network id
//     },
//     kovan: {
//       provider: function () {
//         return new HDWalletProvider(
//           process.env.MNEMONIC,
//           `https://kovan.infura.io/${process.env.INFURA_API_KEY}`
//         )
//       },
//       gas: 5000000,
//       gasPrice: 25000000000,
//       network_id: 42
//     }
//   },
//   solc: {
//     optimizer: {
//       enabled: true,
//       runs: 200
//     }
//   }
// }




// module.exports = {
//   // See <http://truffleframework.com/docs/advanced/configuration>
//   // to customize your Truffle configuration!
//   networks: {
//     development: {
//       host: "127.0.0.1",
//       port: 8545,      // this might need to be “7545”
//       network_id: "*", // Match any network id,
//       gas: 4600000
//     }
//   }
// };




