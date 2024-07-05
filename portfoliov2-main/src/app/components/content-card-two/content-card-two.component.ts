import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-content-card-two',
  templateUrl: './content-card-two.component.html',
  styleUrls: ['./content-card-two.component.scss']
})
export class ContentCardTwoComponent implements OnInit {
  items = [
    {
      title: "ETNA | Master Of Science 2  Architecte Logiciel, Développeur D’Application",
      date: '2021-2023',
      location:'Paris',
      description: [
        'Urbanisation des systèmes d’information',
        'Sécurité des systèmes d’information',
        'Développement fonctionnel',
        'Développement d’une architecture logicielle pour le Cloud',
        'Algorithmique avancée : programmation parallèle',
        'Qualité et optimisation du code',
        'Expression et communication en langue anglaise',
        'Intelligence économique et commerciale',
        'Management des organisations',
        'Management de la qualité',
        'Validation des acquis entreprise',
        'Grand projet ETNA (GPE) : Présentation au grand public du projet libre.',
        '168H – Ce Code Camp a été l’occasion pour nous de démontrer l’expertise acquise durant notre parcours. Un projet libre dans le cadre de notre ingénierie métier est porté sur ce rush de 7 jours.',
        'Innov’Camp : démonstration d’une démarche innovante dans le cadre de votre ingénierie métier.'
      ] 
    },
    {
      title: ' INFOTEL, CONSEIL D’ETAT | Développeur FullStack Alternant ',
      date: '2022-2023 ',
      location:'Paris',
      description: [
        'Plateforme Télérecours Avocat',
        'SpringBoot',
        'Angular',
        'Perfectionnement des interfaces utilisateurs (CSS)',
        'Manipulation efficace des données avec l’utilisation de DTO et le mapping',
        'Mise en œuvre de solutions de surveillance telles que Prometheus et Grafana.',
        'Automatisation des tests API avec Postman, contribuant à la fiabilité des services.',
        'Familiarisation avec Matomo pour analyse et suivi des performances.',
        'Architectures microservices et développement de services REST',
        'Contexte de méthode Agile',
        'Collaboration étroite avec les équipes opérationnelles.',
        'Echange régulier avec le métier (Greffier / Magistrat)'
      ]
    },
    {
      title: "UNIVERSITÉ SORBONNE PARIS NORD | Licence Informatique ",
      date: '2018-2021',
      location:'Villetaneuse',
      description: [
        'Mise en place des procédures techniques d’exploitation, d’utilisation et de sécurité des équipements informatiques',
        'Définition et réalisation des phases et procédures de tests techniques et fonctionnels de programmes et applications informatiques',
        'Elaboration et rédaction des documents et supports techniques à destination des développeurs, des utilisateurs, des services informatiques',
        'Contrôle et analyse du déroulement des travaux et du fonctionnement des systèmes, des réseaux, des outils et périphériques',
        'Modélisation, mise en oeuvre et maintenance des bases de données',

      ] 
    },
    // Add more items as necessary
  ];

  constructor() { }

  ngOnInit(): void {
  }
}
