import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ComicServiceService {

  constructor() { }

  comicsFavorites: any = [];

  comics: any = [];

  modalFavorites: boolean = false;

  getComics() {

    this.comicsFavorites = JSON.parse(localStorage.getItem("comicsFavorites")!);
    return this.comicsFavorites;
  }
  setComics(comic: any) {
    this.comicsFavorites.push(comic);
    localStorage.setItem("comicsFavorites", JSON.stringify(this.comicsFavorites))
  }
}
