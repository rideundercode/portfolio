import { Component, OnInit, HostListener } from '@angular/core';

interface Card {
  imgUrl: string;
  title: string;
  text: string;
  tech: string;
  linkUrl: string;
}

@Component({
  selector: 'app-github-projects',
  templateUrl: './github-projects.component.html',
  styleUrls: ['./github-projects.component.scss']
})
export class GithubProjectsComponent implements OnInit{
  cardGroups: Card[][];
  activeSlideIndex: number = 0; // Garder une trace de l'index de slide actif


  constructor() {
    // Initialize cardGroups with your actual data
    this.cardGroups = []; // This should be an array of arrays, where each inner array has 3 card objects
  }

  ngOnInit() {
    this.updateCardGroups();
  }

  @HostListener('window:resize', ['$event'])
  onResize(event : Event) {
    this.updateCardGroups();
  }

  private updateCardGroups() {
    const screenWidth = window.innerWidth;
    const cardsPerGroup = screenWidth < 768 ? 1 : screenWidth < 992 ? 2 : 3;
    this.groupCards(cardsPerGroup);
  }

  prevSlide() {
    if (this.activeSlideIndex > 0) {
      this.activeSlideIndex--;
    } else {
      this.activeSlideIndex = this.cardGroups .length - 1; // Loop back to the last card if we're at the first
    }
  }

  // Méthode pour passer à la slide suivante
  nextSlide() {
    if (this.activeSlideIndex < this.cardGroups .length - 1) {
      this.activeSlideIndex++;
    } else {
      this.activeSlideIndex = 0; // Loop back to the first card if we're at the last
    }
  }

  private groupCards(cardsPerGroup: number) {
    this.cardGroups = [];

    // Here we define our cards data
    const cards: Card[] = [
      {
        imgUrl: '../../../assets/AngularSpringBoot.png',
        title: 'digitalbanking',
        text: "Réalisation d'une application web avec un back restfull documentation via swagger, pagination.",
        tech: "tech: SpringBoot, Angular",
        linkUrl: 'https://github.com/rideundercode/digitalbnaking'
      },
      {
        imgUrl: '../../../assets/MyBookingService.png',
        title: 'My Booking Service',
        text: "Réalisation d'une application web en microservices sur une infrastructure en cluster, capacité à travailler avec une équipe devops.",
        tech: "tech: Kubernetes, Docker, Gitlab CI/CD, SpringBoot, Ansible",
        linkUrl: 'https://github.com/rideundercode/MyBookingService'
      },
      {
        imgUrl: '../../../assets/python_ansible.png',
        title: 'My Little Ansible',
        text: "Réalisation d'un programme en ligne de commande permettant de configurer des hôtes distants.",
        tech: "tech: Python",
        linkUrl: 'https://github.com/rideundercode/MyLittleAnsible'
      },
      {
        imgUrl: '../../../assets/CSharp_Unity.png',
        title: 'Game Adventure',
        text: "Réalisons d'un jeu fonctionnel avec le moteur Unity.",
        tech: "tech: C Sharp",
        linkUrl: 'https://github.com/rideundercode/Adventure'
      },
      {
        imgUrl: '../../../assets/dotnet.png',
        title: 'Api Rest',
        text: "Mise en place votre propre application afin de créer un service REST sécurisé",
        tech: "tech: DotNet",
        linkUrl: 'https://github.com/rideundercode/ApiRest'
      },
      {
        imgUrl: '../../../assets/langageC.png',
        title: 'Cherokee',
        text: 'Implémenter un serveur conforme à une version simplifiée du protocole HTTP.',
        tech: "tech: Langage C",
        linkUrl: 'https://github.com/rideundercode/Cherokee'
      },
      {
        imgUrl: '../../../assets/Pictionary_dart.png',
        title: 'Pictionnary',
        text: "Développer une application mobile pour Android natif ou flutter, permettant de faire un jeu type Pictionary ou Draw Something",
        tech: "tech: Dart",
        linkUrl: 'https://github.com/rideundercode/Pictionis'
      },
      {
        imgUrl: '../../../assets/python.jpg',
        title: 'Monet Maker',
        text: "Script Python permettant de créer un dessin artistique des contours d'une image en utilisant des techniques de détection de contours et l'approche du plus proche voisin.",
        tech: "tech: Python",
        linkUrl: 'https://github.com/rideundercode/Monet-Maker'
      },
      {
        imgUrl: '../../../assets/AngularSpringBoot.png',
        title: 'E-Commerce',
        text: 'Plateforme de e-commerce',
        tech: "tech: SpringBoot, Angular",
        linkUrl: 'https://github.com/rideundercode/ecommerce'
      },
      // ... and so on, for however many cards you have
    ];

    // Group the cards by three
    for (let i = 0; i < cards.length; i += cardsPerGroup) {
      this.cardGroups.push(cards.slice(i, i + cardsPerGroup));
    }
  }
}
