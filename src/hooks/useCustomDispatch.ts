import { bindActionCreators } from '@reduxjs/toolkit'
import { useMemo } from 'react'
import { useDispatch } from 'react-redux'

import { actions } from '@/store/actions'

export const useCustomDispatch = () => {
	const dispatch = useDispatch()

	return useMemo(() => bindActionCreators(actions, dispatch), [dispatch])
}
