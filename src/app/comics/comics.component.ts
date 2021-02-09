import { Component, Input} from '@angular/core';

import { MarvelApiService } from "../marvel-api.service";
import { ComicServiceService } from "../comic-service.service";

@Component({
  selector: 'app-comics',
  templateUrl: './comics.component.html',
  styleUrls: ['./comics.component.css']
})
export class ComicsComponent {


  @Input() comics:any = []
  
  constructor(public MarvelComics : MarvelApiService, public comicService : ComicServiceService) { }
  test:boolean = false;



  ngOnInit(): void {}

  closeModal(){
    this.comicService.comics = []
    console.log(this.comicService.comics)
    this.comicService.modalFavorites = false
  }
  addFavorites(data:any){
    this.comicService.comicsFavorites.push(data)
    console.log(this.comicService.comicsFavorites)
  }

  itsInFavorites(comic: any){
    var index = this.comicService.comicsFavorites.indexOf(comic)
    console.log(index)
    if(index != -1){
      return true
    }
    return false
  }



}
