import React, {Component} from "react";
import {BrowserView, MobileView} from "react-device-detect";
import Swiper from 'react-id-swiper';
import {Card, CardColumns} from "react-bootstrap";

export default class Projects extends Component {

  render() {
    const cards = [
      {
        title: 'Ag\'s Guide to Foods And Brews',
        image: '',
        desc: 'Vue, Vuetify, Axios',
        link: 'https://pages.github.tamu.edu/jarrett/Group7FinalProject/#/',
        repo: 'https://github.tamu.edu/jarrett/Group7FinalProject'
      },
      {
        title: 'Test',
        image: '',
        desc: '',
        repo: 'https://github.tamu.edu/peterluong/group14databaseproject'
      }
    ];

    const params = {
      spaceBetween: 30,
      loop: true,
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
        dynamicBullets: true
      }
    };

    return(
      <React.Fragment>
        <h1>Projects</h1>
        <BrowserView renderWithFragment>
          <CardColumns>
            {cards.map((element, i) => (
              <Card key={i}>
                <Card.Img variant="top" src={element.image} />
                <Card.Body>
                  <Card.Title>{element.title}</Card.Title>
                  <Card.Text>{element.desc}</Card.Text>
                  <Card.Link href={element.link}>Live</Card.Link>
                  <Card.Link href={element.repo}>Github</Card.Link>
                </Card.Body>
              </Card>
            ))}
          </CardColumns>
        </BrowserView>
        <MobileView>
          <Swiper {...params}>
            {cards.slice(4).map((element, i) => (
              <Card key={i}>
                <Card.Img variant="top" src={element.image} />
                <Card.Body>
                  <Card.Title>{element.title}</Card.Title>
                  <Card.Text>{element.desc}</Card.Text>
                  <Card.Link href={element.link}>Live</Card.Link>
                  <Card.Link href={element.repo}>Github</Card.Link>
                </Card.Body>
              </Card>
            ))}
          </Swiper>
        </MobileView>
      </React.Fragment>
    );
  }
}