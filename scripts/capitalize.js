function capitalize(string) {
  if (string === undefined) return "";

  const brokenString = string.split(" ");
  const capitalizedArray = brokenString.map((word) => {
    return word.charAt(0).toUpperCase() + word.slice(1);
  });
  return capitalizedArray.join(" ");
}

module.exports = capitalize;
