import { httpService } from './http.service.js'

export const toyService = {
	query,
	getById,
	remove,
	save,
	getEmptyToy,
}

function query() {
	return httpService.get('toy')
}

function getById(toyId) {
	return httpService.get(`toy/${toyId}`)
}

function remove(toyId) {
	httpService.delete(`toy/${toyId}`)
}

function save(toy) {
	if (toy._id) {
		return httpService.put(`toy/${toy._id}`, toy)
	}
	return httpService.post('toy', toy)
}

function getEmptyToy() {
	return {
		name: '',
		price: 0,
		labels: [],
		createdAt: Date.now(),
		inStock: false,
	}
}
