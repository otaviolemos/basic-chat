import { test, describe } from 'node:test';
import assert from 'node:assert';

describe('Basic Test Suite', () => {
  test('should pass a simple assertion', () => {
    const expected = 'Hello, World!';
    const actual = 'Hello, World!';
    
    assert.strictEqual(actual, expected);
  });
});