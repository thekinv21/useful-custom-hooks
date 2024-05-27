import axios from 'axios'

class TodoService {
	private BASE_URL = 'https://jsonplaceholder.typicode.com/todos'

	async getAll() {
		const response = await axios.get(`${this.BASE_URL}`)
		return response
	}

	async getById(id: number) {
		const response = await axios.get(`${this.BASE_URL}/${id}`)
		return response
	}

	async getWithParams(title: string) {
		const response = await axios.get(`${this.BASE_URL}`, {
			params: {
				title: title ? title : null
			}
		})
		return response
	}
}

export const todoService = new TodoService()
