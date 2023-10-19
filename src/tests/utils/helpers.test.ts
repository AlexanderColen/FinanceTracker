import { expect, test } from '@jest/globals';
import { v4 } from 'uuid';
import { formatClasses, formatCurrency } from '../../utils/helpers';
import { generateRandomDecimal } from '../testUtils';

/**
 * Tests for formatClasses
 */
test('formatClasses - Empty array', () => {
  // Run the test.
  const result: string = formatClasses([]);

  // Verify results.
  expect(result).toBe('');
});

test('formatClasses - Undefined items', () => {
  // Run the test.
  const result: string = formatClasses([undefined, undefined]);

  // Verify results.
  expect(result).toBe('');
});

test('formatClasses - Empty string items', () => {
  // Run the test.
  const result: string = formatClasses(['', '']);

  // Verify results.
  expect(result).toBe('');
});

test('formatClasses - Random class names', () => {
  // Set up test.
  const classNames: string[] = [v4(), v4()];

  // Run the test.
  const result: string = formatClasses(classNames);

  // Verify results.
  expect(result).toBe(classNames.join(' '));
});

test('formatClasses - All variations', () => {
  // Set up test.
  const className: string = v4();

  // Run the test.
  const result: string = formatClasses([className, undefined, '']);

  // Verify results.
  expect(result).toBe(className);
});

/**
 * Tests for formatCurrency
 */
test('formatCurrency - Invalid locale', () => {
  // Set up test.
  const amount: number = generateRandomDecimal();
  const locale: string = v4();

  // Run the test.
  try {
    formatCurrency(amount, locale);
    throw Error('Test should have failed.');
  } catch (error: any) {
    expect(error.message).toBe('Incorrect locale information provided');
  }
});

test('formatCurrency - Invalid currency', () => {
  // Set up test.
  const amount: number = generateRandomDecimal();
  const currency: string = v4();

  // Run the test.
  try {
    formatCurrency(amount, undefined, currency);
    throw Error('Test should have failed.');
  } catch (error: any) {
    expect(error.message).toBe(`Invalid currency code : ${currency}`);
  }
});

test('formatCurrency - Undefined amount', () => {
  // Run the test.
  const result: string = formatCurrency(undefined);

  // Verify results.
  expect(result).toBe(
    Intl.NumberFormat(undefined, {
      currency: 'CAD',
      style: 'currency',
    }).format(0)
  );
});

test('formatCurrency - No customization', () => {
  // Set up test.
  const amount: number = generateRandomDecimal();

  // Run the test.
  const result: string = formatCurrency(amount);

  // Verify results.
  expect(result).toBe(
    Intl.NumberFormat(undefined, {
      currency: 'CAD',
      style: 'currency',
    }).format(amount)
  );
});
