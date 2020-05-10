import React, {Component} from "react";
import {isMobile, isMobileOnly} from "react-device-detect";
import Swiper from 'react-id-swiper';
import Card from "../lib/Card";
import Project_PARK from '../resources/images/Project_PARK.png';
import 'swiper/css/swiper.css';
import './projects.scss';

const params = {
  slidesPerView: (isMobile) ? ((isMobileOnly) ? 1 : 2) : 3, // phone=1, tablet=2, desktop=3
  pagination: {
    el: '.swiper-pagination',
    type: 'bullets',
    clickable: true
  },
  keyboard: {
    enabled: true,
    onlyInViewport: true,
  },
  loop: true
};

export default class Projects extends Component {

  render() {
    const cards = [
      {
        title: 'Ag\'s Guide to Foods And Brews',
        image: '',
        text: [
          'A website where you can search for recipes and pair them with a beverage!',
          'Built using Vue.js and Vuetify and querying from Spoonacular, Edamam, and Punk APIs using Axios.',
          'A Programming Studio group project with fellow Ags. We built this website using the AGILE process.'
        ],
        links: [
          {text: 'Repository', link: 'https://github.tamu.edu/jarrett/Group7FinalProject'},
          {text: 'Demo', link: 'https://pages.github.tamu.edu/jarrett/Group7FinalProject/#/'}
        ]
      },
      {
        title: 'P.A.R.K Sports Management',
        image: Project_PARK,
        text: [
          'A Java application displaying information regarding college sports, with additional functionality ' +
            'to find a victory chain from one team to another, a player relation chain from one to another, ' +
            'and more!',
          'This runnable JAR is built with Java Swing, using the Java Database Connectivity (JDBC) API to query ' +
            'information from our PostgreSQL server.',
          'A Programming Studio group project with fellow Ags. We built this application using the Waterfall process.'
        ],
        links: [
          {text: 'Repository', link: 'https://github.tamu.edu/peterluong/group14databaseproject'}
        ]
      },
      {
        title: 'This website',
        image: '',
        text: [

        ],
        links: [

        ]
      }
    ];

    return (
      <React.Fragment>
        <h1>Projects</h1>
        <Swiper {...params}>
          {cards.map((element, i) => (
            <div key={i}>
              <Card data={element}/>
            </div>
          ))}
        </Swiper>
      </React.Fragment>
    );
  }
}