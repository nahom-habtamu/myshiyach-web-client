const parseObjectToListOfObject = (objectToParse: Object | null) => {
  if (objectToParse == null) {
    return [];
  }
  const productOtherDetailKeys = Object.keys(objectToParse);
  const productOtherDetailValues = Object.values(objectToParse);
  const pairObject = [];
  for (let i = 0; i < productOtherDetailKeys.length; i++) {
    pairObject.push({
      key: productOtherDetailKeys[i],
      value: productOtherDetailValues[i],
    });
  }
  return pairObject;
};

export default parseObjectToListOfObject;
