let str = [];
let lastNum = [];
const getValueInText = () => {
  getState();
  const mapfn = (arg) => Number(arg);
  const newArr = Array.from(str, mapfn);
  lastNum = newArr[12];

  const firstArr = newArr.slice(0, 8);
  const secondArr = newArr.slice(8, 12);

  const execute = result(firstArr, secondArr);

  if (execute) {
    alert("유효한 주민번호");
  } else {
    alert("유효하지 않은 주민번호");
  }
};

const getState = () => {
  const data1 = document.getElementById("firstArr").value;
  const data2 = document.getElementById("secondArr").value;
  let inputData = data1 + data2;

  return (str = inputData);
};
const multiply = (Arr) => {
  const length = Arr.length - 1;
  let start = 2;
  let sum = 0;

  for (let i = 0; i <= length; i++) {
    const no = Arr[i] * start;
    start++;

    sum += no;
  }
  return sum;
};
const result = (firstArr, secondArr) => {
  const no = (11 - ((multiply(firstArr) + multiply(secondArr)) % 11)) % 10;
  return no == lastNum;
};
