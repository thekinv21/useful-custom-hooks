import { useQueryClient } from '@tanstack/react-query'

export const useCustomRefetch = () => {
	// this works only if you using tanstack react-query
	const refetchQuery = useQueryClient()
	return {
		refetchQuery
	}
}
