
const env = require('dotenv').config();
var Cloudant = require('@cloudant/cloudant');
var cloudant = Cloudant({ url: process.env.my_url, plugins: [{ iamauth: { iamApiKey: process.env.my_iamApiKey, autoRenew: false } }] });
let db_user = cloudant.use('users');
let db_hall = cloudant.use('halls');
let db_history = cloudant.use('history');

module.exports = {
    db_users: db_user,
    db_halls: db_hall,
    db_histories: db_history
};
