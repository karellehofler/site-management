const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    name: { type: String, require: true },
    username: { type: String, require: true },
    email: { type: String, require: true },
    password: { type: String, require: true },
    joined: { type: Date, default: Date.now },
    last_updated: { type: Date, default: null },
    tagline: { type: String, default: null },
    theme_color: { type: String, default: "#FFFFFF"},
    contact_info: { type: Array, default: [] },
    social_media: { type: Array, default: [] }
});

module.exports = User = mongoose.model('user', UserSchema);

module.exports.findByUsername = function(username, callback) {
    const query = {username}
    User.findOne(query, callback);
};

module.exports.findByEmail = function(email, callback) {
    const query = {email}
    User.findOne(query, callback);
}