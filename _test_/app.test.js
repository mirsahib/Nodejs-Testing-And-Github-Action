// Add import statements

const { app, server, mongoose } = require("../app.js"); // runs app.js
const Article = require("./../article.model"); // imports Article model
const request = require("supertest"); // needed to make API requests

describe("When the article CRUD server is running", () => {
  // Add individual test cases
  it("should return 200 response if GET request to '/'", async () => {
    const res = await request(app).get("/");
    expect(res.status).toBe(200);
    expect(res.body.message).toBe("ok");
  });

  it("should return 200 response if POST request receives proper article data", async () => {
    const res = await request(app)
      .post("/article/new")
      .send({ title: "test", content: "test" });
    expect(res.status).toBe(200);
    expect(typeof res.body).toEqual("object");
  });

  it("should return 400 response if POST request data is missing the article title", async () => {
    const res = await request(app)
      .post("/article/new")
      .send({ content: "test" });
    expect(res.status).toBe(400);
    expect(typeof res.body).toEqual("object");
  });
  //test driven implementation
  it("should return 200 response and all the articles in DB on GET request to '/article/all'", async () => {
    const res = await request(app).get("/articles/all");
    expect(res.status).toBe(200);
    expect(res.body.length).toEqual(1);
  });

  afterAll(async () => {
    await server.close();
    await mongoose.connection.db.dropDatabase();
    await mongoose.connection.close();
  });
});
