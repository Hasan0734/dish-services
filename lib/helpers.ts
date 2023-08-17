export function reshapeArray(inputArray: any[], subArrayLength: number = 4) {
  const reshapedArray = [];
  for (let i = 0; i < inputArray.length; i += subArrayLength) {
    reshapedArray.push(inputArray.slice(i, i + subArrayLength));
  }

  return reshapedArray;
}
