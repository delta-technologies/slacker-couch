const jwt = require('jsonwebtoken');

function createToken(uname) {
    
    let secret = process.env.SLACKER_JWT_SECRET;
    let random = Math.floor(Math.random() * 255)
    let stamp = Date.now();

    let token = jwt.sign({user: uname, random: random, stamp: stamp }, secret, { expiresIn: '5m' })
    
    return token;
}

module.exports = { createToken }