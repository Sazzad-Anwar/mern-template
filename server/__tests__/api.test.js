const request = require("supertest");
const app = require("../app.js");
const db = require("../config/db/testDb");
const jwt_decode = require("jwt-decode");

beforeAll(async () => await db.connect());
afterAll(async () => await db.close());

let testApp = request(app);

let accessToken = "";
let superAdmin = {};
let user = {};
let userRole = {};
let superAdminRole = {};
let userAccessToken = "";
let refreshToken = "";

/*
 * ********************* Test case for checking api **********************************
 */
describe("Check API", () => {
  it("should return 200", async () => {
    const res = await testApp.get("/api/v1/checkStatus");
    expect(res.status).toBe(200);
  });
});

/*
 * *********************** @Description: Registration route test ***********************
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
        role: "superadmin",
      });

      expect(res.status).toBe(201);
      expect(res.body.data).toBeDefined();
      superAdmin = jwt_decode(res.body.data.accessToken);
      accessToken = res.body.data.accessToken;
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
        role: "user",
      });

      await testApp
        .post("/roles")
        .send({ role: "superadmin", accessRoutes: "*" });

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

  // Check user session
  describe("Check Session:/api/v1/auth/checkSession", () => {
    it("Should return 200 if the user has active session", async () => {
      const res = await testApp
        .get("/api/v1/auth/checkSession")
        .set("Authorization", `Bearer ${accessToken}`);
      expect(res.status).toBe(200);
    });

    it("Should return 401 if the user has no active session", async () => {
      const res = await testApp.get("/api/v1/auth/checkSession");
      expect(res.status).toBe(401);
    });
  });
});

/*
 * **************************** @Description: Test for Role ******************************
 */
describe("Role route", () => {
  describe("Create a role:/api/v1/roles", () => {
    it("Should return 201 status code and set the access routes for admin", async () => {
      const res = await testApp
        .post("/api/v1/roles")
        .set("Authorization", `Bearer ${accessToken}`)
        .expect("Content-Type", /json/)
        .send({
          role: "Admin",
          accessRoutes: [
            "GET/api/v1/users",
            "POST/api/v1/users",
            "PUT/api/v1/users",
            "DEL/api/v1/users",
          ],
        });
      expect(res.status).toBe(201);
      superAdminRole = res.body.data;
    });

    it("Should return 201 status code and set the access routes for users", async () => {
      const res = await testApp
        .post("/api/v1/roles")
        .set("Authorization", `Bearer ${accessToken}`)
        .expect("Content-Type", /json/)
        .send({
          role: "user",
          accessRoutes: ["GET/api/v1/users", "PUT/api/v1/users"],
        });
      expect(res.status).toBe(201);
      userRole = res.body.data;
    });

    it("Should return 403 status code if the user is not super admin", async () => {
      const res = await testApp
        .post("/api/v1/roles")
        .expect("Content-Type", /json/)
        .send({
          role: "user",
          accessRoutes: ["GET/api/v1/users", "PUT/api/v1/users"],
        });
      expect(res.status).toBe(401);
    });
  });

  describe("Get role list:/api/v1/roles", () => {
    it("Should return 200", async () => {
      const res = await testApp
        .get("/api/v1/roles")
        .set("Authorization", `Bearer ${accessToken}`);
      expect(res.status).toBe(200);
      expect(res.body.status).toBe("success");
      expect(res.body.data).toBeDefined();
    });
  });

  describe("Update a role:/api/v1/roles/:id", () => {
    it("Should return 200", async () => {
      const res = await testApp
        .put(`/api/v1/roles/${userRole._id}`)
        .set("Authorization", `Bearer ${accessToken}`)
        .send({
          role: "admin",
          accessRoutes: ["GET/api/v1/users", "PUT/api/v1/users"],
        });
      expect(res.status).toBe(200);
      expect(res.body.status).toBe("success");
      expect(res.body.data).toBeDefined();
    });
  });

  describe("Delete role list:/api/v1/roles/:id", () => {
    it("Should return 200", async () => {
      const res = await testApp
        .delete(`/api/v1/roles/${userRole._id}`)
        .set("Authorization", `Bearer ${accessToken}`);
      expect(res.status).toBe(200);
      expect(res.body.status).toBe("success");
    });
  });
});

