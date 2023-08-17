import { Routes } from '@angular/router';
import {HomeComponent} from "./pages/home/home.component";
import {DetailsComponent} from "./components/housing/details/details.component";
import {AccountComponent} from "./pages/account/account.component";
import {BlogComponent} from "./pages/blog/blog.component";


const routeConfig: Routes = [
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

export default routeConfig;
