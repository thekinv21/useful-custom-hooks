import { useQuery } from '@tanstack/react-query'
import { useEffect, useMemo, useState } from 'react'

import { ITodo } from '@/types/todo.types'

import { todoService } from '@/services/todo.service'

export const useFetchTodosWithParams = (searchParam: string) => {
	const [todos, setTodos] = useState<ITodo[]>([] as ITodo[])

	const { data, isFetching, isLoading } = useQuery({
		queryKey: ['get-all-todos', searchParam],
		queryFn: () => todoService.getWithParams(searchParam)
	})

	useEffect(() => {
		setTodos(data?.data)
	}, [data?.data])

	return useMemo(
		() => ({
			isFetching,
			todos,
			isLoading
		}),
		[isFetching, todos, isLoading]
	)
}
