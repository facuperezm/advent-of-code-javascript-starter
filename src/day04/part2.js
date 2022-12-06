// Advent of Code - Day 4 - Part Two

export function part2(input) {
  const pairs = input
    .split("\n")
    .map((pair) =>
      pair.split(",").map((range) => range.split("-").map(Number))
    );
  const intersections = pairs.reduce((acc, [range1, range2]) => {
    const [start1, end1] = range1;
    const [start2, end2] = range2;
    const intersection = [];
    for (let i = start1; i <= end1; i++) {
      if (i >= start2 && i <= end2) {
        intersection.push(i);
      }
    }
    if (intersection.length > 0) {
      acc.push(intersection);
    }
    return acc;
  }, []);
  return intersections.length;
}
