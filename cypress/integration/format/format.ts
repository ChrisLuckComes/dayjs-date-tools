import { format, getChineseMonth } from "@/index";

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

describe("test getChineseMonth", () => {
  it("pass 2022-03", () => {
    const result = getChineseMonth("2022-03");
    console.log(`result:${result}`);
    expect("3月").to.equal(result);
  });
});

