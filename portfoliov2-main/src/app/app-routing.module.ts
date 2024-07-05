import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactFormComponent } from './components/contact-form/contact-form.component';
import { ContentCardOneComponent } from './components/content-card-one/content-card-one.component';
import { ContentCardTwoComponent } from './components/content-card-two/content-card-two.component';
import { ContentCardThreeComponent } from './components/content-card-three/content-card-three.component';
import { CardContainerComponent } from './components/card-container/card-container.component';

const routes: Routes = [
  { path: 'student', component: ContentCardOneComponent },
  { path: 'company', component: ContentCardTwoComponent },
  { path: 'client', component: ContentCardThreeComponent },
  { path: 'contact', component: ContactFormComponent },
  // Ajoutez d'autres routes ici
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
