import { Component, OnInit } from '@angular/core';
import { StarWarsService } from '../star-wars.service';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.css']
})
export class TabsComponent implements OnInit {
  // characters = [];
  // chosenList = 'all';
  // swService: StarWarsService;

  constructor() {}
  ngOnInit() {
  }

  // onChoose(side) {
   // this.chosenList = side;
 // }

// hangi tarafdan karakter seçilecelği ->chosenSide
 // getCharacters() {

   // this.characters = this.swService.getCharacters(this.chosenList);
    // return this.characters;
 // }
}
