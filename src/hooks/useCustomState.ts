import { Dispatch, SetStateAction, useState } from 'react'

type UseCustomStateReturnType<T> = [T, Dispatch<SetStateAction<T>>]

function useCustomState<T>(initialState: T): UseCustomStateReturnType<T> {
	const [state, setState] = useState<T>(initialState)
	return [state, setState]
}

export { useCustomState }
