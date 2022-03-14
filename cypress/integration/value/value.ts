import { getMonth, getWeek, getStartOfWeek, getEndOfWeek } from "@/index";

describe("test getMonth", () => {
  it("pass 2022-03", () => {
    const result = getMonth("2022-03");
    console.log(`result:${result}`);
    expect(3).to.equal(result);
  });
});

describe("test getWeek", () => {
  it("pass 2022-01-01", () => {
    const result = getWeek("2022-01-02");
    expect(52).to.equal(result);
  });

  it("pass 2022-12-31", () => {
    const result = getWeek("2022-12-31");
    expect(52).to.equal(result);
  });

  it("pass 2022-01-03", () => {
    const result = getWeek("2022-01-03");
    expect(1).to.equal(result);
  });

  it("pass 2022-01-10", () => {
    const result = getWeek("2022-01-10");
    expect(2).to.equal(result);
  });
});

describe("test getStartOfWeek", () => {
  it("pass 2022-03-14", () => {
    const result = getStartOfWeek("2022-03-14");
    expect("2022-03-14").to.equal(result);
  });

  it("pass 2022-03-13", () => {
    const result = getStartOfWeek("2022-03-13");
    expect("2022-03-07").to.equal(result);
  });
});

describe("test getEndOfWeek", () => {
  it("pass 2022-03-14", () => {
    const result = getEndOfWeek("2022-03-14");
    expect("2022-03-20").to.equal(result);
  });

  it("pass 2022-03-13", () => {
    const result = getEndOfWeek("2022-03-13");
    expect("2022-03-13").to.equal(result);
  });
});
