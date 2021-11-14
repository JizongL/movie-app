const { expect } = require("chai");
const supertest = require("supertest");
const app = require("../app");

describe("Movie App API Test Suite", () => {
  it("should get a healthy message", () => {
    return supertest(app).get("/ping").expect(200, "healthy");
  });
  it("should return 200 when /search endpoint is query", () => {
    return supertest(app).get("/search").expect(200);
  });
  it("should return 200 when /details/:imdb_id is queried", () => {
    const mockImbdId = "tt2935510";
    return supertest(app).get(`/details/${mockImbdId}`).expect(200);
  });
  it("should return 404 when /details/:imdb_id is queried and imdbId is not provided", () => {
    return supertest(app).get(`/details`).expect(404);
  });
  it("should return 200 when /images/:imdb_id is queried", () => {
    const mockImbdId = "tt2935510";
    return supertest(app).get(`/images/${mockImbdId}`).expect(200);
  });
  it("should return 404 when /images/:imdbId is queried and imdbId is not provided", () => {
    return supertest(app).get(`/images`).expect(404);
  });
});
