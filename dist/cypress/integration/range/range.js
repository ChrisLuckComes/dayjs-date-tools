"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var range_1 = require("../../../src/range/range");
var dayjs_1 = __importDefault(require("dayjs"));
describe("test getFirstDayAndEndDayOfMonth use 2022-03", function () {
    it("pass string format YYYY-MM-DD", function () {
        var result = range_1.getFirstDayAndEndDayOfMonth("2022-03", "YYYY-MM-DD");
        console.log("result:" + result);
        expect("2022-03-01,2022-03-31").to.equal(result.toString());
    });
    it("pass dayjs format YYYY-MM-DD", function () {
        var result = range_1.getFirstDayAndEndDayOfMonth(dayjs_1.default("2022-03"), "YYYY-MM-DD");
        console.log("result:" + result);
        expect("2022-03-01,2022-03-31").to.equal(result.toString());
    });
});
describe("test getFirstDayAndEndDayOfWeek use 2022-03-11", function () {
    it("pass string format YYYY-MM-DD", function () {
        var result = range_1.getFirstDayAndEndDayOfWeek("2022-03-11", "YYYY-MM-DD");
        console.log("result:" + result);
        expect("2022-03-07,2022-03-13").to.equal(result.toString());
    });
    it("pass dayjs format YYYY-MM-DD", function () {
        var result = range_1.getFirstDayAndEndDayOfWeek(dayjs_1.default("2022-03-11"), "YYYY-MM-DD");
        console.log("result:" + result);
        expect("2022-03-07,2022-03-13").to.equal(result.toString());
    });
});
describe("test isInRange use 2022-01-01 and 2022-03-12", function () {
    it("pass date 2022-01-01", function () {
        var result = range_1.isInRange("2022-01-01", "2022-01-01", "2022-03-12");
        expect(true).to.equal(result);
    });
    it("pass date 2022-01-02", function () {
        var result = range_1.isInRange("2022-01-02", "2022-01-01", "2022-03-12");
        expect(true).to.equal(result);
    });
    it("pass date 2022-03-12", function () {
        var result = range_1.isInRange("2022-03-12", "2022-01-01", "2022-03-12");
        expect(true).to.equal(result);
    });
    it("pass 2021-12-31", function () {
        var result = range_1.isInRange("2021-12-31", "2022-01-01", "2022-03-12");
        expect(false).to.equal(result);
    });
    it("pass 2022-03-13", function () {
        var result = range_1.isInRange("2022-03-13", "2022-01-01", "2022-03-12");
        expect(false).to.equal(result);
    });
});
