'use strict';

/**
 * 数値の配列を受け取り、その要素の合計を返す関数
 * @param {Number} numbers 数値の配列
 * @returns 数値を足し合わせた結果
 */
function add(numbers) {
  let result = 0;
  for (const num of numbers) {
    result = result + num;
  }
  return result;
}

/**
 * 数値の配列を受け取り、それらを掛け合わせる関数
 * @param {Number} numbers 数値の配列
 * @returns 数値を掛け合わせた結果
 */
function multi(numbers) {
  let result = 1;
  for (const num of numbers) {
    result = result * num;
  }
  return result;
}

module.exports = {
  add, multi
};