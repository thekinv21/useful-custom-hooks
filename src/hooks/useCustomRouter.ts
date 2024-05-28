import { useNavigate } from 'react-router-dom'

export const useCustomRouter = () => {
	const route = useNavigate()

	return {
		route
	}
}
