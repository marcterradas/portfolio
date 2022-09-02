import { expect, test } from "vitest";
import { calculateDifferenceYears } from "../logic/dates";

test("calculateDifferenceYears, validate params", () => {
  expect(calculateDifferenceYears()).toBe(false);
  expect(calculateDifferenceYears("")).toBe(false);
  expect(calculateDifferenceYears("", "")).toBe(0);
});
