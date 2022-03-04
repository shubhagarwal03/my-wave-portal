// SPDX-License-Identifier: UNLICENSED

pragma solidity ^0.8.0;

import "hardhat/console.sol";

contract WavePortal { // think of this as similar to naming of a class in other languages.
    uint256 totalwaves; // totalwaves counts the number of waves, variable is global. // in terms of solidity specifically, it is called a state variable, stored permanent in contract storage.
    
    event NewWave(address indexed from, uint256 timestamp, string message);
    struct Wave {
        address waver;
        string message;
        uint timestamp;
    }
Wave[] waves;

    constructor() { // will be called default, I presume, as a constructor always is.
        console.log("Yo yo, I am a contract and I am smart");
    }

    function wave(string memory gotMessage) public{
        totalwaves = totalwaves +1;
        console.log("%s has waved!", msg.sender, gotMessage);
        waves.push(Wave(msg.sender, gotMessage, block.timestamp));
        emit NewWave(msg.sender, block.timestamp, gotMessage);
    }

    function get_all_waves() public view returns (Wave[] memory){
        return waves;
    }

    function gettotalwaves() public view returns (uint256){
        console.log("We have %d waves in total.", totalwaves);
        return totalwaves;
    }

}
