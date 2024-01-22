import { useEffect } from 'react';
import { UseFormReturn } from 'react-hook-form';

const useFormBeforeUnload = (form: UseFormReturn<any>) => {
  useEffect(() => {
    const handleBeforeUnload = (event: BeforeUnloadEvent) => {
      if (form.formState.isDirty) {
        const message = 'Bạn có chắc muốn rời đi? Dữ liệu chưa lưu sẽ bị mất.';
        event.returnValue = message;
        return message;
      }
    };

    window.addEventListener('beforeunload', handleBeforeUnload);

    return () => {
      window.removeEventListener('beforeunload', handleBeforeUnload);
    };
  }, [form.formState.isDirty]);
};

export default useFormBeforeUnload;
