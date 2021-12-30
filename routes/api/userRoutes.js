const router = require('express').Router();
const{
getUsers,
createUser,
getSingleUser,
deleteUser,
updateUser,
/*addFriend,
deleteFriend, */
} = require('../../controllers/userController.js');

// api/users/ - get all users and create a new user

router.route('/').get(getUsers).post(createUser);

// api/users/:userId - get a single user by id, update and delete a user and associated thoughts

router.route('/:userId').get(getSingleUser).put(updateUser).delete(deleteUser);

//api/users/:userId/friends/:friendId - To add a friend to the friends list

//router.route('/:userId/friends/:friendId').post(addFriend);

// api/users/:userId/friends/:friendId - remove a friend from the friends list

//router.route('/:userId/friends/:friendId').delete(deleteFriend);

module.exports = router;
