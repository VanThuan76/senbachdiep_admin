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
export const timeLineWorkShifts = [
  '07:00',
  '08:00',
  '09:00',
  '10:00',
  '11:00',
  '12:00',
  '13:00',
  '14:00',
  '15:00',
  '16:00',
  '17:00',
  '18:00',
  '19:00',
  '20:00',
  '21:00',
  '22:00',
  '23:00',
  '24:00',
];
