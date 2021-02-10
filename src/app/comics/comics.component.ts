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
    console.log(this.comicService.comics)
    this.comicService.modalFavorites = false
  }
  addFavorites(data: any) {
    this.comicService.setComics(data);
  }

  itsInFavorites(comic: any): boolean {
    let boole = false;
    for (let index = 0; index < this.comicService.getComics().length; index++) {
      const comicFavorite = this.comicService.getComics()[index];
      if (comicFavorite.digitalId === comic.digitalId) {
        return true;
      }
    }
    return boole;

  }

}
