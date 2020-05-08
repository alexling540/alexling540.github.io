import React, {Component} from "react";
import {Card, CardColumns} from "react-bootstrap";

export default class Projects extends Component {

  render() {
    const cards = [
      {
        title: 'Ag\'s Guide to Foods And Brews',
        image: '',
        desc: '',
        item: [],
        link: 'https://pages.github.tamu.edu/jarrett/Group7FinalProject/#/',
        repo: 'https://github.tamu.edu/jarrett/Group7FinalProject'
      }
    ];

    return(
      <React.Fragment>
        <h1>Projects</h1>
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
      </React.Fragment>
    );
  }
}