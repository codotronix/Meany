/*
 * This file just tactically returns whatver is returned by 
 * deveopment.js or production.js
 */
module.exports = require('./env/' + process.env.NODE_ENV + '.js');