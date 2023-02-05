interface Props {
	error?: string
}

export const ErrorMessage = ({ error }: Props) => {
	if (!error) return null

	return (
		<div className='w-full grid place-content-end'>
			<p className='text-red-400 text-sm'>{error}</p>
		</div>
	)
}
