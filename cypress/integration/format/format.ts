import { format, getMonth, getChineseMonth, getWeek } from "@/format/format";

describe("test format", () => {
  it("pass 2022/03/14 without format", () => {
    const result = format("2022/03/14");
    console.log(`result:${result}`);
    expect("2022-03-14").to.equal(result);
  });

  it("pass 2022-03-14, YYYY/MM/DD", () => {
    const result = format("2022-03-14", "YYYY/MM/DD");
    console.log(`result:${result}`);
    expect("2022/03/14").to.equal(result);
  });

  it("pass 2022-03-14, YYYY-MM", () => {
    const result = format("2022-03-14", "YYYY-MM");
    console.log(`result:${result}`);
    expect("2022-03").to.equal(result);
  });
});

describe("test getMonth", () => {
  it("pass 2022-03", () => {
    const result = getMonth("2022-03");
    console.log(`result:${result}`);
    expect(3).to.equal(result);
  });
});

describe("test getChineseMonth", () => {
  it("pass 2022-03", () => {
    const result = getChineseMonth("2022-03");
    console.log(`result:${result}`);
    expect("3月").to.equal(result);
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
