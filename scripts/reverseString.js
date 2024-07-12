function reverseString(string) {
  if (string === undefined) return "";
  return string.split("").reverse().join("");
}

module.exports = reverseString;
