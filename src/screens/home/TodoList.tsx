import { ITodo } from '@/types/todo.types'

import { TodoItem } from './TodoItem'

interface ITodoList {
	todos: ITodo[]
}

export function TodoList({ todos }: ITodoList) {
	return (
		<div className='flex flex-col items-center justify-center gap-5'>
			<h1>Todos List</h1>
			<ul className='h-[300px] w-[400px] space-y-5 overflow-y-auto'>
				{todos?.length ? (
					todos?.map((todo: ITodo) => <TodoItem todo={todo} key={todo.id} />)
				) : (
					<h1>Todos is not found...</h1>
				)}
			</ul>
		</div>
	)
}
