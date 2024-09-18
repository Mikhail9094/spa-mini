export function isISOFormat(key: string, value: string) {
  try {
    if (isDate(key) && value === null) return true;
    const date = new Date(value);
    const newInputString = date.toISOString();

    return value === newInputString;
  } catch (e) {
    return false;
  }
}

export function isDate(stringDate: string) {
  const searchWord = "date";
  const lowerCaseString = stringDate.toLowerCase();

  if (lowerCaseString.includes(searchWord)) {
    return true;
  } else {
    return false;
  }
}
