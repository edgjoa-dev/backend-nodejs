const { getAllUsers, getUserForId, postUser, putUser, deleteUser } = require('../../controllers/users.controller');

describe('User Controllers', () => {
  let req, res;

  beforeEach(() => {
    req = {};
    res = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn()
    };
  });

  test('should return status 200 and message for getAllUsers', () => {
    getAllUsers(req, res);
    expect(res.status).toHaveBeenCalledWith(200);
    expect(res.json).toHaveBeenCalledWith({ message: 'Get All users' });
  });

  test('should return status 200 and message for getUserForId', () => {
    getUserForId(req, res);
    expect(res.status).toHaveBeenCalledWith(200);
    expect(res.json).toHaveBeenCalledWith({ message: 'Get users for ID ' });
  });

  test('should return status 200 and message for postUser', () => {
    postUser(req, res);
    expect(res.status).toHaveBeenCalledWith(200);
    expect(res.json).toHaveBeenCalledWith({ message: 'Create new user ' });
  });

  test('should return status 200 and message for putUser', () => {
    putUser(req, res);
    expect(res.status).toHaveBeenCalledWith(200);
    expect(res.json).toHaveBeenCalledWith({ message: 'Edit user info ' });
  });

  test('should return status 200 and message for deleteUser', () => {
    deleteUser(req, res);
    expect(res.status).toHaveBeenCalledWith(200);
    expect(res.json).toHaveBeenCalledWith({ message: 'Delete user' });
  });
});
