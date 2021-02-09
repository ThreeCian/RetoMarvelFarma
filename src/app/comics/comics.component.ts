import { Component, Input} from '@angular/core';

import { MarvelApiService } from "../marvel-api.service";

@Component({
  selector: 'app-comics',
  templateUrl: './comics.component.html',
  styleUrls: ['./comics.component.css']
})
export class ComicsComponent {


  @Input() comics:any = []
  
  constructor(public MarvelComics : MarvelApiService) { }
  test:boolean = false;


  ngOnInit(): void {
    console.log(this.comics);
  }

  closeModal(){
    this.comics = []
    console.log(this.comics)
  }
  addFavorites(data:any){
    console.log(data)
  }



}
