const jwt = require('express-jwt');
const { secret } = require('config.json');
const db = require('_helpers/db');

module.exports = authorizeManager;


function authorizeManager() {

    return [
        // authenticate JWT token and attach decoded token to request as req.user
        jwt({ secret, algorithms: ['HS256'] }),

        // attach full user record to request object
        async (req, res, next) => {
            // get user with id from token 'sub' (subject) property
            const user = await db.User.findByPk(req.user.sub);

            // check user still exists
            if (!user || user.role!='manager')
                return res.status(401).json({ message: 'Unauthorized' });
            console.log(req.username)

            // authorization successful
            req.user = user.get();
            next();
        }
    ];
}