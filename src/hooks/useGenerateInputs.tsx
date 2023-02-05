import { yupResolver } from '@hookform/resolvers/yup'
import { useForm } from 'react-hook-form'
import { CustomCheckbox, CustomInput, CustomRadio, CustomSelect } from '../components'
import { getInputs } from '../lib'
import { FormSection } from '../types'

export const useGenerateInputs = (sectionForm: FormSection) => {
	const { initialValues, inputs, validationSchema } = getInputs(sectionForm)

	const formMethods = useForm({
		resolver: yupResolver(validationSchema),
		defaultValues: { ...initialValues }
	})

	const createInputs = () =>
		inputs.map(({ validations, typeValue, value, ...inputProps }) => {
			switch (inputProps.type) {
				case 'text':
				case 'email':
				case 'password':
					return <CustomInput {...inputProps} key={inputProps.name} />
				case 'select':
					return <CustomSelect {...inputProps} key={inputProps.name} />
				case 'checkbox':
					return <CustomCheckbox {...inputProps} key={inputProps.name} />
				case 'radio':
					return <CustomRadio {...inputProps} key={inputProps.name} />

				default:
					return null
			}
		})

	return {
		createInputs,
		formMethods
	}
}
