interface IHome {}

export function Home({}: IHome) {
	return (
		<section className='flex h-screen w-full items-center justify-center'>
			<h1 className='text-4xl font-bold'>Home</h1>
		</section>
	)
}
