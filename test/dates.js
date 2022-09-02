import { expect, test } from "vitest";
import { calculateDifferenceYears } from "../logic/dates";

test("calculateDifferenceYears, validate params", () => {
  expect(calculateDifferenceYears()).toBe(false);
  expect(calculateDifferenceYears("")).toBe(false);
  expect(calculateDifferenceYears("", "")).toBe(false);
});

test("calculateDifferenceYears, validate output", () => {
  expect(calculateDifferenceYears("2022-01", "2022-01")).toBe(0);
  expect(calculateDifferenceYears("2018-06", "2022-06")).toBe(4);
  expect(calculateDifferenceYears("2018-06", "2022-08")).toBe(4);
  expect(calculateDifferenceYears("2018-06", "2023-06")).toBe(5);
});
