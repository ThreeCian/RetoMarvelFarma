
import { Component, OnInit } from '@angular/core';
import { MarvelApiService } from "../services/marvel-api.service";
import { ComicServiceService } from "../services/comic-service.service";

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.css']
})
export class CharactersComponent implements OnInit {

  characters: any = [];
  comics: any = [];
  pages: number = 1;
  constructor(public MarvelService: MarvelApiService, public comicService: ComicServiceService) { }

  ngOnInit(): void {
    this.showHeros();
  }

  popupComics(value: any) {
    this.showComics(value.id.toString());
  }

  description(data: any) {
    if (data.description == '' || data.description == null) {
      data.description = 'There is no a description to this character'
    }
    return data.description
  }

  showHeros() {
    this.MarvelService.getHeros('characters').subscribe(
      (characters: any) => {
        this.comicService.characters = characters;
        this.comicService.charactersBrowse = characters;
      }
    );
  }
  showComics(parameter: string) {
    this.MarvelService.getComics('characters/' + parameter + '/comics').subscribe(
      (comics: any) => {
        this.comicService.comics = comics;
      }
    );
  }
  deleteComicOfFavorites(comic: any) {
    var index = this.comicService.comicsFavorites.indexOf(comic)
    this.comicService.comicsFavorites.splice(index, 1)
    this.comicService.setComics()
  }


}

