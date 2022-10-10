//функция возвращающая случайное целое число из переданного диапазона включительно
function getRandomInteger(min, max) {
  const rand = min + Math.random() * (max + 1 - min);
  if (min < 0 && max <= min) {
    return NaN;
  }
  return Math.floor(rand);
}

// //функция проверяет строку на максимальную длинну
// function checkMaxLength (str,maxLength) {
//   return str.length <= maxLength;
// }
// // //функция проверяет строку на минимальную и максимальную длинну
// function checkMinMaxLength (str,minLength,maxLength) {
//   return str.length >= minLength && str.length <= maxLength;
// }
//делаем массив от 1 до N
// const range = (N) => Array.from({length: N}, (v, k) => k+1);

export {getRandomInteger};
