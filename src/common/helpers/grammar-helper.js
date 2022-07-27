

export const capitalizeFirstLetters = (string) => {
  return string.length > 1
    ? string.charAt(0).toUpperCase() + string.slice(1)
    : string.charAt(0).toUpperCase();
}