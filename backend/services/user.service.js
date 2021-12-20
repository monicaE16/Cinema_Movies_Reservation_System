const config = require('config.json');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const db = require('_helpers/db');

module.exports = {
    deleteByUserName,
    approveManager,
    getFutureManagers,
    authenticate,
    getAll,
    getById,
    create,
    update,
    deleteByUserName,
    delete: _delete
};
async function approveManager(name){
    console.log(name)
    const user = await db.User.findOne({ where: { username:name } });
    if (!user )throw 'Username is incorrect';
    console.log("leeeh")
    user.set({
        requesting_managerial: "False",
        role: "manager"
      })
      return await user.save();
}
async function authenticate({ username, password }) {
    const user = await db.User.scope('withHash').findOne({ where: { username } });

    if (!user || !(await bcrypt.compare(password, user.hash)))
        throw 'Username or password is incorrect';

    // authentication successful
    const token = jwt.sign({ sub: user.username }, config.secret, { expiresIn: '7d' });
    return { ...omitHash(user.get()), token };
}

async function getAll() {
    return await db.User.findAll();
}

async function getById(username) {
    return await getUser(username);
}

async function create(params) {
    // validate
    if (await db.User.findOne({ where: { username: params.username } })) {
        throw 'Username "' + params.username + '" is already taken';
    }

    // hash password
    if (params.password) {
        params.hash = await bcrypt.hash(params.password, 10);
    }

    // save user
    await db.User.create(params);
}
async function getFutureManagers(params) {
    console.log("hksfk")
    return await db.User.findAll({attributes: ['username', 'Email'],where:{requesting_managerial:1}})
}

async function update(id, params) {
    const user = await getUser(id);

    // validate
    const usernameChanged = params.username && user.username !== params.username;
    if (usernameChanged && await db.User.findOne({ where: { username: params.username } })) {
        throw 'Username "' + params.username + '" is already taken';
    }

    // hash password if it was entered
    if (params.password) {
        params.hash = await bcrypt.hash(params.password, 10);
    }

    // copy params to user and save
    Object.assign(user, params);
    await user.save();

    return omitHash(user.get());
}

async function _delete(id) {
    const user = await getUser(id);
    await user.destroy();
}
async function deleteByUserName(name) {
    const user = await db.User.findOne({where:{username:name}});
    if (!user )throw 'Username is incorrect';
    await user.destroy();
}

// helper functions

async function getUser(username) {
    const user = await db.User.findByPk(username);
    if (!user) throw 'User not found';
    return user;
}

function omitHash(user) {
    const { hash, ...userWithoutHash } = user;
    return userWithoutHash;
}