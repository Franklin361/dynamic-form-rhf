import { Layout, Form } from './components'
import { getInputs } from './lib'

interface SignUpFormType {
	username: string
	password: string
	repeat_password: string
}

interface AnotherFormType {}

const signUpForm = getInputs<SignUpFormType>('register')
const anotherForm = getInputs<AnotherFormType>('another')

const App = () => {
	const onSubmitSignUp = (data: unknown) => console.log({ singUp: data })

	const onSubmitAnotherForm = (data: unknown) => console.log({ another: data })

	const initialValuesSignUp: SignUpFormType = {
		...signUpForm.initialValues,
		username: '@franklin361'
	}

	return (
		<Layout>
			<Form
				{...signUpForm}
				initialValues={initialValuesSignUp}
				titleForm='Sign Up!'
				onSubmit={onSubmitSignUp}
				labelButtonSubmit='Create account'
			/>

			<Form
				{...anotherForm}
				titleForm='Another form!'
				onSubmit={onSubmitAnotherForm}
				labelButtonSubmit='Send info'
			/>
		</Layout>
	)
}
export default App
