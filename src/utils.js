const randomNum = (low = 0, high = 0) => {
  const lowerBound = Math.min(low, high);
  const upperBound = Math.max(low, high);
  const interval = upperBound - lowerBound;
  const randomValue = lowerBound + Math.floor(Math.random() * interval);
  return randomValue;
};

export default randomNum;
