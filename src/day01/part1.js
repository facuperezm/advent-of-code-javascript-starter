// Advent of Code - Day 1 - Part One

export function part1(input) {
  const info = input
    .split("\n\n")
    .map((x) =>
      x
        .split("\n")
        .map(Number)
        .reduce((a, b) => a + b)
    )
    .sort((a, b) => b - a);

  return info[0];
}
