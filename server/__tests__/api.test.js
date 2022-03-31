import request from 'supertest';
import app from '../app.js';
import { close, connect } from '../config/db/testDb.js';

beforeAll(async () => await connect());
afterAll(async () => await close());

let testApp = request(app);

let accessToken = '';
let refreshToken = '';

// Test case for checking api
describe('Check API', () => {
    it('should return 200', async () => {
        const response = await testApp.get('/api/v1/checkStatus');
        expect(response.status).toBe(200);
    })
})