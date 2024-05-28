import { useEffect } from 'react'

import { useCustomRefetch } from '@/hooks/useCustomRefetch'
import { useCustomState } from '@/hooks/useCustomState'

export function Counter() {
	const [count, setCount] = useCustomState<number>(0)

	const { refetchQuery } = useCustomRefetch()

	useEffect(() => {
		refetchQuery.invalidateQueries({
			queryKey: ['get-all-todos']
		})
	}, [count, refetchQuery])

	return (
		<div className='flex flex-row items-center justify-center gap-5'>
			<button
				onClick={() => {
					setCount(count !== 0 ? count - 1 : count)
				}}
				className='w-40  rounded-lg bg-indigo-600 py-2 text-white transition-all duration-300 ease-in-out'
			>
				Decrement Value
			</button>

			<h1>Count Number: {count}</h1>

			<button
				onClick={() => {
					setCount(count + 1)
				}}
				className='w-40 rounded-lg bg-indigo-600 py-2 text-white transition-all duration-300 ease-in-out'
			>
				Increment Value
			</button>
		</div>
	)
}
