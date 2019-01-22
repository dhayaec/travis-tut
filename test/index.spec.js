const expect = require("chai").expect;
const server = require("../src/index");
const { add } = require("../src/utils");

describe("test", () => {
  it("should return a string", () => {
    expect("ci with travis").to.equal("ci with travis");
  });
  it("add two numbers", () => {
    expect(add(3, 3)).to.equal(6);
  });
});
