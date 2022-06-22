import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactComponent } from './components/contact/contact.component';

//define routing
const routes: Routes = [
  {
    path:"",redirectTo:"contacts",pathMatch:"full"
  },
  {
    path:"contacts",component:ContactComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
