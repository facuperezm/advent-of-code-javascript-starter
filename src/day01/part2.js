// Advent of Code - Day 1 - Part Two

export function part2(input) {
  const info = input
    .split("\n\n")
    .map((x) =>
      x
        .split("\n")
        .map(Number)
        .reduce((a, b) => a + b)
    )
    .sort((a, b) => b - a);

  const sum = info[0] + info[1] + info[2];
  return sum;
}
