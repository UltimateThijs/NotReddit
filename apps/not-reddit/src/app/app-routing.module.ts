import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutPageComponent } from './pages/about-page/about-page.component';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { UserAddEditComponent } from './pages/user-page/user-add-edit/user-add-edit.component';
import { UserPageComponent } from './pages/user-page/user-page.component';
import { RegisterComponent } from './pages/auth/register/register.component';
import { LoginComponent } from './pages/auth/login/login.component';
import { CommunityoverviewComponent} from './pages/communityoverview/communityoverview.component';
import { CommunityDetailComponent } from './pages/communityoverview/community-detail/community-detail.component';

const routes: Routes = [
  { path: '', component: HomepageComponent },
  { path: 'about', component: AboutPageComponent },
  { path: 'user', component: UserPageComponent },
  { path: 'user/new', pathMatch: 'full', component: UserAddEditComponent },
  { path: 'user/:id/edit', pathMatch: 'full', component: UserAddEditComponent },
  { path: 'register', pathMatch: 'full', component: RegisterComponent },
  { path: 'login', pathMatch: 'full', component: LoginComponent },

  { path: 'community', pathMatch: 'full', component: CommunityoverviewComponent},
  { path: 'community/detail/:id', pathMatch: 'full', component: CommunityDetailComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}