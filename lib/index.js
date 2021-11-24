const Printer = require('./printer/printer');

function lazyHmac(value) {
    return require('./crypto/crypto').hmac(value);
}

module.exports = {
    Printer,
    lazyHmac
};