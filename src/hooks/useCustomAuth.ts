import Cookies from 'js-cookie'
import { useMemo } from 'react'

export const useCustomAuth = () => {
	const jwtToken = Cookies.get('accessToken')
	const userItem = localStorage.getItem('user')

	const user =
		userItem && userItem !== 'undefined' ? JSON.parse(userItem) : null

	return useMemo(
		() => ({
			jwtToken,
			user
		}),
		[jwtToken, user]
	)
}
