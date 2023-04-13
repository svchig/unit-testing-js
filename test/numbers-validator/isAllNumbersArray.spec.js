import {NumbersValidator} from '../../app/numbers_validator.js';
import {expect} from 'chai';

describe('isAllNumbers tests', () => {
  let validator;
  beforeEach(() => {
    validator = new NumbersValidator();
  });

  afterEach(()=> {
    validator = null;
  });

  it('should return true if all numbers in array', () => {
    const arrayOfNumbers = [5, 2, 6, 11, 22];
    const evenNumbersArrays = validator.isAllNumbers(arrayOfNumbers);
    expect(evenNumbersArrays).to.be.equal(true);
  });

  it('should return false if any not a number in array', () => {
    const arrayOfNumbers = [5, '2', 6, 11, 22];
    const evenNumbersArrays = validator.isAllNumbers(arrayOfNumbers);
    expect(evenNumbersArrays).to.be.equal(false);
  });

  it('should throw an error if not a array', () =>{
    const arrayOfValues = {test: [5, '2', 6, 11, 22]};
    expect(() => {
      validator.isAllNumbers(arrayOfValues);
    }).to.throw('[[object Object]] is not an array');
  });

  it('should throw an error if primitive instead of a array', () =>{
    const arrayOfValues = 22;
    expect(() => {
      validator.isAllNumbers(arrayOfValues);
    }).to.throw('[22] is not an array');
  });
});
