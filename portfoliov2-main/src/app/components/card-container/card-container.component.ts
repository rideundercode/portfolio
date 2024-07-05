import { Component } from '@angular/core';

@Component({
  selector: 'app-card-container',
  templateUrl: './card-container.component.html',
  styleUrls: ['./card-container.component.scss']
})

export class CardContainerComponent {
  selectedCard: number | null = null;

  selectCard(cardNumber: number) {
    this.selectedCard = this.selectedCard === cardNumber ? null : cardNumber;

  }
}

