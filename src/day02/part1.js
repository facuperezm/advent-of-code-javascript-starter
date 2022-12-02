// Advent of Code - Day 1 - Part Two

const moves = {
  rock: 1,
  paper: 2,
  scissors: 3,
};

const inputs = {
  A: moves.rock,
  B: moves.paper,
  C: moves.scissors,
  X: moves.rock,
  Y: moves.paper,
  Z: moves.scissors,
};

function score(ourMove, opponentMove) {
  if (ourMove === opponentMove) {
    return ourMove + 3;
  }
  if (
    (ourMove === moves.rock && opponentMove === moves.scissors) ||
    (ourMove === moves.paper && opponentMove === moves.rock) ||
    (ourMove === moves.scissors && opponentMove === moves.paper)
  ) {
    return ourMove + 6;
  }
  return ourMove;
}

export function part1(input) {
  return input
    .replace(/\r/g, "")
    .trim()
    .split("\n")
    .map((line) => line.split(" "))
    .map((line) => {
      const ourMove = inputs[line[1]];
      const opponentMove = inputs[line[0]];
      return score(ourMove, opponentMove);
    })
    .reduce((acc, line) => acc + line, 0);
}
