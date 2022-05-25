import { Component } from '@angular/core';
import { DataService } from './data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [DataService]
})

export class AppComponent {
  constructor(public dService:DataService){}
  title = 'Autoc2';
  options=[{name:'Dazler', price:500}, {name:'Lakme', price:600}]
  
  prod1:string[]=[];
  prod2:string[]=[];
  webdata:any;

  getProd1(){
    this.prod1= this.dService.getP1();
  }

  getProd2(){

  }

  fetchData(){
    this.dService.getDataFromWebApi().subscribe(rcvdData=>{this.webdata=rcvdData;})
  }

  insertData(){
    const newData={
      "id": 4,
      "title": "Adidas",
      "author": "Socks"
    };
    this.dService.addDataToApi(newData).subscribe(data=>{console.log(data)});
  }
}
