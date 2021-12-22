const User, Thought, Reactions = require('../models');

module.exports = {
    // Get all users
    getUsers(req, res) {
        User.find()
            .then(async (users) => {

                return res.json(users);
            })
            .catch((err) => {
                console.log(err);
                return res.status(500).json(err);
            });
    },
}