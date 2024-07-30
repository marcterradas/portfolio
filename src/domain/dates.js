/**
 * Calculate difference in years between two dates
 * @param {string} firstDate valid date
 * @param {string} secondDate valid date
 * @returns {number | false} difference between two dates
 */
export function calculateDifferenceYears(firstDate, secondDate) {
  // Validate both dates.
  if (isNaN(Date.parse(firstDate)) || isNaN(Date.parse(secondDate))) return false

  // Extract year and month from both dates.
  const [firstDateYear, firstDateMonth] = firstDate.split('-').map(Number)
  const [secondDateYear, secondDateMonth] = secondDate.split('-').map(Number)

  // Calculate initial year difference.
  let difference = secondDateYear - firstDateYear

  // Adjust difference if in the same year but with a later month in the first date.
  if (secondDateYear > firstDateYear && secondDateMonth < firstDateMonth) {
    difference--
  }

  return difference
}

/**
   * Calculate difference in years and months between two dates.
   * @param {string} firstDate valid date
   * @param {string} secondDate valid date
   * @returns { (number | false)[] | false }
   */
export function calculateDifferenceYearsAndMonths(firstDate, secondDate) {
  let yearDifference = calculateDifferenceYears(firstDate, secondDate)

  // yearDifference can be 0.
  if (yearDifference === false) return false

  // Convert the month part of the dates from string to integer.
  let [firstDateMonth, secondDateMonth] = [firstDate, secondDate].map(date => parseInt(date.split('-')[1]))

  // if second month is small (for example january) add 12 month.
  if (secondDateMonth < firstDateMonth) secondDateMonth += 12

  // start with 1 month (like LinkedIn).
  let monthDifference = 1 + (secondDateMonth - firstDateMonth)

  if (monthDifference == 12) {
    monthDifference = 0
    yearDifference += 1
  }

  const difference = [yearDifference, monthDifference]

  return difference
}
