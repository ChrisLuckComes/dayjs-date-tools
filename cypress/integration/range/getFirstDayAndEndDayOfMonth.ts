import { getFirstDayAndEndDayOfMonth } from "../../../src/range/range";
import dayjs from "dayjs"

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