/*
 * **************************** @Description: Get all users list as Super admin ***********************
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
  });

  /*
   * ********************************* @Description: Update a user details ***************************
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
            role: "user",
          });
        expect(res.status).toBe(200);
        expect(res.body.status).toBe("success");
      });
    });
  });
});

/*
 * ************************* @Description: Test the api route for role management ****************************
 */
describe("Get all api routes:/api/v1/", () => {
  it("Should return 200", async () => {
    const res = await testApp
      .get("/api/v1/getAPI")
      .set("Authorization", `Bearer ${accessToken}`);
    expect(res.status).toBe(200);
    expect(res.body.status).toBe("success");
  });
});

/*
 * ************************* @Description: Test the category routes ****************************
 */
describe("Category Routes", () => {
  let category = {};
  describe("Create category:/api/v1/categories", () => {
    describe("If the user is admin", () => {
      it("Should return 201", async () => {
        const res = await testApp
          .post("/api/v1/categories")
          .set("Authorization", `Bearer ${accessToken}`)
          .send({
            name: "test-category-parent",
            image: "https://via.placeholder.com/150",
          });
        category = res.body.data;
        expect(res.status).toBe(201);
        expect(res.body.status).toBe("success");
      });
    });

    describe("If the user is admin", () => {
      it("Should return 201", async () => {
        const res = await testApp
          .post("/api/v1/categories")
          .set("Authorization", `Bearer ${accessToken}`)
          .send({
            name: "test-category-children",
            parent: "test-category-parent",
            image: "https://via.placeholder.com/150",
          });
        category = res.body.data;
        expect(res.status).toBe(201);
        expect(res.body.status).toBe("success");
      });
    });
  });

  describe("Get a specific category:/api/v1/categories/:id", () => {
    it("Should return 200", async () => {
      const res = await testApp.get(`/api/v1/categories/${category._id}`);
      expect(res.status).toBe(200);
      expect(res.body.status).toBe("success");
    });
  });
});

/*
 * ************************* @Description: Test the error-logs routes ****************************
 */
describe("Error log routes", () => {
  describe("Get all error logs:/api/v1/error-logs", () => {
    it("Should return 200 if the user is super admin", async () => {
      const res = await testApp
        .get("/api/v1/error-logs")
        .set("Authorization", `Bearer ${accessToken}`);
      expect(res.status).toBe(200);
      expect(res.body.status).toBe("success");
    });
  });
});

/*
 * ************************* @Description: Test the folders routes ****************************
 */

describe("Folder routes", () => {
  let folder = {};

  describe("Create folders:/api/v1/folders", () => {
    it("Should return 201 status code", async () => {
      const res = await testApp
        .post("/api/v1/folders")
        .set("Authorization", `Bearer ${accessToken}`)
        .send({
          name: "test-folder",
        });
      expect(res.status).toBe(201);
      expect(res.body.status).toBe("success");
      folder = res.body.data;
    });
  });

  describe("Get all folders:/api/v1/folders", () => {
    it("Should return 200 status code", async () => {
      const res = await testApp
        .get("/api/v1/folders")
        .set("Authorization", `Bearer ${accessToken}`);
      expect(res.status).toBe(200);
      expect(res.body.status).toBe("success");
    });
  });

  describe("Update a folder:/api/v1/folders/:id", () => {
    it("Should return 200 status code", async () => {
      const res = await testApp
        .put(`/api/v1/folders/${folder._id}`)
        .set("Authorization", `Bearer ${accessToken}`)
        .send({
          name: "test-folder-updated",
        });
      expect(res.status).toBe(200);
      expect(res.body.status).toBe("success");
    });
  });

  describe("Delete a folder/api/v1/folders/:id", () => {
    it("Should return 200 status code", async () => {
      const res = await testApp
        .delete(`/api/v1/folders/${folder._id}`)
        .set("Authorization", `Bearer ${accessToken}`);
      expect(res.status).toBe(200);
      expect(res.body.status).toBe("success");
    });
  });
});

/*
 * @Description: Delete a user
 */
describe(`Delete a user:/api/v1/users/:id`, () => {
  describe("If the login user is 'Super Admin'", () => {
    it("Should return 200", async () => {
      const res = await testApp
        .delete(`/api/v1/users/${user._id}`)
        .set("Authorization", `Bearer ${accessToken}`);
      expect(res.status).toBe(200);
      expect(res.body.status).toBe("success");
    });
  });
});
