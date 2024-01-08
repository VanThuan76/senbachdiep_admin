import dayjs from 'dayjs';
import utc from 'dayjs/plugin/utc';
import timezone from 'dayjs/plugin/timezone';
import { CalendarIcon } from 'lucide-react';

import { cn } from '@/src/shared/utils/tailwindPlugin';
import { FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/src/shared/components/ui/form';
import { Popover, PopoverContent, PopoverTrigger } from '@/src/shared/components/ui/popover';
import { Button } from '@/src/shared/components/ui/button';
import { Calendar, CalendarProps } from '@/src/shared/components/ui/calendar';
import { TIME_FORMAT_READ } from '@/src/shared/constants/setting';

dayjs.extend(utc);
dayjs.extend(timezone);

type Props = {
  form: any;
  fieldName: string;
  label?: string;
  placeHolder?: string;
  calendarProps?: CalendarProps;
  handleOnChange?: (value: any) => void;
};

export default function InputDatePicker({ fieldName, form, label, placeHolder, calendarProps, handleOnChange }: Props) {
  return (
    <FormField
      control={form.control}
      name={fieldName}
      render={({ field }) => (
        <FormItem className='w-full text-start'>
          <FormLabel>{label}</FormLabel>
          <Popover>
            <PopoverTrigger asChild>
              <FormControl>
                <Button
                  size={'lg'}
                  variant={'outline'}
                  className={cn('w-full p-3 text-left font-normal', !field.value && 'text-muted-foreground')}
                >
                  {field.value ? (
                    dayjs(field.value).tz('Asia/Bangkok').format(TIME_FORMAT_READ)
                  ) : (
                    <span>{placeHolder} </span>
                  )}
                  <CalendarIcon className='ml-auto h-4 w-4 opacity-50' />
                </Button>
              </FormControl>
            </PopoverTrigger>
            <PopoverContent className='w-auto p-0' align='start'>
              <Calendar
                mode='single'
                selected={dayjs(field.value).toDate()}
                //@ts-ignore
                onSelect={e => {
                  if (handleOnChange) {
                    handleOnChange(e);
                  }
                  field.onChange(e);
                }}
                initialFocus
                {...calendarProps}
              />
            </PopoverContent>
          </Popover>
          <FormMessage />
        </FormItem>
      )}
    />
  );
}
