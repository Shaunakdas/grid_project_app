export const displayArray = (startArray, iterationCount) => {
	let displayArr = []
  for (let j = 0; j < 8; j++) {
      displayArr.push(startArray[(j+2)%(startArray.length)]);
  }
  return displayArr;
};