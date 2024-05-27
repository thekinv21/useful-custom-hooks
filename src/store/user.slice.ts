import { createSlice } from '@reduxjs/toolkit'

interface IUserSlice {
	name: string
	surname: string
	isAuth: boolean
}

const initialState: IUserSlice = {
	name: 'Vadim',
	surname: 'Kiniabaev',
	isAuth: true
}

const userSlice = createSlice({
	name: 'user',
	initialState,
	reducers: {
		getUser(state) {
			return state
		}
	}
})

export const { getUser } = userSlice.actions

export default userSlice.reducer
