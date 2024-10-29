const request = require('supertest');
const express = require('express');
const { router } = require('../../routes/user.routes');

const app = express();
app.use(express.json()); // Soporta JSON en las solicitudes
app.use('/users', router);

describe('User Routes', () => {
  it('GET /users should return 200 and message "Get All users"', async () => {
    const response = await request(app).get('/users');
    expect(response.status).toBe(200);
    expect(response.body).toEqual({ message: 'Get All users' });
  });

  it('GET /users/:id should return 200 and message "Get users for ID "', async () => {
    const response = await request(app).get('/users/123');
    expect(response.status).toBe(200);
    expect(response.body).toEqual({ message: 'Get users for ID ' });
  });

  it('POST /users should return 200 and message "Create new user "', async () => {
    const response = await request(app).post('/users').send({ name: 'John Doe' });
    expect(response.status).toBe(200);
    expect(response.body).toEqual({ message: 'Create new user ' });
  });

  it('PUT /users should return 200 and message "Edit user info "', async () => {
    const response = await request(app).put('/users').send({ id: '123', name: 'Updated Name' });
    expect(response.status).toBe(200);
    expect(response.body).toEqual({ message: 'Edit user info ' });
  });

  it('DELETE /users should return 200 and message "Delete user"', async () => {
    const response = await request(app).delete('/users').send({ id: '123' });
    expect(response.status).toBe(200);
    expect(response.body).toEqual({ message: 'Delete user' });
  });
});
