import {
  getFirstDayAndEndDayOfMonth,
  getFirstDayAndEndDayOfWeek,
  isInRange,
} from "../../../src/range/range";
import dayjs from "dayjs";

describe("test getFirstDayAndEndDayOfMonth use 2022-03", () => {
  it("pass string format YYYY-MM-DD", () => {
    const result = getFirstDayAndEndDayOfMonth("2022-03", "YYYY-MM-DD");
    console.log(`result:${result}`);
    expect("2022-03-01,2022-03-31").to.equal(result.toString());
  });

  it("pass dayjs format YYYY-MM-DD", () => {
    const result = getFirstDayAndEndDayOfMonth(dayjs("2022-03"), "YYYY-MM-DD");
    console.log(`result:${result}`);
    expect("2022-03-01,2022-03-31").to.equal(result.toString());
  });
});

describe("test getFirstDayAndEndDayOfWeek use 2022-03-11", () => {
  it("pass string format YYYY-MM-DD", () => {
    const result = getFirstDayAndEndDayOfWeek("2022-03-11", "YYYY-MM-DD");
    console.log(`result:${result}`);
    expect("2022-03-07,2022-03-13").to.equal(result.toString());
  });

  it("pass dayjs format YYYY-MM-DD", () => {
    const result = getFirstDayAndEndDayOfWeek(
      dayjs("2022-03-11"),
      "YYYY-MM-DD"
    );
    console.log(`result:${result}`);
    expect("2022-03-07,2022-03-13").to.equal(result.toString());
  });
});

describe("test isInRange use 2022-01-01 and 2022-03-12", () => {
  it("pass date 2022-01-01", () => {
    const result = isInRange("2022-01-01", "2022-01-01", "2022-03-12");
    expect(true).to.equal(result);
  });

  it("pass date 2022-01-02", () => {
    const result = isInRange("2022-01-02", "2022-01-01", "2022-03-12");
    expect(true).to.equal(result);
  });

  it("pass date 2022-03-12", () => {
    const result = isInRange("2022-03-12", "2022-01-01", "2022-03-12");
    expect(true).to.equal(result);
  });

  it("pass 2021-12-31", () => {
    const result = isInRange("2021-12-31", "2022-01-01", "2022-03-12");
    expect(false).to.equal(result);
  });

  it("pass 2022-03-13", () => {
    const result = isInRange("2022-03-13", "2022-01-01", "2022-03-12");
    expect(false).to.equal(result);
  });
});
