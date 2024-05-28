import { CustomLoader } from '@/components/ui/loader'

import { useCustomDebounce } from '@/hooks/useCustomDebounce'
import { useCustomState } from '@/hooks/useCustomState'

import { Counter } from './Counter'
import { TodoList } from './TodoList'
import { TodoSearchForm } from './TodoSearchForm'
import { useFetchTodosWithParams } from './useFetchTodos'

export function Home() {
	const [searchParam, setSearchParam] = useCustomState<string>('')

	const debounceValue = useCustomDebounce(searchParam)

	const { isFetching, isLoading, todos } =
		useFetchTodosWithParams(debounceValue)

	return (
		<section className='flex h-screen w-full flex-col items-center justify-center gap-10'>
			<Counter />
			<TodoSearchForm
				searchParam={searchParam as string}
				setSearchParam={setSearchParam}
			/>

			{isFetching || isLoading ? <CustomLoader /> : <TodoList todos={todos} />}
		</section>
	)
}
