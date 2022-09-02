/**
 *
 * @param {string} startDate valid date
 * @param {string} currentDate valid date
 * @returns {number} difference between two dates
 */
export function calculateDifferenceYears(startDate, currentDate) {
  // validate params if are dates
  if (isNaN(Date.parse(startDate))) return false;
  if (isNaN(Date.parse(startDate))) return false;

  // get year and month from params
  let [startDateYear, startDateMonth] = startDate.split("-");
  let [currentDateYear, currentDateMonth] = currentDate.split("-");

  // transform strings to integers
  startDateYear = parseInt(startDateYear);
  startDateMonth = parseInt(startDateMonth);
  currentDateYear = parseInt(currentDateYear);
  currentDateMonth = parseInt(currentDateMonth);

  // calculate year difference
  let difference = currentDateYear - startDateYear;

  /*
    if current year is bigger than start year and current month is smaller to start month
    substract 1 year
  */
  if (currentDateYear > startDateYear && currentDateMonth < startDateMonth)
    difference--;

  return difference;
}
