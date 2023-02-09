export const Layout = ({ children }: { children: JSX.Element | JSX.Element[] }) => {
	return (
		<>
			<h1 className='text-center my-10 text-5xl'>
				<span>Dynamic Form</span>
				<span className='font-bold bg-clip-text text-transparent  text-[#EC5990]'>
					{' - '}
					React Hook Form
				</span>
			</h1>

			<main className='grid sm:grid-cols-2 grid-cols-1 sm:mb-0 mb-10 gap-10 place-items-start justify-items-center px-5'>
				{children}
			</main>
		</>
	)
}
