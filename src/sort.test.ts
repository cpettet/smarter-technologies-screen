import sort from "./sort";
import checkIsHeavy from "./isHeavy";
import checkIsBulky from "./isBulky";
import { vi, describe, expect, it, beforeEach } from "vitest";

// Logic is encapsulated in helpers. We mock the functions for easier unit-testing and for easy repo maintenance.
vi.mock("./isHeavy");
vi.mock("./isBulky");
const mockedCheckIsHeavy = vi.mocked(checkIsHeavy);
const mockedCheckIsBulky = vi.mocked(checkIsBulky);

describe("sort", () => {
  beforeEach(() => {
    vi.resetAllMocks();
  });

  it("returns 'REJECTED' when a package is heavy and bulky", () => {
    mockedCheckIsBulky.mockReturnValue(true);
    mockedCheckIsHeavy.mockReturnValue(true);

    expect(sort(1, 2, 3, 4)).toBe("REJECTED");
  });

  it("returns 'SPECIAL' when a package is heavy or bulky", () => {
    mockedCheckIsBulky.mockReturnValue(true);
    mockedCheckIsHeavy.mockReturnValue(false);

    expect(sort(1, 2, 3, 4)).toBe("SPECIAL");

    mockedCheckIsBulky.mockReturnValue(false);
    mockedCheckIsHeavy.mockReturnValue(true);

    expect(sort(1, 2, 3, 4)).toBe("SPECIAL");
  });

  it("returns 'STANDARD' when a package is heavy and bulky", () => {
    mockedCheckIsBulky.mockReturnValue(false);
    mockedCheckIsHeavy.mockReturnValue(false);

    expect(sort(1, 2, 3, 4)).toBe("STANDARD");
  });
});
