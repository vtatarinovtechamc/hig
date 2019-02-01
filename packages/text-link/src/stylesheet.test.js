import stylesheet from "./stylesheet";

describe("stylesheet", () => {
  const subject = ({ hasHover, hasFocus }) =>
    stylesheet({ hasHover, hasFocus }, {});

  it("returns an oject", () => {
    expect(subject({})).toEqual(expect.any(Object));
  });

  describe("when hasHover=true", () => {
    it("should set the correct style", () => {
      expect(subject({ hasHover: true }).textDecoration).toEqual("underline");
    });
  });

  describe("when hasFocus=true", () => {
    it("should set the correct style", () => {
      expect(subject({ hasFocus: true }).outline).toMatch(/solid/);
    });
  });
});
