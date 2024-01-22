import { IWorkShift } from '@/src/schemas/types/workShift';

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

export const convertStatusWorkShift = (value: number) => {
  switch (value) {
    case 0:
      return 'Trống';
    case 1:
      return 'Tạm dừng';
    case 2:
      return 'Đang thực hiện';
    default:
      return 'Unknown';
  }
};
export const actionsBed = [
  { id: 1, label: 'Bán dịch vụ' },
  { id: 2, label: 'Xếp ca làm việc' },
  { id: 3, label: 'Khóa giường' },
];
export const determineBedBackgroundColor = (workShiftArray: IWorkShift[]) => {
  const hasStatus1 = workShiftArray.some(workShift => workShift.status === 0);
  const hasStatus2 = workShiftArray.some(workShift => workShift.status === 1);
  const hasStatus3 = workShiftArray.some(workShift => workShift.status === 2);

  if (hasStatus1) {
    return 'bg-[#E7F6EB]';
  } else if (hasStatus2) {
    return 'bg-[#FEEBED]';
  } else if (hasStatus3) {
    return 'bg-[#FFF8E1]';
  } else {
    return 'bg-[#C9C9C9]';
  }
};

export const determineBedTextColor = (status: number) => {
  switch (status) {
    case 0:
      return 'text-[#34A853]';
    case 1:
      return 'text-[#DB3B34]';
    case 2:
      return 'text-[#FBB000]';
    case 3:
      return 'text-[#6C6C6C]';
    default:
      return '';
  }
};
