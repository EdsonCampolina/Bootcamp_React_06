import { SalesByStore } from './types';

export const buildSalesByStoreChart = (sales: SalesByStore[]) => {
  const labels = sales.map((sale) => sale.gender);
  const series = sales.map((sale) => sale.sum);

  return {
    labels,
    series
  };
};
