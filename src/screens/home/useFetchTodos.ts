import { useQuery } from '@tanstack/react-query'
import { useEffect, useMemo } from 'react'

import { ITodo } from '@/types/todo.types'

import { useCustomState } from '@/hooks/useCustomState'

import { todoService } from '@/services/todo.service'

export const useFetchTodosWithParams = (searchParam: string) => {
	const [todos, setTodos] = useCustomState<ITodo[]>([] as ITodo[])

	const { data, isFetching, isLoading } = useQuery({
		queryKey: ['get-all-todos', searchParam],
		queryFn: () => todoService.getWithParams(searchParam)
	})

	useEffect(() => {
		setTodos(data?.data)
	}, [data?.data, setTodos])

	return useMemo(
		() => ({
			isFetching,
			todos,
			isLoading
		}),
		[isFetching, todos, isLoading]
	)
}
