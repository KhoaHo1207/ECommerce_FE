import { Star } from "lucide-react";
export const createSlug = (string) =>
  string
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .split(" ")
    .join("-");

export const formatCurrency = (number) => number.toLocaleString("vi-VN");

export const renderStarFromMember = (number) => {
  const validNumber = Math.min(Math.max(Number(number), 0), 5);
  if (isNaN(validNumber)) return;

  return Array.from({ length: 5 }, (_, i) => (
    <Star
      key={i}
      className={`h-4 w-4 ${i < validNumber ? "fill-orange-500 text-orange-500" : "fill-gray-300 text-gray-300"}`}
    />
  ));
};
