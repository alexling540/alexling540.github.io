import React from 'react';
import styled from "styled-components";

const Header = styled.h1`
  color: ${props => props.theme.textColor};
  &:first-letter {
    color: ${props => props.theme.accentColor};
  }
`;

class SectionTitle extends React.Component {
  render() {
    return(
      <Header>
        {this.props.children}
      </Header>
    )
  }
}

export default SectionTitle;