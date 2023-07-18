import { httpService } from './http.service.js'
import { utilService } from './util.service.js'

const labels = ['On wheels', 'Box game', 'Art', 'Baby', 'Doll', 'Puzzle', 
'Outdoor', 'Battery Powered']

export const toyService = {
	query,
	getById,
	remove,
	save,
	getEmptyToy,
	getLabels,
}

function query() {
	return httpService.get('toy')
}

function getById(toyId) {
	return httpService.get(`toy/${toyId}`)
}

function remove(toyId) {
	return httpService.delete(`toy/${toyId}`)
}

function save(toy) {
	if (toy._id) {
		return httpService.put(`toy/${toy._id}`, toy)
	}
	return httpService.post('toy', toy)
}

function getEmptyToy() {
	const startIdx = utilService.getRandomIntInclusive(0, labels.length-3)
	const endIdx = utilService.getRandomIntInclusive(startIdx, startIdx+3)
	const randomLabels = labels.slice(startIdx, endIdx)
	return {
		name: '',
		price: 0,
		labels: randomLabels,
		createdAt: Date.now(),
		inStock: false,
	}
}

function getLabels() {
	return Promise.resolve(labels)
}
