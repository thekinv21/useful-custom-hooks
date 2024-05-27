import { combineReducers, configureStore } from '@reduxjs/toolkit'

import userSlice from './user.slice'

const reducers = combineReducers({
	user: userSlice
})

export const store = configureStore({
	reducer: reducers
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
