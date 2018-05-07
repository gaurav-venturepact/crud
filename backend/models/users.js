var mongoose        =   require('mongoose');
var Promise         =   require('bluebird');

Promise.promisifyAll(mongoose);

var adminUserSchema = new mongoose.Schema({
    firstName: String,
    lastName: String,
    email: String,
    password: String
}, { versionKey: false });

var AdminUser = mongoose.model('AdminUser', adminUserSchema);

module.exports = AdminUser;