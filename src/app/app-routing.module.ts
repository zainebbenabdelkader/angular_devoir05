import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LunettesComponent } from './lunettes/lunettes.component';
import { UpdateLunetteComponent } from './update-lunette/update-lunette.component';

const routes: Routes = [
  { path: 'lunettes', component: LunettesComponent },
  { path: 'updateLunette/:id', component: UpdateLunetteComponent },  // Ensure this route is set correctly
  { path: '', redirectTo: '/lunettes', pathMatch: 'full' } // Example default route
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
