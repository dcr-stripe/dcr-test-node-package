const crypto = require('crypto');

function hmac(value) {
    const secret = 'some secret';
    const hash = crypto.createHmac('sha256', secret).update(value).digest('hex');
    return hash;
}

module.exports = {hmac};