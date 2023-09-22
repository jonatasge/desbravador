export const formatNumber = (num: number | string) =>
  `${num}`.replace(/\B(?=(\d{3})+(?!\d))/g, ".");
