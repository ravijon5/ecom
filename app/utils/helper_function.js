import { ELECTRONICS, JEWELLERY, MENCLOTHING, WOMENCLOTHING } from "./constant";

export function toTitleCase(str) {
  return str
    .toLowerCase()
    .split(/[-_\s]/)
    .map((word) => {
      return word.charAt(0).toUpperCase() + word.slice(1);
    })
    .join(" ");
}

export function getImageUrl(index) {
  return index == 0
    ? ELECTRONICS
    : index == 1
    ? JEWELLERY
    : index == 2
    ? MENCLOTHING
    : WOMENCLOTHING;
}

export function getPrice(number) {
  const parsedNumber = parseFloat(number);
  const fixedNumber = parsedNumber.toFixed(2);
  const numberString = fixedNumber.toString();
  const parts = numberString.split(".");
  const integerPart = parts[0];
  const decimalPart = parts.length > 1 ? parts[1] : "00";
  const paddedDecimalPart = decimalPart.padEnd(2, "0");
  return `${integerPart}.${paddedDecimalPart}`;
}
