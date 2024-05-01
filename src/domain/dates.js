// @ts-check

/**
 * Calculate difference in years between two dates
 * @param {string} firstDate valid date
 * @param {string} secondDate valid date
 * @returns {number | false} difference between two dates
 */
export function calculateDifferenceYears(firstDate, secondDate) {
  if (isNaN(Date.parse(firstDate))) return false
  if (isNaN(Date.parse(firstDate))) return false

  /** @type {string[]} */
  const [_firstDateYear, _firstDateMonth] = firstDate.split('-')
  /** @type {string[]} */
  const [_secondDateYear, _secondDateMonth] = secondDate.split('-')
  /** @type {number} */
  const firstDateYear = parseInt(_firstDateYear)
  /** @type {number} */
  const firstDateMonth = parseInt(_firstDateMonth)
  /** @type {number} */
  const secondDateYear = parseInt(_secondDateYear)
  /** @type {number} */
  const secondDateMonth = parseInt(_secondDateMonth)
  /** @type {number} */
  let difference = secondDateYear - firstDateYear

  // if current year is bigger than start year and current month is smaller to start month substract 1 year
  if (secondDateYear > firstDateYear && secondDateMonth < firstDateMonth)
    difference--

  return difference
}

/**
   * Calculate difference in years and months between two dates
   * @param {string} firstDate valid date
   * @param {string} secondDate valid date
   * @returns { (number | false)[] | false }
   */
export function calculateDifferenceYearsAndMonths(firstDate, secondDate) {
  /** @type {number | false} */
  let yearDifference = calculateDifferenceYears(firstDate, secondDate)

  if (yearDifference === false) return false

  /** @type {string[]} */
  let [, firstDateMonth] = firstDate.split('-')
  /** @type {string[]} */
  const [, _secondDateMonth] = secondDate.split('-')
  /** @type {number} */
  firstDateMonth = parseInt(firstDateMonth)
  /** @type {number} */
  let secondDateMonth = parseInt(_secondDateMonth)

  // if second month is small (for example january) add 12 month
  if (secondDateMonth < firstDateMonth) secondDateMonth += 12

  // start with 1 month (like linkedin)
  /** @type {number} */
  let monthDifference = 1 + (secondDateMonth - firstDateMonth)

  if (monthDifference == 12) {
    monthDifference = 0
    yearDifference += 1
  }

  /** @type {number[]} */
  const difference = [yearDifference, monthDifference]

  return difference
}
