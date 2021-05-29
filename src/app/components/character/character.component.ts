import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Character } from 'src/app/models/character';
import { CharacterService } from 'src/app/services/character.service';

@Component({
  selector: 'app-character',
  templateUrl: './character.component.html',
  styleUrls: ['./character.component.css']
})
export class CharacterComponent implements OnInit {

  public character: Character;

  constructor(
    private characterSvc: CharacterService,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
    const charId = this.activatedRoute.snapshot.paramMap.get("id");
    this.characterSvc.get(parseInt(charId)).subscribe( x => {
      if (x.data && x.data.results && x.data.results.length == 1) {
        this.character = x.data.results[0];
      }
    })
  }

  back(): void {
    window.history.back();
  }

}
