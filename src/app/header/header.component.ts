import { Component, OnInit } from '@angular/core';
import { ComicServiceService } from "../services/comic-service.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(public comicService: ComicServiceService) { }

  ngOnInit(): void { }

  showFavorites() {

    console.log(this.comicService.comics = this.comicService.getComics())
    console.log('showFavorites')
  }

}
