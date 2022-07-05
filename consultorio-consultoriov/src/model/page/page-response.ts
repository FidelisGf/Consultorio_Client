/**
 * @author Eduardo Sganderla
 *
 * @since 1.0.0, 14/06/2022
 * @version 1.0.0
 */
export class PageResponse<T> {
    content!: T[]
    totalPages!: number
    totalElements!: number
    last!: boolean
    size!: number
    number!: number
}