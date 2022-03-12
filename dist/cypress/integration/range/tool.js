"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tool_1 = require("../../../src/tool/tool");
describe("test isSameOrBefore", function () {
    it("pass same date 2022-03-12 and 2022-03-12", function () {
        var result = tool_1.isSameOrBefore("2022-03-12", "2022-03-12");
        expect(true).to.equal(result);
    });
    it("pass 2022-03-11 and 2022-03-12", function () {
        var result = tool_1.isSameOrBefore("2022-03-11", "2022-03-12");
        expect(true).to.equal(result);
    });
    it("pass 2022-03-13 and 2022-03-12", function () {
        var result = tool_1.isSameOrBefore("2022-03-13", "2022-03-12");
        expect(false).to.equal(result);
    });
});
describe("test isSameOrAfter", function () {
    it("pass same date 2022-03-12 and 2022-03-12", function () {
        var result = tool_1.isSameOrAfter("2022-03-12", "2022-03-12");
        expect(true).to.equal(result);
    });
    it("pass 2022-03-13 and 2022-03-12", function () {
        var result = tool_1.isSameOrAfter("2022-03-13", "2022-03-12");
        expect(true).to.equal(result);
    });
    it("pass 2022-03-11 and 2022-03-12", function () {
        var result = tool_1.isSameOrAfter("2022-03-11", "2022-03-12");
        expect(false).to.equal(result);
    });
});
