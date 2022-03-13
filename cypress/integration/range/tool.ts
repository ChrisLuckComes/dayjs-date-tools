import { isSameOrAfter, isSameOrBefore } from "@/tool/tool";

describe("test isSameOrBefore", () => {
  it("pass same date 2022-03-12 and 2022-03-12", () => {
    const result = isSameOrBefore("2022-03-12", "2022-03-12");
    expect(true).to.equal(result);
  });

  it("pass 2022-03-11 and 2022-03-12", () => {
    const result = isSameOrBefore("2022-03-11", "2022-03-12");
    expect(true).to.equal(result);
  });

  it("pass 2022-03-13 and 2022-03-12", () => {
    const result = isSameOrBefore("2022-03-13", "2022-03-12");
    expect(false).to.equal(result);
  });
});

describe("test isSameOrAfter", () => {
  it("pass same date 2022-03-12 and 2022-03-12", () => {
    const result = isSameOrAfter("2022-03-12", "2022-03-12");
    expect(true).to.equal(result);
  });

  it("pass 2022-03-13 and 2022-03-12", () => {
    const result = isSameOrAfter("2022-03-13", "2022-03-12");
    expect(true).to.equal(result);
  });

  it("pass 2022-03-11 and 2022-03-12", () => {
    const result = isSameOrAfter("2022-03-11", "2022-03-12");
    expect(false).to.equal(result);
  });
});
