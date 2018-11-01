import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
 
import { CatMashComponent }   from './catmash/catmash.component';
import { AllCatsComponent }   from './all-cats/allcats.component';

const routes: Routes = [
  { path: '', redirectTo: '/catmash', pathMatch: 'full' },
  { path: 'catmash', component: CatMashComponent },
  { path: 'cats', component: AllCatsComponent }
];
 
@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}