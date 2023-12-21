import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './Components/home-page/home-page.component';
import { ErrorPageComponent } from './Components/error-page/error-page.component'
import { ListPageComponent } from './Components/list-page/list-page.component';
import { DetailsComponent } from './Components/details/details.component';

const routes: Routes = [
  { path: "", component: HomePageComponent },
  { path: "home", component: HomePageComponent },
  { path: "list", component: ListPageComponent },
  { path: "details/:id", component: DetailsComponent },
  { path: "**", component: ErrorPageComponent } /*ESTE SIEMPRE VA EL ÚLTIMO*/,
];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
