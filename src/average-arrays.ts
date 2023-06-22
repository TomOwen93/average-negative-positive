/*FUNCTION calcAveragesNegativeAndPositive
 * ---
 * INPUT: Array of numbers
 *
 * RETURN: An object with properties of averages of any
 * positive or negative numbers from the array (averaged based on if they are neg/pos)
 *
 * ---
 * SET new empty array for positive numbers posArray
 * SET new empty array for negative numbers negArray
 *
 * FOR EACH number in arr:
 *    IF number > 0 then put in posArray
 *    IF number < 0 then put in negArray
 *
 * SET new variable posSum to the sum of numbers in posArray
 * SET new variable negSum to the sum of numbers in negArray
 *
 * RETURN object {avgPos: (posSum / length of posArray), negPos: (negSum / length of negArray)}
 *
 */

type AverageNegPosReturn = { posAvg: number | null; negAvg: number | null };

function calcAveragesNegativeAndPositive(arr: number[]): AverageNegPosReturn {
  let posArray: number[] = [];
  let negArray: number[] = [];

  posArray = filterArr(posArray).posArr;
  negArray = filterArr(negArray).negArr;

  let posSum: number | null = null;
  let negSum: number | null = null;

  if (posArray.length > 0) {
    posSum = posArray.reduce((prev, curr) => prev + curr);
  }
  if (negArray.length > 0) {
    negSum = negArray.reduce((prev, curr) => prev + curr);
  }

  const posAvg = posSum === null ? posSum : posSum / posArray.length;
  const negAvg = negSum === null ? negSum : negSum / negArray.length;

  return { posAvg, negAvg };
}

function filterArr(arr: number[]): { posArr: number[]; negArr: number[] } {
  let pos = arr.filter((el) => el > 0);
  let neg = arr.filter((el) => el < 0);
  return { posArr: pos, negArr: neg };
}

export default calcAveragesNegativeAndPositive;
