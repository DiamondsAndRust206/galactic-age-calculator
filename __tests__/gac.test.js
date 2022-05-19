import PlanetaryAge from '../src/js/planetary-age.js';

describe('PlanetaryAge', () => {
  let earthAge;

  // beforeEach(() => {
  //   age = new PlanetaryAge(50, 77)
  // });
  test('should receive age and expectancy and add value to propeties', () => {
    earthAge = new PlanetaryAge(50, 77)
    expect(earthAge.age).toEqual(50, 77);

  });
});

