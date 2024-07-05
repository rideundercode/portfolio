import { Component } from '@angular/core';

interface Section {
  imageUrl: string;
  title: string;
  text: string;
  link?: string; // Optional property for links
  linkText?: string; // Optional property for link display text
  reverse?: boolean;
}

@Component({
  selector: 'app-content-card-three',
  templateUrl: './content-card-three.component.html',
  styleUrls: ['./content-card-three.component.scss']
})
export class ContentCardThreeComponent {
  projectItems: Section[] = [
    {
      title: 'Maquette Design',
      text: "The collaboration began with in-depth discussions to understand the client's needs. Based on this, I developed a detailed mockup, which allowed us to visualize the final project and adjust the initial concept, including the logo and the layout of the sections.",
      imageUrl: '../../../assets/maquette_creme_solaire.png',
    },
    {
      title: 'HTML/CSS/Bootstrap Development',
      text: "Following the mockup's approval, I proceeded with the website's development using HTML, CSS, and Bootstrap to create custom code without relying on predefined templates. This bespoke work resulted in a version that remained true to the client-approved design.",
      imageUrl: '../../../assets/html_css_creme_solaire.png',
      reverse: true
    },
    {
      title: 'Transition to a No-Code Solution with Wix',
      text: "Ultimately, we decided to transition to a no-code solution using Wix. This platform offered greater flexibility and simplified content management, which perfectly suited the client's evolving needs for autonomous website management.",
      imageUrl: '../../../assets/wix_picture.png',
      link: 'https://www.lacremesolaire.fr/',
      linkText: 'Here is the final result.',
      reverse: false
    },
    // Additional sections can be added as needed
  ];
}
