var ChinoCoin = artifacts.require("./ChinoCoin.sol");
var ChinoCrowdsale = artifacts.require("./ChinoCrowdsale.sol");

const duration = {
    seconds: function (val) { return val; },
    minutes: function (val) { return val * this.seconds(60); },
    hours: function (val) { return val * this.minutes(60); },
    days: function (val) { return val * this.hours(24); },
    weeks: function (val) { return val * this.days(7); },
    years: function (val) { return val * this.days(365); },
};


// Originally had "async" here, as follows:
//module.exports = async function (deployer, network, accounts) 


module.exports = function (deployer, network, accounts) {
    //await
    deployer.deploy(ChinoCoin, "ChinoCoin", "CHINO", 18).then(function (deployedContract) {
        if (deployedContract) {
            console.log("===>> deployedContract's address is: " + deployedContract.address);
            // I can STRINGIFY the ENTIRE JSON!!!:
            //console.log("We have a result!!!" + JSON.stringify(result));

            //
            //  Crowdsale Contract:
            //
            // IF we have a good result, we can now deploy the Crowdsale Contract:
            // Set up all the necessary values for INIT'ing this thing:
            const rate = 1000; // <== means that for every 1 Ether user/buyer sends us, we will issue to them 1000 of our ChinoCoin tokens
            const wallet = accounts[0]; // <-- WHERE THE FUNDS SHOULD BE *COLLECTED*!!!

            // Set the Crowdsale's start time to be 30 seconds from NOW
            // We'll start by first defining the current time:
            const timeRightNow = Math.floor(Date.now() / 1000)
            const openingTime = timeRightNow + duration.seconds(30);
            // So if we want the Crowdsale to start in 2 weeks, do this: "+ duration.days(14);"

            // Now set the Crowdsale's END time to be 8 weeks from NOW
            const closingTime = openingTime + duration.weeks(8);

            // Cap - how many ETHER are we looking to raise
            const cap = web3.toWei(100); // <== 100 Ether

            console.log(duration.weeks(10));
            //console.log(web3.toWei(100));

            return deployer.deploy(ChinoCrowdsale, rate, wallet, deployedContract.address, openingTime, closingTime, cap).then(function (crowdSaleContract) {
                console.log("===>>crowdSaleContract address:", crowdSaleContract.address);
            });

        }
    }).catch(function (error) {
        console.log("SHIT!" + error);
    });

    //const deployedContract = await ChinoCoin.deployed();
    //console.log("What is this doing????" + deployedContract.address);

};


