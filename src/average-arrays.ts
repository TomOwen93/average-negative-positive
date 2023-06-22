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
type SumAndCount = { sum: number; count: number };

function calcAveragesNegativeAndPositive(arr: number[]): AverageNegPosReturn {
  const posArray: number[] = [];
  const negArray: number[] = [];

  for (const num of arr) {
    if (num < 0) {
      negArray.push(num);
    } else if (num > 0) {
      posArray.push(num);
    }
  }

  let posResult: SumAndCount = { sum: 0, count: 0 };
  let negResult: SumAndCount = { sum: 0, count: 0 };

  if (posArray.length > 0) {
    posResult = calcSumAndCount(posArray);
  }
  if (negArray.length > 0) {
    negResult = calcSumAndCount(negArray);
  }

  const posAvg = posResult.count === 0 ? null : posResult.sum / posResult.count;
  const negAvg = negResult.count === 0 ? null : negResult.sum / negResult.count;

  return { posAvg, negAvg };
}

function calcSumAndCount(arr: number[]): SumAndCount {
  return arr.reduce(
    (acc, curr) => {
      const newSum = acc.sum + curr;
      const newCount = curr === 0 ? acc.count : acc.count + 1;
      return { sum: newSum, count: newCount };
    },
    { sum: 0, count: 0 }
  );
}

export default calcAveragesNegativeAndPositive;
