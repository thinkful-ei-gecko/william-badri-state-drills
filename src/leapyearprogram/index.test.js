//use this line to import the function, made possible by
//the export default line in the other file
import leapYear  from './index';

//toBe matcher with variables to illustrate functionality.

it('should NOT be a leap year if divisible by 100, not 400', () => {
  const input = 1900;
  const expectedOutput = false; 
  expect(leapYear(input)).toBe(expectedOutput);
});

//simplified toBe matchers

it('should be a leap year if divisible by 4, not 100', () => {
  expect(leapYear(1984)).toBe(true);
}
);

it('should NOT be a leap year if not divisible by 4', () => {
  expect(leapYear(1983)).toBe(false);
});

it('should be a leap year if divisible by 400', () => {
  expect (leapYear(2000)).toBe(true);
});

//ERROR THROW MATCHER

it('should throw an error for years before 1582', () => {
  expect(() => {
    leapYear(1568);
  }).toThrow();
});

it('should NOT accept strings as arguments.', () => {
  expect(leapYear('true')).toThrow();
})

//logic changes that do not fail the tests as written?...
/* look at comparison operators */
