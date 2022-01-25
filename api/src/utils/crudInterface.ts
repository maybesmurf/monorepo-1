import type { ParamsDictionary } from "express-serve-static-core"

export interface ListParams<T> {
	where: Partial<T>
	skip: number
	take: number
}

export default interface Service<T> {
	create(params: T): Promise<T>
	get(params: ParamsDictionary): Promise<T | null>
	list(params: ListParams<T>): Promise<T[]>
	update(params: Partial<T>): Promise<T | null>
	delete(params: ParamsDictionary): Promise<T | null>
}
