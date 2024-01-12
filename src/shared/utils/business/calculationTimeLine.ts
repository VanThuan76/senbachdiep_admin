export function calculationTimeLine(value: string) {
  switch (value) {
    case '07:00':
      return 1;
    case '08:00':
      return 2;
    case '09:00':
      return 3;
    case '10:00':
      return 4;
    case '11:00':
      return 5;
    case '12:00':
      return 6;
    case '13:00':
      return 7;
    case '14:00':
      return 8;
    case '15:00':
      return 9;
    case '16:00':
      return 10;
    case '17:00':
      return 11;
    case '18:00':
      return 12;
    case '19:00':
      return 13;
    case '20:00':
      return 14;
    case '21:00':
      return 15;
    case '22:00':
      return 16;
    case '23:00':
      return 17;
    case '24:00':
      return 18;
    default:
      return -1;
  }
}
