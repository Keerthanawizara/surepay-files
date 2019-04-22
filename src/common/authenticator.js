const jwt = require('jsonwebtoken')
const userCollection = require('../users/userModel')


class userAuthentication {
    constructor(userAuthToken) {
        this.authToken = userAuthToken
    }
    getToken() {
        const token  = jwt.sign({userId: this.authToken}, 'My secret Key', { expiresIn: '1h' })
        return token
    }
    async verifyToken(token) {
        try {
            const verifiedToken = jwt.verify(token, 'My secret Key')
            if (verifiedToken.userId) {
                const userData = await userCollection.findById({_id: verifiedToken.userId}).then(doc => doc).catch(e => e)
                if (userData._id) {
                    return true
                } else {
                    return false
                }
            } else {
                return false
            }
        } catch(err) {
            return false
        }
    }
}

module.exports = userAuthentication