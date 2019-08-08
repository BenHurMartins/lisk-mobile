import { networks } from 'bitcoinjs-lib';

const isTestnet = process.env.network === 'testnet';

export default {
  isTestnet,
  url: isTestnet ? 'https://btc-test.lisk.io' : 'https://btc.lisk.io',
  minerFeesURL: 'https://bitcoinfees.earn.com/api/v1/fees/recommended',
  network: isTestnet ? networks.testnet : networks.bitcoin,
  derivationPath: isTestnet ? "m/44'/1'/0'/0/0" : "m/44'/0'/0'/0/0",
  transactionExplorerURL: `https://www.blockchain.com/${isTestnet ? 'btctest' : 'btc'}/tx`,
  requestOptions: {
    method: 'GET',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
  },
};
