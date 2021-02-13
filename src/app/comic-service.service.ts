import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ComicServiceService {

  constructor() { }

  comicsFavorites: any = [];

  comics: any = [];

  modalFavorites: boolean = false;
}
