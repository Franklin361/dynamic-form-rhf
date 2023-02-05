import { FormProvider } from 'react-hook-form'
import { useGenerateInputs } from '../hooks'
import { FormSection } from '../types'

interface Props {
	sectionForm: FormSection
	onSubmit: (data: unknown) => void
	labelButtonSubmit?: string
	titleForm?: string
}

export const Form = ({ sectionForm, onSubmit, titleForm, labelButtonSubmit = 'Submit' }: Props) => {
	const { createInputs, formMethods } = useGenerateInputs(sectionForm)

	return (
		<FormProvider {...formMethods}>
			<form
				onSubmit={formMethods.handleSubmit(onSubmit)}
				className='bg-secondary rounded-md p-10 pt-5 shadow-2xl shadow-primary/30 flex flex-col gap-2 border border-primary w-full min-h-[390px]'
			>
				{titleForm && (
					<h5 className='font-extrabold text-center text-2xl pb-2 mb-2 border-b border-white/50'>
						{titleForm}
					</h5>
				)}

				<section className='flex-1 flex flex-col gap-3'>{createInputs()}</section>

				<button
					className='bg-primary transition-opacity text-white w-full rounded-md py-2 hover:opacity-90 active:opacity-100 font-bold mt-4'
					type='submit'
				>
					{labelButtonSubmit}
				</button>
			</form>
		</FormProvider>
	)
}
