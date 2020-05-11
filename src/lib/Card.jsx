import React from 'react';
import styled from "styled-components";
import { ListGroup, ListGroupItem } from "react-bootstrap";
import "./Card.scss";
// import 'bootstrap/dist/css/bootstrap.css'

const Link = styled.a`
  color: ${props => props.theme.accentColor2}
  &:visited {
    color: ${props => props.theme.accentColor2}
  }
  &:hover {
    color: ${props => props.theme.accentColor}
  }
`;

export default class Card extends React.Component {

  constructor(props) {
    super(props);
    this.props = props;
  }

  render() {
    return (
      <div className={'card'}>
        <div className="card-img">
          <img src={this.props.data.image} alt={''}/>
        </div>
        <div className={'card-title h5'}>
          {this.props.data.title}
        </div>
        <div className={'card-body'}>
            {this.props.data.text.map((element, i) => (
              <p className={'card-text'} key={i}>
                {element}
              </p>
            ))}
            <ListGroup className="list-group-flush">
              {this.props.data.links.map((element, i) => (
                <ListGroupItem key={i}>
                  <Link href={element.link} target={'_blank'} rel='noopener noreferrer'>
                    {element.text}
                  </Link>
                </ListGroupItem>
              ))}
            </ListGroup>
          </div>
      </div>
    );
  }
}