import { ITodo } from '@/types/todo.types'

interface ITodoItem {
	todo: ITodo
}

export function TodoItem({ todo }: ITodoItem) {
	return <li>{todo.title}</li>
}
