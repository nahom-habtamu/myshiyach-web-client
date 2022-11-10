const chunkArrayToEqualParts = (chunkSize: number, listToSlice: any) => {
  const result = [];
  for (let i = 0; i < listToSlice.length; i += chunkSize) {
    const chunk = listToSlice.slice(i, i + chunkSize);
    result.push(chunk);
  }
  return result;
};

export default chunkArrayToEqualParts;
