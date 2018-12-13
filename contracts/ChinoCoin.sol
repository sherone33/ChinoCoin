pragma solidity ^0.4.22;

import "../node_modules/openzeppelin-solidity/contracts/token/ERC20/ERC20Mintable.sol";
import "../node_modules/openzeppelin-solidity/contracts/token/ERC20/ERC20Detailed.sol";

contract ChinoCoin is ERC20Mintable, ERC20Detailed {
  
  //constructor(string name, string symbol, uint8 decimals) 

  constructor() public
    ERC20Detailed("ChinoCoin", "CHINO", 18) {

    }

}


