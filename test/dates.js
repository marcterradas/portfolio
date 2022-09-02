import { expect, test } from "vitest";
import { calculateDifferenceYears } from "../logic/dates";

test("should work as expected", () => {
  expect(calculateDifferenceYears()).toBe(0);
});
