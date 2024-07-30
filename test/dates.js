import { expect, test } from 'vitest'
import { calculateDifferenceYears, calculateDifferenceYearsAndMonths } from '@/domain/dates'

test('calculateDifferenceYears, validate params', () => {
  expect(calculateDifferenceYears()).toBe(false)
  expect(calculateDifferenceYears('')).toBe(false)
  expect(calculateDifferenceYears('', '')).toBe(false)
})

test('calculateDifferenceYears, validate output', () => {
  expect(calculateDifferenceYears('2022-01', '2022-01')).toBe(0)
  expect(calculateDifferenceYears('2018-06', '2022-06')).toBe(4)
  expect(calculateDifferenceYears('2018-06', '2022-08')).toBe(4)
  expect(calculateDifferenceYears('2018-06', '2023-06')).toBe(5)
})

test('calculateDifferenceYearsAndMonths, validate params', () => {
  expect(calculateDifferenceYearsAndMonths()).toBe(false)
  expect(calculateDifferenceYearsAndMonths('')).toBe(false)
  expect(calculateDifferenceYearsAndMonths('', '')).toBe(false)
})

test('calculateDifferenceYearsAndMonths, validate output', () => {
  expect(calculateDifferenceYearsAndMonths('2018-06', '2018-06')).toEqual([0, 1])
  expect(calculateDifferenceYearsAndMonths('2018-06', '2019-06')).toEqual([1, 1])
  expect(calculateDifferenceYearsAndMonths('2019-06', '2022-09')).toEqual([3, 4])
  expect(calculateDifferenceYearsAndMonths('2019-06', '2023-01')).toEqual([3, 8])
  expect(calculateDifferenceYearsAndMonths('2019-06', '2023-04')).toEqual([3, 11])
  expect(calculateDifferenceYearsAndMonths('2019-06', '2023-05')).toEqual([4, 0])
  expect(calculateDifferenceYearsAndMonths('2019-06', '2023-06')).toEqual([4, 1])
})
