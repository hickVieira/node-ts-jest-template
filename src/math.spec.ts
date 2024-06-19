import math from "./math";

describe("math tests", () => {
    
    it("should add two numbers", () => {
        expect(math.add(25, 50)).toBe(75);
    });

    it("should subtract two numbers", () => {
        expect(math.subtract(125, 25)).toBe(100);
    });

    it("should multiply two numbers", () => {
        expect(math.multiply(5, 5)).toBe(25);
    });

    it("should divide two numbers", () => {
        expect(math.divide(25, 5)).toBe(5);
    });
})