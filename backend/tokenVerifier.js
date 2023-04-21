const jsonwebtoken = require('jsonwebtoken');

const JWT_SECRET = require('./JWT_SECRET');
let users = require('./usersDB');

const tokenVerifier = function (req, res, next) {
    let tkn = req.header('Authorization');
    if(!tkn) return res.status(401).send("no Token");
    if(tkn.startsWith('Bearer ')) {
        tokenValue = tkn.slice(7, tkn.length).trimStart();
        const verificationStatus = jsonwebtoken.verify(tokenValue, JWT_SECRET);        
        if(verificationStatus.user === 'user') {
            next();
        }
        else {
            res.send('invalid token');
        }
    }
}

module.exports = tokenVerifier