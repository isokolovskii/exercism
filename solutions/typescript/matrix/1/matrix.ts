export class Matrix {
  // [row: [column]]
  private matrix: number[][] = []
  private rowLength = 0
  
  constructor(matrix: string) {
    const rows = matrix.trim().split('\n')

    for (const row of rows) {
      const columns = row.trim().split(' ')
      const numbers = columns.map((column) => parseInt(column, 10))
      this.matrix.push(numbers)
    }

    this.rowLength = this.matrix[0].length
    if (!this.matrix.every((row) => row.length === this.rowLength)) {
      throw new Error('It is not matrix, rows have different lengths')
    }
  }

  get rows(): number[][] {
    return this.matrix
  }

  get columns(): number[][] {
    const columns: number[][] = []

    for (let i = 0; i < this.rowLength; i++) {
      const column: number[] = []
      for (const row of this.matrix) {
        column.push(row[i])
      }
      
      columns.push(column)
    }

    return columns
  }
}
