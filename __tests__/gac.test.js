import PlanetaryAge from '../src/js/planetary-age.js';

describe('PlanetaryAge', () => {
  let age;

  beforeEach(() => {
    age = new PlanetaryAge(50, 77);
  });

  test('should receive age and add value to age property', () => {
    expect(age.age).toEqual(50, 77);
  });

    test('should receive expectancy and add value to the expectancy property', () => {
      expect(age.expectancy).toEqual(77);
    });
  });


describe('ageToEarthDays', () => {
  // let age;

  // test('should return earth age in years into the amount of days')
  //   age = new PlanetaryAge(50, 80);
  //   expect()
});

