const request = require('supertest');
const app = require('../app');

describe('GET /api/movies/:id', () => {
  describe('GET /api/movies/1', () => {
    it('should return status 200 and JSON format', async () => {
      const response = await request(app).get('/api/movies/1');
      expect(response.status).toEqual(200);
      expect(response.headers['content-type']).toMatch(/json/);
    });
  });

  describe('GET /api/movies/0', () => {
    it('should return status 404', async () => {
      const response = await request(app).get('/api/movies/0');
      expect(response.status).toEqual(404);
    });
  });
});
