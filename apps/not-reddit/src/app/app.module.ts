import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserListComponent } from './pages/user-page/user-list/user-list.component';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { UserPageComponent } from './pages/user-page/user-page.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { FooterComponent } from './shared/footer/footer.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UserAddEditComponent } from './pages/user-page/user-add-edit/user-add-edit.component';
import { AboutPageComponent } from './pages/about-page/about-page.component';
import { RegisterComponent } from './pages/auth/register/register.component';
import { LoginComponent } from './pages/auth/login/login.component';
import { JwtModule } from '@nestjs/jwt';
import { CommunityoverviewComponent } from './pages/communityoverview/communityoverview.component';
import { CommunityDetailComponent } from './pages/communityoverview/community-detail/community-detail.component';
// import { IUser } from '@schoolproject/data';

@NgModule({
  declarations: [
    AppComponent,
    UserListComponent,
    HomepageComponent,
    UserPageComponent,
    NavbarComponent,
    FooterComponent,
    UserAddEditComponent,
    AboutPageComponent,
    RegisterComponent,
    LoginComponent,
    UserPageComponent,
    UserListComponent,
    UserAddEditComponent,
    AboutPageComponent,
    HomepageComponent,
    FooterComponent,
    CommunityoverviewComponent,
    CommunityDetailComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    FontAwesomeModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
