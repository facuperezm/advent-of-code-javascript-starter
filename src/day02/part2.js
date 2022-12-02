// Advent of Code - Day 2 - Part Two

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

const solutions = {
  A: {
    X: moves.scissors,
    Y: moves.rock,
    Z: moves.paper,
  },
  B: {
    X: moves.rock,
    Y: moves.paper,
    Z: moves.scissors,
  },
  C: {
    X: moves.paper,
    Y: moves.scissors,
    Z: moves.rock,
  },
};

function score(expectedOutcome, opponentMove) {
  if (expectedOutcome === opponentMove) {
    return expectedOutcome + 3;
  }
  if (
    (expectedOutcome === moves.rock && opponentMove === moves.scissors) ||
    (expectedOutcome === moves.paper && opponentMove === moves.rock) ||
    (expectedOutcome === moves.scissors && opponentMove === moves.paper)
  ) {
    return expectedOutcome + 6;
  }
  return expectedOutcome;
}

export function part2(input) {
  return input
    .replace(/\r/g, "")
    .trim()
    .split("\n")
    .map((line) => line.split(" "))
    .map((line) => {
      const expectedOutcome = solutions[line[0]][line[1]];
      const opponentMove = inputs[line[0]];
      return score(expectedOutcome, opponentMove);
    })
    .reduce((acc, line) => acc + line, 0);
}
