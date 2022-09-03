/**
 * Calculate difference in years between two dates
 * @param {string} startDate valid date
 * @param {string} currentDate valid date
 * @returns {number} difference between two dates
 */
export function calculateDifferenceYears(startDate, currentDate) {
  if (isNaN(Date.parse(startDate))) return false;
  if (isNaN(Date.parse(startDate))) return false;

  let [startDateYear, startDateMonth] = startDate.split("-");
  let [currentDateYear, currentDateMonth] = currentDate.split("-");

  startDateYear = parseInt(startDateYear);
  startDateMonth = parseInt(startDateMonth);
  currentDateYear = parseInt(currentDateYear);
  currentDateMonth = parseInt(currentDateMonth);

  let difference = currentDateYear - startDateYear;

  /*
    if current year is bigger than start year and current month is smaller to start month
    substract 1 year
  */
  if (currentDateYear > startDateYear && currentDateMonth < startDateMonth)
    difference--;

  return difference;
}

/**
 * Calculate difference in years and months between two dates
 * @param {string} startDate valid date
 * @param {string} currentDate valid date
 * @returns {Array<number>} two positions, first difference in years
 * and the second difference in months
 */
export function calculateDifferenceYearsAndMonths(startDate, currentDate) {
  const yearDifference = calculateDifferenceYears(startDate, currentDate);

  if (!yearDifference) return false;

  let difference = [yearDifference, 0];

  return difference;
}
