import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CharacterListComponent } from './components/character-list/character-list.component';
import { CharacterComponent } from './components/character/character.component';

const routes: Routes = [
  {path:"characters/:offset", component:CharacterListComponent},
  {path:"character/:id", component:CharacterComponent},
  {path:"**", component:CharacterListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    initialNavigation: 'enabled'
})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
