import { useFormContext } from 'react-hook-form'
import { ErrorMessage } from '../../components'
import { CustomInputProps } from '../../types'

export const CustomRadio = ({ name, label, options, ...props }: CustomInputProps) => {
	const {
		register,
		formState: { errors }
	} = useFormContext()

	const error = errors[name]?.message as string | undefined

	return (
		<div className='flex flex-col'>
			<div className='flex items-center gap-4'>
				<label>{label}</label>
				<section className='flex justify-between flex-1'>
					{options &&
						options.map(({ desc, value }) => (
							<label
								key={value}
								className='flex items-center gap-1 cursor-pointer hover:underline rounded p-1'
							>
								<input {...register(name)} {...props} value={value} type='radio' />
								{desc}
							</label>
						))}
				</section>
			</div>
			<ErrorMessage error={error} />
		</div>
	)
}
