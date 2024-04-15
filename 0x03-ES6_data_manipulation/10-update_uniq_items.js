export default function updateUniqueItems(groceriesMap) {
  if (!(groceriesMap instanceof Map)) {
    throw new Error('Cannot process');
  }

  return new Map([...groceriesMap.entries()].map(([key, value]) => {
    if (value === 1) {
      return [key, 100];
    }
    return [key, value];
  }));
}
