const { request, response } = require("express");


const getAllUsers = (req=request, res=response) => {
    res.status(200).json({
        message: 'Get All users',
    });
}

const getUserForId = (req=request, res=response) => {
    res.status(200).json({
        message: 'Get users for ID ',
    });
}

const postUser = (req=request, res=response) => {
    res.status(200).json({
        message: 'Create new user ',
    });
}

const putUser = (req=request, res=response) => {
    res.status(200).json({
        message: 'Edit user info ',
    });
}

const deleteUser = (req=request, res=response) => {
    res.status(200).json({
        message: 'Delete user',
    });
}


module.exports = {
    getAllUsers,
    getUserForId,
    postUser,
    putUser,
    deleteUser,
}