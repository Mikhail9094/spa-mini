import { format, isValid, parseISO } from "date-fns";

export function formatDate(inputString: string | null) {
  if (inputString === null) return "";
  const isDate = isValid(parseISO(inputString));
  if (isDate) {
    const date = parseISO(inputString);
    const formattedDate = format(date, "dd.MM.yyyy");
    return formattedDate;
  }
  return "";
}
