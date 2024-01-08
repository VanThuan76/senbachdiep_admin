import * as z from 'zod';
import { useForm as useFormHook } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

type Props<T> = {
    formSchema: z.Schema<T>;
    initialValues?: Partial<T>;
};
export default function useForm<T>({ formSchema, initialValues }: Props<T>) {
    // const form = useFormHook<z.infer<typeof formSchema>>({
    //     resolver: zodResolver(formSchema),
    //     defaultValues: initialValues,
    // });
    // return { ...form }
}