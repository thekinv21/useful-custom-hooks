interface ITodoSearchForm {
	searchParam: string
	setSearchParam: (v: string) => void
}

export function TodoSearchForm({
	searchParam,
	setSearchParam
}: ITodoSearchForm) {
	return (
		<form>
			<div className='flex flex-col items-start justify-center gap-1'>
				<label>Todo Title</label>
				<input
					value={searchParam}
					onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
						setSearchParam(e.target.value)
					}}
					className='w-[400px] rounded-lg border-indigo-400 px-4 py-2 outline-none transition-all duration-300 ease-in-out focus:border focus:border-indigo-600'
				/>
			</div>
		</form>
	)
}
