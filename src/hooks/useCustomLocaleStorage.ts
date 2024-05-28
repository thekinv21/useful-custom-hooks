import { useEffect, useState } from 'react'

export function useCustomLocaleStorage<T>(
	key: string,
	initialValue: T
): [T, (value: T) => void] {
	const [value, setValue] = useState<T>(() => {
		const storedValue = localStorage.getItem(key)
		return storedValue !== null ? JSON.parse(storedValue) : initialValue
	})

	useEffect(() => {
		localStorage.setItem(key, JSON.stringify(value))
	}, [key, value])

	const updateValue = (newValue: T) => setValue(newValue)

	return [value, updateValue]
}
