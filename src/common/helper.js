export const displayArray = (startArray, iterationCount) => {
	let margin = (8*iterationCount)%(startArray.length);
	let displayArr = []
  for (let j = 0; j < 8; j++) {
      displayArr.push(startArray[(j+margin)%(startArray.length)]);
  }
  return displayArr;
};