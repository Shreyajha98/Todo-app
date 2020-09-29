import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  count:number;
  projectText:string="Angular";
  projects=[];
  constructor() { }

  ngOnInit(): void {
    this.count=this.projects.length;


  }


  addItem(){
    this.projects.push(this.projectText);
    this.projectText='';
    this.count=this.projects.length;

  }


  removeItem(i)
  {
    this.projects.splice(i,1);
    this.count=this.projects.length;
  }
}
