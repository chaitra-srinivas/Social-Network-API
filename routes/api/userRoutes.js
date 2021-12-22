const router = require('express').Router();
const{
getUsers,
getSingleUser,
createUser,
updateUser,
deleteUser,
addFriend,
deleteFriend,
} = require('../../controllers/userController');

// api/users/ - get all users

router.route('/').get(getUsers).post(createUser);

// api/users/:userId - get a single user by id

router.route('/:userId').get(getSingleUser).put(updateUser).delete(deleteUser);


//api/users/:userId/friends/:friendId - To add a friend to the friends list

router.route('/:userId/friends/:friendId').post(addFriend);

// api/users/:userId/friends/:friendId - remove a friend from the friends list

router.route('/:userId/friends/:friendId').delete(deleteFriend);

module.exports = router;
