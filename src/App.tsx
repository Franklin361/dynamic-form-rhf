import { Layout, Form } from './components'

const App = () => {
	const onSubmitSignUp = (data: unknown) => {
		console.log({ singUp: data })
	}

	const onSubmitAnotherForm = (data: unknown) => {
		console.log({ singUp: data })
	}

	return (
		<Layout>
			<Form
				titleForm='Sign Up!'
				onSubmit={onSubmitSignUp}
				sectionForm='register'
				labelButtonSubmit='Create account'
			/>
			<Form
				titleForm='Another form!'
				onSubmit={onSubmitAnotherForm}
				sectionForm='another'
				labelButtonSubmit='Send info'
			/>
		</Layout>
	)
}
export default App
