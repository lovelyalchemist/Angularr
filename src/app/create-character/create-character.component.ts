import { Component, OnInit } from '@angular/core';
import { StarWarsService } from '../star-wars.service';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-create-character',
  templateUrl: './create-character.component.html',
  styleUrls: ['./create-character.component.css']
})
export class CreateCharacterComponent implements OnInit {
  availableSides = [
    {display: 'None',  value: ''},
    {display: 'Light', value: 'light'},
    {display: 'Dark',  value: 'dark'}
  ];

  swService: StarWarsService;
  defaultName = 'Star Wars Characters';
  showMsg = false;

  constructor(swService: StarWarsService) {
    this.swService = swService;
  }

  ngOnInit() {
  }

  onSubmit(submittedForm) {
    if (submittedForm.invalid) {
      return;
    }
    console.log(submittedForm);
    this.swService.addCharacter(submittedForm.value.name, submittedForm.value.side);
    this.showMsg = true; // Karakter eklendiğinde başarılı mesajı için
  }

}
