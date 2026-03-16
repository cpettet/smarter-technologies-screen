import checkIsBulky from "./isBulky";
import checkIsHeavy from "./isHeavy";

type SortType = "REJECTED" | "SPECIAL" | "STANDARD";

const sort = (
  width: number,
  height: number,
  length: number,
  mass: number,
): SortType => {
  const isBulky = checkIsBulky(width, height, length);
  const isHeavy = checkIsHeavy(mass);

  if (isBulky && isHeavy) {
    return "REJECTED";
  }

  if (isBulky || isHeavy) {
    return "SPECIAL";
  }

  return "STANDARD";
};

export default sort;
