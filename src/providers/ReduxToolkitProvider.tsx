import { Provider } from 'react-redux'

import { store } from '@/store/store'

interface IReduxToolkitProvider {
	children: React.ReactNode
}

export function ReduxToolkitProvider({ children }: IReduxToolkitProvider) {
	return <Provider store={store}>{children}</Provider>
}
