const get = (url: string) => {
	const requestOptions = {
		method: "GET"
	}
	return fetch(url, requestOptions).then(handleResponse)
}

const post = (url: string, body: any) => {
	const requestOptions = {
		method: "POST",
		headers: { "Content-Type": "application/json" },
		body: JSON.stringify(body)
	}
	return fetch(url, requestOptions).then(handleResponse)
}

const put = (url: string, body: any) => {
	const requestOptions = {
		method: "PUT",
		headers: { "Content-Type": "application/json" },
		body: JSON.stringify(body)
	}
	return fetch(url, requestOptions).then(handleResponse)
}

// prefixed with underscored because delete is a reserved word in javascript
const _delete = (url: string) => {
	const requestOptions = {
		method: "DELETE"
	}
	return fetch(url, requestOptions).then(handleResponse)
}

// helper functions

const handleResponse = (response: any) => {
	// Uses .text() so that there is no error for an empty response
	return response.text().then((text: any) => {
		const data = text && JSON.parse(text)

		if (!response.ok) {
			const error = (data && data.message) || response.statusText
			return Promise.reject(error)
		}

		return data
	})
}

export default {
	get,
	post,
	put,
	delete: _delete
}
