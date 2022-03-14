import {
  getFirstDayAndEndDayOfMonth,
  getFirstDayAndEndDayOfWeek,
  isBetween,
  diff,
  dayjs,
} from "@/index";

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
    const result = getFirstDayAndEndDayOfWeek(dayjs("2022-03-11"), "YYYY-MM-DD");
    console.log(`result:${result}`);
    expect("2022-03-07,2022-03-13").to.equal(result.toString());
  });
});

describe("test isBetween use 2022-01-01 and 2022-03-12", () => {
  it("pass date 2022-01-01", () => {
    const result = isBetween("2022-01-01", "2022-01-01", "2022-03-12");
    expect(true).to.equal(result);
  });

  it("pass date 2022-01-02", () => {
    const result = isBetween("2022-01-02", "2022-01-01", "2022-03-12");
    expect(true).to.equal(result);
  });

  it("pass date 2022-03-12", () => {
    const result = isBetween("2022-03-12", "2022-01-01", "2022-03-12");
    expect(true).to.equal(result);
  });

  it("pass 2021-12-31", () => {
    const result = isBetween("2021-12-31", "2022-01-01", "2022-03-12");
    expect(false).to.equal(result);
  });

  it("pass 2022-03-13", () => {
    const result = isBetween("2022-03-13", "2022-01-01", "2022-03-12");
    expect(false).to.equal(result);
  });
});

describe("test diff", () => {
  it("pass 2022-03-14 00:00:00,2022-03-13 23:59:59,without unit", () => {
    const result = diff("2022-03-14 00:00:00", "2022-03-13 23:59:59");
    expect(1000).to.equal(result);
  });

  it("pass 2022-03-14 00:00:00,2022-03-13 23:59:59,second", () => {
    const result = diff("2022-03-14 00:00:00", "2022-03-13 23:59:59", "second");
    expect(1).to.equal(result);
  });

  it("pass 2022-03-14 00:00:00,2022-03-13 23:59:00,minute", () => {
    const result = diff("2022-03-14 00:00:00", "2022-03-13 23:59:00", "minute");
    expect(1).to.equal(result);
  });

  it("pass 2022-03-14 01:00:00,2022-03-13 22:00:00,hour", () => {
    const result = diff("2022-03-14 1:00:00", "2022-03-13 22:00:00", "hour");
    expect(3).to.equal(result);
  });

  it("pass 2022-03-14,2022-03-13,day", () => {
    const result = diff("2022-03-14", "2022-03-13", "day");
    expect(1).to.equal(result);
  });

  it("pass 2022-03-13,2022-03-06,week", () => {
    const result = diff("2022-03-13", "2022-03-06", "week");
    expect(1).to.equal(result);
  });

  it("pass 2022-04,2022-03,month", () => {
    const result = diff("2022-04", "2022-03", "month");
    expect(1).to.equal(result);
  });

  it("pass 2023-03,2022-03,year", () => {
    const result = diff("2023-03", "2022-03", "year");
    expect(1).to.equal(result);
  });
});
