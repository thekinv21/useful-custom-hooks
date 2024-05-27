import { useEffect, useState } from 'react'

export const useCustomDebounce = <T>(value: T, delay = 1800) => {
	// debounced value
	const [debounceValue, setDebounceValue] = useState<T>(value)

	// added setTimeout and delay for debouncing
	useEffect(() => {
		const timeout = setTimeout(() => {
			setDebounceValue(value)
		}, delay)

		return () => clearTimeout(timeout)
	}, [value, delay])

	return debounceValue
}
