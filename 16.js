// JavaScript Array: Exercise-16 with Solution
// Find the leap years in a given range of years.

function isLeapYear(year) {
    if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
      return true;
    }
    return false;
  }
  
  function leapYearRange(startYear, endYear) {
    const leapYears = [];
  
    for (let year = startYear; year <= endYear; year++) {
      if (isLeapYear(year)) {
        leapYears.push(year);
      }
    }
  
    return leapYears;
  }
  
  const startYear = 2000;
  const endYear = 2012;
  const leapYearsInRange = leapYearRange(startYear, endYear);
  console.log(leapYearsInRange);
  