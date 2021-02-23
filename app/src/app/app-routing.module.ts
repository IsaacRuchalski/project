import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PlaylistComponent } from './playlist/playlist.component';

const routes: Routes = [

  {path: 'instruments', loadChildren: () => import('./instrument/instrument.module').then(m => m.InstrumentModule)},
  {path: 'playlist', component: PlaylistComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
