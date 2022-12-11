exports.blockForSeconds = (num) => {
  num = num * 1000;
  const startTime = Date.now();
  while (Date.now() < startTime + num) {}
};
