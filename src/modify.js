const swapAllCases = (str) => {
  return str.replace(/\w/gi, match => {
    const matchLower = match.toLowerCase()
    return match === matchLower ? match.toUpperCase() : matchLower;
  })
}

console.log(swapAllCases('Ryan Jackson is the BEST!'));
module.exports = {
  swapAllCases,
};
