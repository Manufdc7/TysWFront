import { Component } from '@angular/core';
import { raya } from './raya';

@Component({
  selector: 'app-raya',
  templateUrl: './raya.component.html',
  styleUrls: ['./raya.component.css']
})
export class RayaComponent {
  match : raya
  constructor(){
    this.match = new raya()
  }
  swap(row : number, col : number) {
    this.match.swap(row, col)
    }
   
}
