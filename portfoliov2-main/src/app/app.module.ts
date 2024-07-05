import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { IntroductionComponent } from './components/introduction/introduction.component';
import { FooterComponent } from './components/footer/footer.component';
import { CardContainerComponent } from './components/card-container/card-container.component';
import { ContentCardOneComponent } from './components/content-card-one/content-card-one.component';
import { ContentCardTwoComponent } from './components/content-card-two/content-card-two.component';
import { ContentCardThreeComponent } from './components/content-card-three/content-card-three.component';
import { FormsModule } from '@angular/forms';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { GithubProjectsComponent } from './components/github-projects/github-projects.component';
import { HttpClientModule } from '@angular/common/http';
import { ContactFormComponent } from './components/contact-form/contact-form.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    IntroductionComponent,
    FooterComponent,
    CardContainerComponent,
    ContentCardOneComponent,
    ContentCardTwoComponent,
    ContentCardThreeComponent,
    GithubProjectsComponent,
    ContactFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,  // Assurez-vous que FormsModule est ajouté ici
    CarouselModule.forRoot()

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
