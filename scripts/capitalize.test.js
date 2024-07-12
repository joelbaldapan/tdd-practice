const capitalize = require("./capitalize");

describe("Capitalize", () => {
  it("should capitalize one word", () => {
    expect(capitalize("test")).toBe("Test");
  });

  it("should capitalize two words", () => {
    expect(capitalize("joel angelo")).toBe("Joel Angelo");
  });

  it("should ignore numbers", () => {
    expect(capitalize("123")).toBe("123");
  });

  it("should ignore special characters", () => {
    expect(capitalize("@gmail.com")).toBe("@gmail.com");
  });

  it("should ignore special characters while still working", () => {
    expect(capitalize("my email: @gmail.com")).toBe("My Email: @gmail.com");
  });

  it("should return nothing when undefined is passed", () => {
    expect(capitalize()).toBe("");
  });

});
