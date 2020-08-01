"use strict"

const mySql = require('mysql');
const db = require('../database.json').development;
const pool = mySql.createPool(db);

const mySqlConnection = () => {
    return new Promise((resolve, reject) => {
        pool.getConnection(function (err, connection) {
            if (err) {
                reject(err);
            } else {
                resolve(connection);
            }
        });
    });
}

module.exports = {
    mySqlConnection
}
