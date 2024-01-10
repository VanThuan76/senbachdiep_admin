export const convertCustomerType = (value: number) => {
  switch (value) {
    case 0:
      return 'Hạng thường';
    case 1:
      return 'Hạng đồng';
    case 2:
      return 'Hạng bạc';
    case 3:
      return 'Hạng vàng';
    case 6:
      return 'Hạng bạch kim';
    default:
      return 'Unknown';
  }
};
