import * as React from 'react';
import { UseFormReturn } from 'react-hook-form';
import { Command as CommandPrimitive } from 'cmdk';
import { X } from 'lucide-react';

import { FormField, FormItem, FormLabel } from '@/src/shared/components/ui/form';
import { Command, CommandGroup, CommandItem } from '@/src/shared/components/ui/command';
import { Badge } from '@/src/shared/components/ui/badge';

type Framework = Record<'value' | 'label', string>;
type Props = {
  form: UseFormReturn<any>;
  fieldName: string;
  label?: string;
  placeHolder?: string;
  options?: { value: any; label: string }[];
};

export function InputMultiSelect({ form, label, placeHolder, fieldName, options = [] }: Props) {
  const inputRef = React.useRef<HTMLInputElement>(null);
  const [open, setOpen] = React.useState(false);
  const [selected, setSelected] = React.useState<Framework[]>(form.getValues()[fieldName] || []);
  const [inputValue, setInputValue] = React.useState('');

  const handleUnselect = React.useCallback((framework: Framework) => {
    form.setValue(
      fieldName,
      selected.filter(s => s.value !== framework.value).map(item => item.value),
    );
    setSelected(prev => prev.filter(s => s.value !== framework.value));
  }, []);

  const handleKeyDown = React.useCallback((e: React.KeyboardEvent<HTMLDivElement>) => {
    const input = inputRef.current;
    if (input) {
      if (e.key === 'Delete' || e.key === 'Backspace') {
        if (input.value === '') {
          setSelected(prev => {
            const newSelected = [...prev];
            newSelected.pop();
            return newSelected;
          });
        }
      }
      // This is not a default behaviour of the <input /> field
      if (e.key === 'Escape') {
        input.blur();
      }
    }
  }, []);

  const selectables = options.filter(framework => !selected.includes(framework));

  return (
    <FormField
      control={form.control}
      name={fieldName}
      render={({ field }) => (
        <FormItem>
          {label && <FormLabel className='text-base capitalize'>{label}:</FormLabel>}
          <Command onKeyDown={handleKeyDown} className='overflow-visible bg-transparent'>
            <div className='group rounded-md border border-input px-3 py-3 text-sm ring-offset-background focus-within:ring-2 focus-within:ring-ring focus-within:ring-offset-2'>
              <div className='flex flex-wrap gap-1'>
                {selected.map(framework => {
                  return (
                    <Badge key={framework?.value} variant='secondary'>
                      {framework?.label}
                      <button
                        className='ml-1 rounded-full outline-none ring-offset-background focus:ring-2 focus:ring-ring focus:ring-offset-2'
                        onKeyDown={e => {
                          if (e.key === 'Enter') {
                            handleUnselect(framework);
                          }
                        }}
                        onMouseDown={e => {
                          e.preventDefault();
                          e.stopPropagation();
                        }}
                        onClick={() => handleUnselect(framework)}
                      >
                        <X className='h-3 w-3 text-muted-foreground hover:text-foreground' />
                      </button>
                    </Badge>
                  );
                })}
                {/* Avoid having the "Search" Icon */}
                <CommandPrimitive.Input
                  ref={inputRef}
                  value={inputValue}
                  onValueChange={setInputValue}
                  onBlur={() => setOpen(false)}
                  onFocus={() => setOpen(true)}
                  placeholder={placeHolder}
                  className='ml-2 flex-1 bg-transparent outline-none placeholder:text-muted-foreground'
                />
              </div>
            </div>
            <div className='relative mt-2'>
              {open && selectables.length > 0 ? (
                <div className='absolute top-0 z-10 w-full rounded-md border bg-popover text-popover-foreground shadow-md outline-none animate-in'>
                  <CommandGroup className='h-full overflow-auto'>
                    {selectables.map(framework => {
                      return (
                        <CommandItem
                          key={framework.value}
                          onMouseDown={e => {
                            e.preventDefault();
                            e.stopPropagation();
                          }}
                          onSelect={value => {
                            setInputValue('');
                            setSelected(prev => [...prev, framework]);
                            form.setValue(
                              fieldName,
                              [...selected, framework].map(item => item.value),
                            );
                          }}
                          className={'cursor-pointer'}
                        >
                          {framework.label}
                        </CommandItem>
                      );
                    })}
                  </CommandGroup>
                </div>
              ) : null}
            </div>
          </Command>
        </FormItem>
      )}
    />
  );
}
