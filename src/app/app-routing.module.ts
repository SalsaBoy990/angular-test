import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AccountComponent} from "./pages/account/account.component";
import {BlogComponent} from "./pages/blog/blog.component";
import {HomeComponent} from "./pages/home/home.component";
import {DetailsComponent} from "./components/housing/details/details.component";

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    title: 'Home page'
  },

  {
    path: 'details/:id',
    component: DetailsComponent,
    title: 'Home details'
  },

  { path: 'account', component: AccountComponent},
  { path: 'blog', component: BlogComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
