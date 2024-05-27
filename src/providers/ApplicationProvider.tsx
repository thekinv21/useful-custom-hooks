import { ReactQueryProvider } from './ReactQueryProvider'
import { ReduxToolkitProvider } from './ReduxToolkitProvider'

interface IApplicationProvider {
	children: React.ReactNode
}

export function ApplicationProvider({ children }: IApplicationProvider) {
	return (
		<ReactQueryProvider>
			<ReduxToolkitProvider>{children}</ReduxToolkitProvider>
		</ReactQueryProvider>
	)
}
