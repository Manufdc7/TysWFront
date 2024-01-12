export class raya{
    
    celdas:number [][]
    emptyPosition:any = {row:2, col:2}

    constructor (){
        this.celdas=[[1,2,3],[4,5,6],[7,8]]
    }


    private isAdjacent(row : number, col : number) {
        return this.emptyPosition.row-1==row && this.emptyPosition.col==col
        || this.emptyPosition.row+1==row && this.emptyPosition.col==col
        || this.emptyPosition.row==row && this.emptyPosition.col-1==col
        || this.emptyPosition.row==row && this.emptyPosition.col+1==col
       }

    swap(row: number, col: number) {
        if (this.isAdjacent(row, col)) {
            this.celdas[this.emptyPosition.row][this.emptyPosition.col] = this.celdas[row][col]
            this.celdas[row][col] = 0
            this.emptyPosition = {
            row : row,
            col : col
            }
        }
      }


       
}