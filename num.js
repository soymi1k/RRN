const num = 6407202771725;
const getValueInText = () => {
  const data1 = document.getElementById("firstArr").value;
  const data2 = document.getElementById("secondArr").value;
  let inputData = data1 + data2;

  return inputData;
};
const mapfn = (arg) => Number(arg);
const str = String(num);
const newArr = Array.from(str, mapfn);

const lastNum = newArr[12];

const firstArr = newArr.slice(0, 8);
const secondArr = newArr.slice(8, 12);

const multiply = (Arr) => {
  funArr = Arr;
  const length = funArr.length - 1;
  let start = 2;
  let sum = 0;

  for (let i = 0; i <= length; i++) {
    const no = funArr[i] * start;
    start++;

    sum += no;
  }
  return sum;
};
const result = (firstArr, secondArr) => {
  const no = (11 - ((multiply(firstArr) + multiply(secondArr)) % 11)) % 10;
  return no == lastNum;
};
// console.log((multiply(secondArr) + multiply(firstArr)) % 11);
// console.log((11 - ((155 + 35) % 11)) % 10);
