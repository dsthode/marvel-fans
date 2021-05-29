import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Character } from 'src/app/models/character';
import { CharacterService } from 'src/app/services/character.service';

@Component({
  selector: 'app-character-list',
  templateUrl: './character-list.component.html',
  styleUrls: ['./character-list.component.css']
})
export class CharacterListComponent implements OnInit {

  public characters: Character[] = [];
  public totalCharacters: number = 0;
  public fromCharacters: number = 0;
  public toCharacters: number = 0;
  public limitCharacters: number = 0;

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private characterSvc: CharacterService
  ) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(p => {
      let offset = p.offset;
      if (!offset || !/^\d+$/.test(offset)) {
        this.fetchCharacters(0);
      } else {
        this.fetchCharacters(parseInt(offset));
      }
    });
  }


  previous(): void {
    const offset = this.fromCharacters - this.limitCharacters;
    if (offset > 0) {
      this.router.navigate(['characters', offset]);
    } else {
      this.router.navigate(['characters']);
    }
  }

  next(): void {
    const offset = this.toCharacters;
    if (offset < this.totalCharacters) {
      this.router.navigate(['characters', offset]);
    }
  }

  openCharacter(id: number): void {
    this.router.navigate(['character', id]);
  }

  private fetchCharacters(offset: number) {
    window.scrollTo({top:0});
    this.characterSvc.getAll(offset).subscribe(x => {
      if (x.data && x.data.results) {
        this.characters = x.data.results;
        this.totalCharacters = x.data.total;
        this.fromCharacters = x.data.offset;
        this.toCharacters = x.data.offset + x.data.count;
        this.limitCharacters = x.data.limit;
      }
    });
  }

}
