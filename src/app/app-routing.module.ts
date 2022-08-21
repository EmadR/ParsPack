import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {MyServiceComponent} from "./components/my-service/my-service.component";

const routes: Routes = [
  {path: 'my-services', component: MyServiceComponent},
  {path: '', redirectTo: 'my-services', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
