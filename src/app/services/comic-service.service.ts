import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ComicServiceService {

  constructor() { }

  comicsFavorites: any = [];

  characters: any = [];

  charactersBrowse: any = [];

  browse: string = '';

  comics: any = [];

  modalFavorites: boolean = false;

  getComics() {
    this.comicsFavorites = JSON.parse(localStorage.getItem("comicsFavorites")!) == null ? [] : JSON.parse(localStorage.getItem("comicsFavorites")!);
  }
  setComics() {
    localStorage.removeItem('comicsFavorites');
    localStorage.setItem("comicsFavorites", JSON.stringify(this.comicsFavorites))
  }
  browseChange(param: any){
    param = param.toLowerCase();
    this.charactersBrowse = this.characters.filter((character:any) => {
      character.name = character.name.toLowerCase()
      if(character.name.includes(param)){
        return true
      }
      return false
    })
  }
}
