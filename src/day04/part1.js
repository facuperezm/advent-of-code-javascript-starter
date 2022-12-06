// Advent of Code - Day 4 - Part One

export function part1(input) {
  const pairs = input
    .split("\n")
    .map((pair) =>
      pair.split(",").map((range) => range.split("-").map(Number))
    );
  const overlaps = pairs.reduce((overlaps, [range1, range2]) => {
    const [min1, max1] = range1;
    const [min2, max2] = range2;
    if (min1 <= min2 && max1 >= max2) {
      overlaps.push(range1);
    } else if (min2 <= min1 && max2 >= max1) {
      overlaps.push(range2);
    }
    return overlaps;
  }, []);
  return overlaps.length;
}
