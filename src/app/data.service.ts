import { Injectable, OnInit } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private httpClient:HttpClient){}

  p1:string[]=["Dazler", "Kajal", "amazon"]
  p2:string[]=["Eyetex", "bindi", "flipkart"]
  p3={
    name:'yardley',
    item:'perfume',
    seller:'nyka'
  }

  getP1(){
    console.log(this.p1);
    return this.p1;
  }

  getP2(){
    return this.p2;
  }

  getP3(){
    return this.p3;
  }

  getDataFromWebApi(){
    //console.log(this.httpClient.get('http://localhost:3000/posts'))
    return this.httpClient.get('http://localhost:3000/posts');
  }
  ngOnInit(): void{
    const httpHeaders=new HttpHeaders()
    httpHeaders.append('content-type', 'application/json');
  }

  addDataToApi(newData:any){
    console.log(newData)
    let httpHeaders={
      "id": 4,
      "title": "Adidas",
      "author": "Socks"
    }

    this.httpClient.post('http://localhost:3000/posts', newData,{headers:ttpHeaders});
  }

}
