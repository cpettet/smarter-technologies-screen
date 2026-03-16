import { describe, expect, it } from "vitest";
import isHeavy from ".";

describe("isHeavy", () => {
  it("returns true when mass is exactly 20kg", () => {
    expect(isHeavy(20)).toBe(true);
  });

  it("returns false when mass is less than 20kg", () => {
    expect(isHeavy(19.9)).toBe(false);
  });

  it("returns true when mass is greater than 20kg", () => {
    expect(isHeavy(20.1)).toBe(true);
  });
});
