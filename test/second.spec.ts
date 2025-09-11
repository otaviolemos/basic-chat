import { test, describe } from 'node:test';
import assert from 'node:assert';

describe('Basic Test Suite', () => {
  test('should pass a second simple assertion', () => {
    const expected = 4;
    const actual = 2 + 2;
    
    assert.strictEqual(actual, expected);
  });
});