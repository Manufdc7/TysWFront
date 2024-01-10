import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-board',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './board.component.html',
  styleUrl: './board.component.css'
})
export class BoardComponent {

  rows: number = 7
  columns: number = 6
  brd: string [][]

  constructor(){
    this.brd = Array(this.rows).fill(null).map(() => Array(this.columns).fill(null));
  }

}
