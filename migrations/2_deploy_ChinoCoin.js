var ChinoCoin = artifacts.require("./ChinoCoin.sol");

module.exports = function (deployer) {
    deployer.deploy(ChinoCoin);
};

