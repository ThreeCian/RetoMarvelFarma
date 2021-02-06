import { Component, OnInit } from '@angular/core';
import { MarvelApiService } from '../marvel-api.service';


@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.css']
})
export class CharactersComponent implements OnInit {

  constructor(private MarvelService : MarvelApiService) { }

  Character = {
    
  }
  ngOnInit(): void {
    this.ShowHero();
  }

  ShowHero(){
    this.MarvelService.getData(this.Character).subscribe(
      (res)=>{
        console.log(res.json);
      },
      (err) =>console.log(err)
    )

  }


}
