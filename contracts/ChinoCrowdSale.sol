pragma solidity ^0.4.22;

import "../node_modules/openzeppelin-solidity/contracts/token/ERC20/ERC20.sol";
import "../node_modules/openzeppelin-solidity/contracts/crowdsale/Crowdsale.sol";
import "../node_modules/openzeppelin-solidity/contracts/crowdsale/validation/TimedCrowdsale.sol";
import "../node_modules/openzeppelin-solidity/contracts/crowdsale/validation/CappedCrowdsale.sol";



contract ChinoCrowdSale is TimedCrowdsale, CappedCrowdsale {
  
  constructor(uint256 rate, 
              address wallet, 
              IERC20 token, 
              uint256 openingTime, 
              uint256 closingTime, 
              uint256 cap) 
              
              public 
              
              Crowdsale(rate, wallet, token)
              CappedCrowdsale(cap)
              TimedCrowdsale(openingTime, closingTime) 
    {
      //require(goal <= cap);
  }

}


