import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MarvelApiService {

  API ='https://gateway.marvel.com:443/v1/public/characters?ts=1&apikey=3eac9df140310f7cb6598c481925d275&hash=f3327fad6ce40985bc018165bae27ecb/';

  constructor(private http= HttpClient) { }

  getData(hero){
    return this.http.get<any>(this.API,hero)


}
