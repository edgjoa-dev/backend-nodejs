const { Router } = require('express');
const { getAllUsers, getUserForId, postUser, putUser, deleteUser } = require('../controllers/users.controller');


const router = Router();


router.get('/', getAllUsers);

router.get('/:id', getUserForId);

router.post('/', postUser);

router.put('/', putUser);

router.delete('/', deleteUser);




module.exports = {
    router,
}