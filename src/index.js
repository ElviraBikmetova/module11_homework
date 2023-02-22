
export function getPercents(percent, number) {
    let result;
    if (isNaN(+percent) || isNaN(+number)) {
        result = 'Данные не являются числами';
    } else if (+number < 0 || +percent < 0) {
        result = 'Данные числа отрицательные';
    } else {
           result = +number*+percent/100;
    }
    return result;
  }
