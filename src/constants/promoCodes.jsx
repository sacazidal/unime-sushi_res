import { v4 } from "uuid";

export const promoCodes = [
  {
    id: v4(),
    title: "Получи скидку 10% на весь заказ",
    code: "WELCOME10",
    validityPeriod: undefined,
    isActive: true,
    discount: 0.1,
  },
  {
    id: v4(),
    title: "Получи скидку 20% на весь заказ",
    code: "NEWYEAR20",
    validityPeriod: "2025-01-15",
    isActive: true,
    discount: 0.2,
  },
  {
    id: v4(),
    title: "Получи скидку 5% на весь заказ",
    code: "HAPPY5",
    validityPeriod: "2025-01-07",
    isActive: true,
    discount: 0.05,
  },
];
