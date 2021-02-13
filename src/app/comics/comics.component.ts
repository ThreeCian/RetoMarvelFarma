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
  }
  addFavorites(data: any) {
    this.comicService.comicsFavorites.push(data);
    this.comicService.setComics()
  }

  itsInFavorites(comic: any) {
    let bool = false
    this.comicService.comicsFavorites.forEach((element: any) => {
      if (element.digitalId === comic.digitalId) {
        bool = true
      }
    })
    return bool
  }
}
