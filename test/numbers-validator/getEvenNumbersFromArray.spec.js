import {NumbersValidator} from '../../app/numbers_validator.js';
import {expect} from 'chai';

describe('getEvenNumbersfromArray tests', () => {
  let validator;
  beforeEach(() => {
    validator = new NumbersValidator();
  });

  afterEach(()=> {
    validator = null;
  });

  it('should return an array of even numbers', () => {
    const arrayOfNumbers = [5, 2, 6, 11, 22];
    const evenNumbersArrays = validator.getEvenNumbersFromArray(arrayOfNumbers);
    expect(evenNumbersArrays).to.be.eql([2, 6, 22]);
  });

  it('should throw an error if not full of numbers', () =>{
    const arrayOfValues = [5, '2', 6, 11, 22];
    expect(() => {
      validator.getEvenNumbersFromArray(arrayOfValues);
    }).to.throw('[5,2,6,11,22] is not an array of "Numbers"');
  });
});
