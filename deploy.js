const HDWalletProvider = require('@truffle/hdwallet-provider');
const { Web3 } = require('web3');

const {abi, evm } = require('./compile');


const provider = new HDWalletProvider(
	'one subway list series awake cave someone torch bracket brush chaos lazy',
	'https://sepolia.infura.io/v3/6f968d1ef7b4485ca20b08562dcb1757'
);

const web3 = new Web3(provider);

const deploy = async () => {
	     const accounts = await web3.eth.getAccounts();

		 console.log('Attempting to deploy from account', accounts[0]);

		 const result = await new web3.eth.Contract(abi)
			 .deploy({ data: evm.bytecode.object, arguments: ['Hi there!']})
			 .send({gas: '1000000' , from: accounts[0]});

		 console.log('Contract deployed to', result.options.address);
		 provider.engine.stop();
};

deploy();