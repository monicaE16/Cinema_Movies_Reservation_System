const express = require('express');
const config = require('config.json');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const db = require('_helpers/db');
var Sequelize = require('sequelize');
const { user, password, database } = config.database;
const sequelize = new Sequelize(database, user, password, { dialect: 'mysql' });
const departmentService = require('services/department.service');
const practiceService = require('services/practice.service');
const activityService = require('services/activity.service');
const badgeService = require('services/badge.service');
const cycleService = require('./cycle.service');
const exportService = require('services/export.service');

module.exports = {
    authenticate,
    getAll,
    getById,
    getTopUsers,
    getTopUser,
    getTops,
    getMyRank,
    getMyRankDev,
    getMyPoints,
    getMyPointsCycle,
    add_points,
    exportTopUsers,
    confirm_byAdmin,
    create,
    declineActivity,
    changePassword,
    update,
    delete: _delete
};

async function confirm_byAdmin(body) {
    const activity = await activityService.getById(body.activity_id);
    if (!activity)
        throw 'Activity not found';
    const employee = await getById(body.username);
    if (!employee)
        throw 'User not found';
    console.log("Started")
    add_points(employee.username, activity.points);
    practiceService.add_points(employee.currentPractice, activity.points);
    departmentService.add_points(employee.username, activity.points);
    badgeService.Check_Adding_badge(employee.username);

    //confirm
    const cycle = await cycleService.getCurrent();
    const row = await db.User_Activity.update(
        {
            is_confirmed: true
        },
        {
            where:
            {
                username: body.username,
                activity_id: body.activity_id,
                cycle_id: cycle[0].id
            }
        });
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

async function getTops(cycle_id) {
    console.log(cycle_id)
    var arr = []
    arr.push(await departmentService.getTopDepartment(cycle_id))
    arr.push(await practiceService.getTopPractice(cycle_id))
    arr.push(await getTopUser(cycle_id))
    return arr;
}

async function getTopUsers(genre) {
    return await getTopUsers_(genre);
}

async function getById(username) {
    return await getUser(username);
}

async function getMyRank(username) {
    return await calculateRank(username);
}
async function getMyRankDev(username, role) {
    return await calculateRankDev(username, role);
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
async function changePassword(user_obj, oldpass, newpass) {

    const user = await db.User.scope('withHash').findOne({ where: { username:user_obj.username } });
    console.log(user.password);
    if (!(await bcrypt.compare(oldpass, user.hash)))
        throw 'password is incorrect';
    const pass = await bcrypt.hash(newpass, 10);
    await db.User.update(
        {
            hash: pass
        },
        {
            where:
            {
                username: user_obj.username
            }
        }

    )
}

async function declineActivity(params) {
    var cycle = await cycleService.getCurrent();

    const rec = await db.User_Activity.destroy({
        where: {
            username: params.username,
            activity_id: params.activity_id,
            cycle_id: cycle[0].id
        }
    });
    if (rec == 0) throw "User hasn't submitted this activity or user doesn't exist"
}

async function getTopUsers_(genre) {
    var list = [];
    if (genre == 'D') {
        const my_query = 'SELECT firstName, lastName, points, image_url, position FROM USERS WHERE role = "D" ORDER BY points DESC';
        list = await sequelize.query(my_query, { type: Sequelize.QueryTypes.SELECT });
    } else if (genre == 'N') {
        const my_query = 'SELECT firstName, lastName, points, image_url, position FROM USERS WHERE role = "N" ORDER BY points DESC';
        list = await sequelize.query(my_query, { type: Sequelize.QueryTypes.SELECT });
    } else if (genre == 'B') {
        const my_query = 'SELECT firstName, lastName, points, image_url, position FROM USERS WHERE role IN ("D","N") ORDER BY points DESC';
        list = await sequelize.query(my_query, { type: Sequelize.QueryTypes.SELECT });
    } else return;
    if (!list) throw 'No users not found';
    return list;
}
async function calculateRank(user_obj) {
    const my_query = 'SELECT count(distinct points) AS rank from users where points>=' + user_obj.points;
    const rank = await sequelize.query(my_query, { type: Sequelize.QueryTypes.SELECT });
    if (!rank) throw 'User not found';
    return rank;
}
async function getTopUser(cycle_id) {
    var cycle = await cycleService.getCurrent();
    if (cycle_id == cycle[0].id) {
        var my_query = 'SELECT username, MAX(points) points, firstName, lastName, image_url, role FROM users WHERE points = (SELECT MAX(points) FROM users)';
    } else {
        var my_query = 'SELECT users.username, firstName, lastName ,image_url, pts points, role FROM users INNER JOIN (SELECT MAX(points) pts ,username FROM user_points_historicals WHERE points = (SELECT MAX(points) FROM user_points_historicals WHERE cycle_id = ' + cycle_id + ') AND cycle_id = ' + cycle_id + ') A WHERE A.username = users.username';
    }
    const user = await sequelize.query(my_query, { type: Sequelize.QueryTypes.SELECT });
    return user;
}
async function calculateRankDev(user_obj) {
    const my_query = 'SELECT count(distinct points) AS rank from users where points>=' + user_obj.points + ' and role="' + user_obj.role + '"';
    const rank = await sequelize.query(my_query, { type: Sequelize.QueryTypes.SELECT });
    if (!rank) throw 'User not found';
    return rank;
}

async function add_points(id, reward_points) {
    const user = await getUser(id);
    Object.assign(user, { points: user.points + reward_points });
    await user.save();
}

async function exportTopUsers(genre) {
    const users = await getTopUsers_(genre)
    const workSheetColumnName = [
        "firstName",
        "lastName",
        "points",
        "image_url",
        "position"
    ]
    const workSheetName = 'Users';
    const filePath = './outputFiles/excel-from-js.xlsx';
    await exportService.exportUsersToExcel(users, workSheetColumnName, workSheetName, filePath);
}

async function getMyPoints(obj) {
    console.log(obj.points);
    return obj.points;
}
async function getMyPointsCycle(obj, id) {
    var my_query = "SELECT SUM(points) AS points FROM user_activities JOIN activities on activities.id=user_activities.activity_id WHERE username=:user AND cycle_id=:cycle";
    const sum = await sequelize.query(my_query,
        {
            replacements:
            {
                cycle: id,
                for_dev: obj.role,
                user:obj.username
            },
            type: Sequelize.QueryTypes.SELECT
        });

    return sum;
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