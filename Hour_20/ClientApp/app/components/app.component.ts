import { Component } from '@angular/core';
import { OnInit } from '@angular/core';



@Component({
  selector: 'app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  title = 'My Cool Application';

  constructor() {}

  ngOnInit(): void {
  }

}
