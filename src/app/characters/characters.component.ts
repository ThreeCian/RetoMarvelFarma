
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

  popupComics(value: any) {
    this.showComics(value.id.toString());
  }

  description(data: any) {
    if (data.description == '' || data.description == null) {
      data.description = 'No hay una descripción para este HEROE'
    }
    return data.description
  }

  ngOnInit(): void {
    this.showHeros();
  }

  showHeros() {
    this.MarvelService.getHeros('characters').subscribe(
      (characters: any) => {
        this.characters = characters;
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


}

