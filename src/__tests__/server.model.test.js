const request = require('supertest');
const Server = require('../models/server.model');

describe('Server', () => {
  let server;
  beforeAll(() => {
    // Configuración de la variable de entorno para el puerto
    process.env.PORT = 3000; // o cualquier puerto de prueba que prefieras
    server = new Server();
  });

  it('should initialize express application', () => {
    expect(server.app).toBeDefined();
  });

  it('should serve static files from public folder', () => {
    const middlewares = server.app._router.stack; // Stack de middlewares
    const staticMiddleware = middlewares.find(
      (middleware) => middleware.name === 'serveStatic'
    );
    expect(staticMiddleware).toBeDefined();
  });

  it('should respond to GET / Aplicación Frontend', async () => {
    const response = await request(server.app).get('/');
    expect(response.status).toBe(200);
    expect(response.text).toContain('Aplicación Frontend');
  });
});
