pragma solidity ^0.8.19;
// linter warnings (red underline) about pragma version can ignored!

// SPDX-License-Identifier: MIT

// contract code will go here
contract Inbox {
    string public message;

    constructor(string memory initialMessage) {
        message = initialMessage;
    }

    function setMessage(string memory newMessage) public{
        message = newMessage;
    }
}       