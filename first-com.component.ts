import { Component, OnInit } from '@angular/core';
import {Student} from '../student'

@Component({
  selector: 'app-first-com',
  templateUrl: './first-com.component.html',
  styleUrls: ['./first-com.component.css']
})
export class FirstComComponent implements OnInit {
  myfirstvar="Workshop Amity Noida UP";
  heroes = [new Student('Shavez', '1', 'amity noida'), new Student('Abhishek', '2', 'ujhani')];
  pp = '';
  constructor() { }

  ngOnInit() {
  }

  onClickMe(){
    console.log("HELLLLLLLO!")
    this.pp = "You clicked me"; 
  }

}