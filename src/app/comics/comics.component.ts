import { Component, Input } from '@angular/core';

import { MarvelApiService } from "../services/marvel-api.service";
import { ComicServiceService } from "../services/comic-service.service";

@Component({
  selector: 'app-comics',
  templateUrl: './comics.component.html',
  styleUrls: ['./comics.component.css']
})
export class ComicsComponent {

  @Input() comics: any = []

  constructor(public MarvelComics: MarvelApiService, public comicService: ComicServiceService) { }
  test: boolean = false;

  ngOnInit(): void { }

  closeModal() {
    this.comicService.comics = []
  }
  addFavorites(data: any) {
    this.comicService.comicsFavorites.push(data);
    this.comicService.setComics()
  }

  itsInFavorites(comic: any) {
    let bool = false
    this.comicService.comicsFavorites.forEach((element: any) => {
      if (element.id == comic.id) {
        bool = true
      }
    })
    return bool
  }
  setThreeRandomsComics(){
    if(this.comicService.comics.length > 3){
      var cicle = 3
      for (let index = 0; index < cicle; index++) {
        var randomComic = Math.floor(Math.random() * this.comicService.comics.length);
        if(!this.itsInFavorites(this.comicService.comics[randomComic])){
          this.comicService.comicsFavorites.push(this.comicService.comics[randomComic]) 
        }else{
          var itsAllThisComicsInFavorites = true
          this.comicService.comics.forEach((comic:any) => {
            if(this.comicService.comicsFavorites.indexOf(comic) === -1){
              itsAllThisComicsInFavorites = false
            }
          });
          if(!itsAllThisComicsInFavorites){
            cicle = cicle + 1
          }
        }
      }
      this.comicService.setComics()
    }
    else{
      this.comicService.comics.forEach((comic: any) => {
        if(!this.itsInFavorites(comic)){
          this.comicService.comicsFavorites.push(comic)
        }
      })
      this.comicService.setComics()
    }
  }
}
