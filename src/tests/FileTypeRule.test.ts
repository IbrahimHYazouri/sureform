import FileType from "../rules/FileType";

describe("FileTypeRule", () => {
  const r = new FileType();
  const types = ["image/png", "image/jpg"];

  it("passes with valid types", () => {
    expect(r.validate({ type: "image/png" }, types)).toBe(true);
  });

  it("fails with invalid types", () => {
    expect(r.validate({ type: "image/svg" }, types)).toBe(false);
  });
});
