import calcAveragesNegativeAndPositive from "./average-arrays";

test("calcAveragesNegativeAndPositive should return an object with the average of negative and positive array components seperately", () => {
  expect(calcAveragesNegativeAndPositive([1, 11, -1, -3])).toEqual({
    posAvg: 6,
    negAvg: -2,
  });

  expect(calcAveragesNegativeAndPositive([1, 3, -1, -3, 0, 0])).toEqual({
    posAvg: 2,
    negAvg: -2,
  });
});

test("calcAveragesNegativeAndPositive should return null if there is no possible average", () => {
  expect(calcAveragesNegativeAndPositive([1, 3])).toEqual({
    posAvg: 2,
    negAvg: null,
  });
});
