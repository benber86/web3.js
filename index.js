var MultisigWeb3 = require('./lib/web3');

// dont override global variable
if (typeof window !== 'undefined' && typeof window.MultisigWeb3 === 'undefined') {
    window.MultisigWeb3 = MultisigWeb3;
}

module.exports = MultisigWeb3;
