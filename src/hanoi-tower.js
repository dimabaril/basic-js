const { NotImplementedError } = require("../extensions/index.js");

/**
 * Calculate turns number and time (in seconds) required
 * to solve puzzle
 * §
 * @param {Number} disks number of disks
 * @param {Number} turnsSpeed speed (in turns/hour)
 * @return {Object} object with props turns (number of turns)
 * and seconds (time in seconds)
 *
 * @example
 *
 * calculateHanoi(9, 4308) => { turns: 511, seconds: 427 }
 *
 */
function calculateHanoi(disksNumber, turnsPerHour) {
  // Tower of Hanoi min_turns = 2^n - 1
  const turns = 2 ** disksNumber - 1;
  const secondPerTurn = 3600 / turnsPerHour;
  const totalSeconds = Math.floor(turns * secondPerTurn);
  return { turns: turns, seconds: totalSeconds };
}

module.exports = {
  calculateHanoi,
};
