const request = require("supertest");
const { set } = require("../app.js");
const app = require("../app.js");
const db = require("../config/db/testDb");
const jwt_decode = require("jwt-decode");

beforeAll(async () => await db.connect());
afterAll(async () => await db.close());

let testApp = request(app);

let accessToken = "";
let superAdmin = {};
let user = {};
let userAccessToken = "";
let refreshToken = "";

/*
 * Test case for checking api
 */
describe("Check API", () => {
  it("should return 200", async () => {
    const res = await testApp.get("/api/v1/checkStatus");
    expect(res.status).toBe(200);
  });
});

/*
 * @Description: Registration route test
 */
describe("Auth Route", () => {
  // Register
  describe("Registration:/api/v1/auth/registration", () => {
    it("Should return 201", async () => {
      const res = await testApp.post("/api/v1/auth/registration").send({
        name: "Medi Career",
        email: "admin@mail.com",
        phoneNumber: "01834123456",
        password: "admin123456",
        role: ["superAdmin"],
      });

      expect(res.status).toBe(201);
      expect(res.body.data).toBeDefined();
      superAdmin = jwt_decode(res.body.data.accessToken);
    });
  });

  // Register as user
  describe("Registration:/api/v1/auth/registration", () => {
    it("Should return 201", async () => {
      const res = await testApp.post("/api/v1/auth/registration").send({
        name: "John Doe",
        email: "johnDoe@mail.com",
        phoneNumber: "01712123456",
        password: "user123456",
        role: ["user"],
      });

      expect(res.status).toBe(201);
      expect(res.body.data).toBeDefined();
      user = jwt_decode(res.body.data.accessToken);
      userAccessToken = res.body.data.accessToken;
    });
  });

  // Login route
  describe("Login:/api/v1/auth/login", () => {
    it("Should return 200", async () => {
      const res = await testApp.post("/api/v1/auth/login").send({
        email: "admin@mail.com",
        password: "admin123456",
      });

      expect(res.status).toBe(200);
      expect(res.body.data.accessToken).toBeDefined();
      expect(res.body.data.refreshToken).toBeDefined();
      accessToken = res.body.data.accessToken;
    });
  });
});

/*
 * @Description: Get all users list as Super admin
 */
describe("Users route", () => {
  /*
   * @Description: Get all users list as Super admin
   */
  describe("Get all users:/api/v1/users", () => {
    describe("If the login user is 'Super Admin'", () => {
      it("Should return 200", async () => {
        const res = await testApp
          .get("/api/v1/users")
          .set("Authorization", `Bearer ${accessToken}`);
        expect(res.status).toBe(200);
        expect(res.body.status).toBe("success");
      });
    });

    describe("If the login user is not 'Super Admin'", () => {
      it("Should return 403", async () => {
        const res = await testApp
          .get("/api/v1/users")
          .set("Authorization", `Bearer ${userAccessToken}`);
        expect(res.status).toBe(403);
      });
    });
  });

  /*
   * @Description: Update a user details
   */
  describe(`Get all users:/api/v1/users/${user._id}`, () => {
    describe("If the login user is 'Super Admin'", () => {
      it("Should return 200", async () => {
        const res = await testApp
          .put(`/api/v1/users/${user._id}`)
          .set("Authorization", `Bearer ${accessToken}`)
          .expect("Content-Type", /json/)
          .send({
            name: "John Doe1",
            email: "johnDoe1@mail.com",
            phoneNumber: "01712123457",
            password: "user123456",
            role: ["user"],
          });
        expect(res.status).toBe(200);
        expect(res.body.status).toBe("success");
      });
    });

    describe("If the login user is not 'Super Admin'", () => {
      it("Should return 200", async () => {
        const res = await testApp
          .put(`/api/v1/users/${user._id}`)
          .set("Authorization", `Bearer ${userAccessToken}`)
          .expect("Content-Type", /json/)
          .send({
            name: "John Doe1",
            email: "johnDoe1@mail.com",
            phoneNumber: "01712123457",
            password: "user123456",
            role: ["user"],
          });
        expect(res.status).toBe(200);
        expect(res.body.status).toBe("success");
      });
    });
  });
});

/*
 * @Description: Delete a user
 */
describe(`Delete a user:/api/v1/users/${user._id}`, () => {
  describe("If the login user is 'Super Admin'", () => {
    it("Should return 200", async () => {
      const res = await testApp
        .delete(`/api/v1/users/${user._id}`)
        .set("Authorization", `Bearer ${accessToken}`);
      expect(res.status).toBe(200);
      expect(res.body.status).toBe("success");
    });
  });

  describe("If the login user is not 'Super Admin'", () => {
    it("Should return 403", async () => {
      const res = await testApp
        .delete(`/api/v1/users/${user._id}`)
        .set("Authorization", `Bearer ${userAccessToken}`);
      expect(res.status).toBe(403);
    });
  });
});
