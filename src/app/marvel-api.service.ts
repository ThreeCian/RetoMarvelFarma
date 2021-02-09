import { Injectable } from '@angular/core';

import {  HttpClient} from '@angular/common/http'
import {  map } from "rxjs/operators";



@Injectable({
  providedIn: 'root'
})

export class MarvelApiService {

  service= 'https://gateway.marvel.com:443/v1/public/';
  endPoint='?ts=1&apikey=3eac9df140310f7cb6598c481925d275&hash=f3327fad6ce40985bc018165bae27ecb&limit=100';

   constructor( private http:HttpClient) { } 
  
  getHeros(parameter: string):any{
   return this.http.get<any>(this.service+parameter+this.endPoint).pipe(map((data: any)=>data.data.results))
   
  }
  getComics(parameter: string):any{
    return this.http.get<any>(this.service+parameter+this.endPoint).pipe(map((data: any)=>data.data.results))
    
   }
  

}
