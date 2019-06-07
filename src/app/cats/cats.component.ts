import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-cats',
  templateUrl: './cats.component.html',
  styleUrls: ['./cats.component.scss']
})
export class CatsComponent implements OnInit {

  catURL: String;
  constructor( private data : DataService ) { }

  ngOnInit() {
  }

  onClickGetCat () {
    this.data.getCat().subscribe(data => {
      this.catURL = data[0]['url'];
    })
  }
}
