import React, {Component} from "react";
import {isMobile, isMobileOnly} from "react-device-detect";
import Swiper from "react-id-swiper";
import Card from "../lib/Card";
import SectionTitle from "../lib/SectionTitle";
import 'swiper/css/swiper.css';
import './projects.scss';

const cards = [
  {
    title: 'Project CORA',
    image: require('../assets/images/projects/Project_CORA.png'),
    text: [
      'Project CORA was founded by a group of Microsoft employees. The goal is to provide a framework for non-profit' +
        'organizations to link volunteers and those who are in need together without requiring an in-house developer.',
      'I\'ve been working on this project since June 2020, and devoted 25 hours per week. I am responsible for ' +
        'building the website using JavaScript (React) and maintaining web accessibility.'
    ],
    links: [
      { text: 'Github Organization', link: 'https://github.com/Community-Operations-Resource-Agent' },
      { text: 'Webite', link: 'https://corabot.org/' }
    ]
  },
  {
    title: 'KidU',
    image: require('../assets/images/projects/KidU.png'),
    text: [
      'KidU is a learning engagement tool designed specifically for kids. We intend for this website to serve as a ' +
        'supplement to remote learning programs such as Zoom. Ideally, teachers would be able to create classrooms, ' +
        'invite students to them, and be able to do live quizzes on the fly or deploy preplanned ones.',
      'The project was done by a team of 4 during HopHacks 2020, coming from all across the United States.',
      'My role in this hackathon was to created the front-end UI, and link it to the Firebase databases. Using Vue, ' +
        'I was able to connect the user interface with both the Realtime Database (RTDB) as well as the Firestore ' +
        'database. That way, we could use the RTDB for quizzes, and Firestore to save all teacher, student, and ' +
        'classroom information.'
    ],
    links: [
      { text: 'Devpost', link: 'https://devpost.com/software/kidu' },
      { text: 'GitHub', link: 'https://github.com/monsij/KidU' }
    ]
  },
  {
    title: 'Ag\'s Guide to Foods And Brews',
    image: require('../assets/images/projects/Ags_Guide_to_Foods_And_Brews.png'),
    text: [
      'A website where you can search for recipes and pair them with a beverage!',
      'A CSCE 315 Programming Studio group project with fellow Ags. We used the Agile Scrum process. Built using ' +
        'Vue.js and Vuetify and querying from Spoonacular, Edamam, and Punk APIs using Axios.',
      'My work was mostly in requesting data from APIs, and formatting the data to fit our components. Additionally,' +
        'I contributed to portions of the front-end as well.'
    ],
    links: [
      { text: 'Repository', link: 'https://github.tamu.edu/jarrett/Group7FinalProject' },
      { text: 'Demo', link: 'https://pages.github.tamu.edu/jarrett/Group7FinalProject/#/' }
    ]
  },
  {
    title: 'Spy Tools',
    image: require('../assets/images/projects/Spy-Tools.png'),
    text: [
      'A website built with React, served with Flask on Heroku.',
      'Built during HowdyHack2020, we let users upload images and have them apply filters and facial ' +
        'recognition on them using OpenCV.',
      'My work consisted mostly with getting the Flask server running, allowing uploads/downloads, ' +
        'integrating the image processing Python scripts, and deploying to Heroku.'
    ],
    links: [
      { text: 'Devpost', link: 'https://devpost.com/software/howdyhack2020-uri2g5' },
      { text: 'Demo', link: 'https://spy-tools.herokuapp.com/' },
      { text: 'GitHub', link: 'https://github.com/alexling540/spy-tools' },
    ]
  },
  {
    title: 'P.A.R.K Sports Management',
    image: require('../assets/images/projects/PARK_Sports_Management.png'),
    text: [
      'A Java application displaying information regarding college sports, with additional functionality ' +
        'to find a victory chain from one team to another, a player relation chain from one to another, ' +
        'and more!',
      'A CSCE 315 Programming Studio group project with fellow Ags. We built this application using the Waterfall ' +
        'process. This runnable JAR is built with Java Swing, using the Java Database Connectivity (JDBC) API to query ' +
        'information from our PostgreSQL server.',
      'I primarily worked on on building advanced functionality in the GUI from the designs.'
    ],
    links: [
      { text: 'Repository', link: 'https://github.tamu.edu/peterluong/group14databaseproject' }
    ]
  },
  {
    title: 'Reddit Mosaic Generator Bot',
    image: require('../assets/images/projects/Reddit_Mosaic_Generator_Bot.png'),
    text: [
      'A Python script that allows the user to generate a mosaic based on their inputs with the help of a bot.',
      'The bot uses the Reddit API via PRAW to query for images, and uses Requests to download the images.',
      'Using PySide2, a GUI module, users can configure their own bot easily.'
    ],
    links: [
      { text: 'Repository', link: 'https://github.com/alexling540/GM-Build-A-Bot' }
    ]
  }
];

const slidesPerView = (isMobile) ? ((isMobileOnly) ? 1 : 2) : 3; // phone=1, tablet=2, desktop=3

const params = {
  slidesPerView: slidesPerView,
  loop: cards.length > slidesPerView,
  spaceBetween: 20,
  pagination: {
    el: '.swiper-pagination',
    type: 'bullets',
    clickable: true
  },
  keyboard: {
    enabled: true,
    onlyInViewport: true,
  },
  grabCursor: true
};

export default class Projects extends Component {

  render() {
    return (
      <React.Fragment>
        <SectionTitle>Projects</SectionTitle>
        <div className={'section-content'}>
          <Swiper {...params}>
            {cards.map((element, i) => (
              <div key={i}>
                <Card data={element}/>
              </div>
            ))}
          </Swiper>
        </div>
      </React.Fragment>
    );
  }
}