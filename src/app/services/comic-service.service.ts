import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ComicServiceService {

  constructor() { }

  comicsFavorites: any = [];

  characters: any = [];

  comics: any = [];

  modalFavorites: boolean = false;

  getComics() {
    this.comicsFavorites = JSON.parse(localStorage.getItem("comicsFavorites")!) == null ? [] : JSON.parse(localStorage.getItem("comicsFavorites")!);
  }
  setComics() {
    localStorage.removeItem('comicsFavorites');
    localStorage.setItem("comicsFavorites", JSON.stringify(this.comicsFavorites))
  }
}
