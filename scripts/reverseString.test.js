const reverseString = require("./reverseString");

describe("Reverse String", () => {
  it("should reverse one word", () => {
    expect(reverseString("string")).toBe("gnirts");
  });

  it("should reverse two words", () => {
    expect(reverseString("Joel Angelo")).toBe("olegnA leoJ");
  });

  it("should reverse numbers and special characters", () => {
    expect(reverseString("baldapan_joel@gmail.com")).toBe(
      "moc.liamg@leoj_napadlab"
    );
  });

  it("should return nothing when undefined is passed", () => {
    expect(reverseString()).toBe("");
  });
});
