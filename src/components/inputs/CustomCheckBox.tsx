import { useFormContext } from 'react-hook-form';
import { ErrorMessage } from '../../components';
import { CustomInputProps } from '../../types';


export const CustomCheckbox = ({ name, label, ...props }: CustomInputProps) => {
    const { register, formState: { errors } } = useFormContext();

    const error = errors[name]?.message as string | undefined

    return (
        <div>
            <label className='flex gap-2 items-center cursor-pointer w-fit'>
                <input {...props} {...register(name)} />
                {label}
            </label>

            <ErrorMessage error={error} />
        </div>
    );
};

