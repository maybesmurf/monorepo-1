const baseUri = process.env.NEXT_PUBLIC_API_PATH

// TODO: Get rid of this any
const get = async (url: string, headers?: HeadersInit) => {
	const opts = {
		method: "GET",
		headers
	}
	return await fetch(baseUri + url, {
		credentials: "include",
		...opts
	}).then(handleResponse)
}

const post = async (url: string, body: HeadersInit) => {
	const opts = {
		method: "POST",
		headers: { "Content-Type": "application/json" },
		body: JSON.stringify(body)
	}
	return await fetch(baseUri + url, {
		credentials: "include",
		...opts
	}).then(handleResponse)
}

const put = async (url: string, body: HeadersInit) => {
	const opts = {
		method: "PUT",
		headers: { "Content-Type": "application/json" },
		body: JSON.stringify(body)
	}
	return await fetch(baseUri + url, {
		credentials: "include",
		...opts
	}).then(handleResponse)
}

// prefixed with underscored because delete is a reserved word in javascript
const _delete = async (url: string) => {
	const opts = {
		method: "DELETE"
	}
	return await fetch(baseUri + url, {
		credentials: "include",
		...opts
	}).then(handleResponse)
}

// helper functions

const handleResponse = (response: any) => {
	// Uses .text() so that there is no error for an empty response
	return response.text().then((text: any) => {
		const data = text && JSON.parse(text)

		if (response.error) {
			const error = data || response.statusText
			return Promise.reject(error)
		}

		return data
	})
}

const handler = {
	get,
	post,
	put,
	delete: _delete
}

export default handler
