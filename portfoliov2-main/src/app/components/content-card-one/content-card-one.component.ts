import { Component } from '@angular/core';

@Component({
  selector: 'app-content-card-one',
  templateUrl: './content-card-one.component.html',
  styleUrl: './content-card-one.component.scss'
})
export class ContentCardOneComponent {
  selectedOption: string = '';
  optionsContent: {[key: string]: string} = {
    option1: 'Contenu pour l\'option 1',
    option2: 'Contenu pour l\'option 2',
    option3: 'Contenu pour l\'option 3',
    // Ajoutez autant d'options que nécessaire
  };

  onSelectChange(): void {
    // Logique supplémentaire si nécessaire lors de la sélection d'une option
  }
}