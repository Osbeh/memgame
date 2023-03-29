import { expect, test } from 'vitest'
import shuffleArray from '../src/hooks/shuffleArray'

const arr = [1,2,3,4,5,6,7,8,9,10]
const testArr = [1,2,3,4,5,6,7,8,9,10]

test('shuffle', () => {
  shuffleArray(arr)
  expect(arr).not.toBe(testArr)
})