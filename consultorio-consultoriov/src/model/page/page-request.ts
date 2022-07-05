/**
 * @author Eduardo Sganderla
 *
 * @since 1.0.0, 14/06/2022
 * @version 1.0.0
 */
export class PageRequest {
    filter!: string
    currentPage!: number
    pageSize!: number

    sortField!: string
    direction!: string

    constructor() {
      this.filter = ''
      this.currentPage = 0
      this.pageSize = 10
      this.direction = 'asc'
    }

    public isSortable(): boolean {
      return this.sortField !== undefined && this.direction !== undefined
    }
}