import { getPercents } from "../index.js";


describe('test for getPercents function', () => {
  it('Correct execution of the function with positive numbers', () => {
    expect(getPercents(30,200)).toBe(60);
  }),
  it('Correct execution of the function with numbers as strings', () => {
    expect(getPercents('30','200')).toBe(60);
  })
  it('Correct execution of the function with invalid datas', () => {
    expect(getPercents('ЗO','2OO')).toBe('Данные не являются числами');
  })
  it('Correct execution of the function with negative numbers', () => {
    expect(getPercents(-30,-200)).toBe('Данные числа отрицательные');
  })
})