/**
 * Generate a random decimal between two values with a certain amount of decimal
 * places.
 * @param min The minimum value allowed.
 * @param max The maximum value allowed.
 * @param decimals The amount of decimals.
 * @returns The generated decimal.
 */
export function generateRandomDecimal(
  min: number = 0,
  max: number = 100,
  decimals: number = 2
): number {
  const randomNumber: number =
    Math.random() < 0.5
      ? (1 - Math.random()) * (max - min) + min
      : Math.random() * (max - min) + min;

  const power: number = Math.pow(10, decimals);

  return Math.floor(randomNumber * power) / power;
}
