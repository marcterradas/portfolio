/**
 * Calculate difference in years between two dates
 * @param {string} firstDate valid date
 * @param {string} secondDate valid date
 * @returns {number} difference between two dates
 */
export function calculateDifferenceYears(firstDate, secondDate) {
  if (isNaN(Date.parse(firstDate))) return false;
  if (isNaN(Date.parse(firstDate))) return false;

  let [firstDateYear, firstDateMonth] = firstDate.split("-");
  let [secondDateYear, secondDateMonth] = secondDate.split("-");

  firstDateYear = parseInt(firstDateYear);
  firstDateMonth = parseInt(firstDateMonth);
  secondDateYear = parseInt(secondDateYear);
  secondDateMonth = parseInt(secondDateMonth);

  let difference = secondDateYear - firstDateYear;

  /*
    if current year is bigger than start year and current month is smaller to start month
    substract 1 year
  */
  if (secondDateYear > firstDateYear && secondDateMonth < firstDateMonth)
    difference--;

  return difference;
}

/**
 * Calculate difference in years and months between two dates
 * @param {string} firstDate valid date
 * @param {string} secondDate valid date
 * @returns {Array<number>} two positions, first difference in years
 * and the second difference in months
 */
export function calculateDifferenceYearsAndMonths(firstDate, secondDate) {
  let yearDifference = calculateDifferenceYears(firstDate, secondDate);

  if (yearDifference === false) return false;

  let [, firstDateMonth] = firstDate.split("-");
  let [, secondDateMonth] = secondDate.split("-");

  firstDateMonth = parseInt(firstDateMonth);
  secondDateMonth = parseInt(secondDateMonth);

  // if second month is small (for example january) add 12 month
  if (secondDateMonth < firstDateMonth) secondDateMonth += 12;

  // start with 1 month (like linkedin)
  let monthDifference = 1 + (secondDateMonth - firstDateMonth);

  if (monthDifference == 12) {
    monthDifference = 0;
    yearDifference += 1;
  }

  const difference = [yearDifference, monthDifference];

  return difference;
}
