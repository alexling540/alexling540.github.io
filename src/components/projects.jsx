import React, {Component} from "react";
import {BrowserView, MobileView} from "react-device-detect";
import Swiper from 'react-id-swiper';
import {
  Card,
  CardColumns
} from "react-bootstrap";
import './projects.scss';
import 'swiper/swiper.scss';

const params = {
  pagination: {
    el: '.swiper-pagination',
    type: 'bullets',
    clickable: false
  },
};

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

    return(
      <React.Fragment>
        <h1>Projects</h1>
        {/*<BrowserView renderWithFragment>*/}
        {/*  <CardColumns>*/}
        {/*    {cards.map((element, i) => (*/}
        {/*      <Card key={i}>*/}
        {/*        <Card.Img variant="top" src={element.image} />*/}
        {/*        <Card.Body>*/}
        {/*          <Card.Title>{element.title}</Card.Title>*/}
        {/*          <Card.Text>{element.desc}</Card.Text>*/}
        {/*          <Card.Link href={element.link}>Live</Card.Link>*/}
        {/*          <Card.Link href={element.repo}>Github</Card.Link>*/}
        {/*        </Card.Body>*/}
        {/*      </Card>*/}
        {/*    ))}*/}
        {/*  </CardColumns>*/}
        {/*</BrowserView>*/}
        {/*<MobileView renderWithFragment>*/}
        {/*  <Carousel interval={null} controls={false}>*/}
        {/*    {cards.map((element, i) => (*/}
        {/*      <CarouselItem as={'Card'} key={i}>*/}
        {/*        <Card>*/}
        {/*          <Card.Img variant="top" src={element.image} />*/}
        {/*          <Card.Body>*/}
        {/*            <Card.Title>{element.title}</Card.Title>*/}
        {/*            <Card.Text>{element.desc}</Card.Text>*/}
        {/*            <Card.Link href={element.link}>Live</Card.Link>*/}
        {/*            <Card.Link href={element.repo}>Github</Card.Link>*/}
        {/*          </Card.Body>*/}
        {/*        </Card>*/}
        {/*      </CarouselItem>*/}
        {/*    ))}*/}
        {/*  </Carousel>*/}
        <Swiper {...params}>
          {cards.map((element, i) => (
            <div key={i}>
              <Card>
                <Card.Img variant="top" src={element.image} />
                <Card.Body>
                  <Card.Title>{element.title}</Card.Title>
                  <Card.Text>{element.desc}</Card.Text>
                  <Card.Link href={element.link}>Live</Card.Link>
                  <Card.Link href={element.repo}>Github</Card.Link>
                </Card.Body>
              </Card>
            </div>
          ))}
        </Swiper>
        {/*</MobileView>*/}
      </React.Fragment>
    );
  }
}