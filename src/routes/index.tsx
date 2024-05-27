import { createBrowserRouter } from 'react-router-dom'

import { NotFound } from '@/screens/error/404'
import { Home } from '@/screens/home'

export const router = createBrowserRouter([
	{
		path: '/',
		element: <Home />
	},
	{
		path: '*',
		element: <NotFound />
	}
])
