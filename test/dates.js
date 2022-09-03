import { expect, test } from "vitest";
import {
  calculateDifferenceYears,
  calculateDifferenceYearsAndMonths,
} from "../logic/dates";

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

test("calculateDifferenceYearsAndMonths, validate params", () => {
  expect(calculateDifferenceYearsAndMonths()).toBe(false);
  expect(calculateDifferenceYearsAndMonths("")).toBe(false);
  expect(calculateDifferenceYearsAndMonths("", "")).toBe(false);
});

test("calculateDifferenceYearsAndMonths, validate output", () => {
  expect(calculateDifferenceYearsAndMonths("2018-06", "2018-06")).toEqual([
    0, 1,
  ]);
});
