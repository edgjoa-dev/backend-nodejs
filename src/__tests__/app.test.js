const request = require('supertest');
const dotenv = require('dotenv');
const Server = require('../models/server.model');
dotenv.config();


describe('App Initialization', () => {
  let serverInstance;

  beforeAll(() => {
    serverInstance = new Server();
  });

  it('should initialize the server and listen on the specified port', () => {
    expect(serverInstance.port).toBe(process.env.PORT);
  });

  it('should respond to GET / with Hello, World!', async () => {
    const response = await request(serverInstance.app).get('/');
    expect(response.status).toBe(200);
    expect(response.text).toContain('Aplicación Frontend');
  });
});
