module.exports = function towelSort (matrix) {
  return matrix ? matrix.map((item, index) => index % 2 ? item.sort((a, b) => b - a) : item.sort((a, b) => a - b)).reduce((a, b) => a.concat(b), []) : [];
}
