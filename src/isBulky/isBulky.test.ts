import { describe, expect, it } from "vitest";
import isBulky from ".";

describe("isBulky", () => {
  it('returns "true" when one dimension is greater than 150cm', () => {
    expect(isBulky(100, 100, 151)).toBe(true);
    expect(isBulky(100, 151, 100)).toBe(true);
    expect(isBulky(151, 100, 100)).toBe(true);
  });

  it('returns "true" when total volume is 1_000_000 cm^3', () => {
    expect(isBulky(101, 101, 101)).toBe(true);
  });

  it('returns "false" when all dimensions are less than 150cm and volume is less than 1_000_000 cm^3', () => {
    expect(isBulky(10, 10, 10)).toBe(false);
  });
});
