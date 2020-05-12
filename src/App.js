import React, { useState } from 'react';
import { useMediaPredicate } from 'react-media-hook';
import ReactFullpage from '@fullpage/react-fullpage';
import { ThemeProvider } from "styled-components";
import {
  Home as IntroIcon,
  User as AboutIcon,
  Package as ProjectsIcon,
  Info as ContactIcon
} from 'react-feather';
import 'typeface-lato';
import './App.scss';
import Menu from './components/menu';
import Introduction from './components/intro';
import About from './components/about';
import Projects from './components/projects';
import Contact from './components/contact';
import {darkTheme, lightTheme} from "./themes";

// https://visme.co/blog/website-color-schemes/
// https://fonts.google.com/specimen/Lato?selection.family=Lato
// https://gist.github.com/CodeMyUI/5376e109921ab4609c1857cf8010c4b8
// https://stackoverflow.com/questions/20751937/transition-background-color-via-slide-up-animation
// https://feathericons.com/
// https://postimg.cc/hXjzGPV5 vaporwave
// https://github.com/stephane-monnot/react-vertical-timeline


const sections = [
  { anchor: 'section-intro',    title: 'Home',     icon: (<IntroIcon/>),     section: (<Introduction/>) },
  { anchor: 'section-about',    title: 'About',    icon: (<AboutIcon/>),     section: (<About/>) },
  { anchor: 'section-projects', title: 'Projects', icon: (<ProjectsIcon/>),  section: (<Projects/>) },
  { anchor: 'section-contact',  title: 'Contact',  icon: (<ContactIcon/>),   section: (<Contact/>) }
];

class App extends React.Component {

  static darkBg = new Array(sections.length - 1).fill(darkTheme.backgroundColor).concat(darkTheme.backgroundColorOther);
  static lightBg = new Array(sections.length - 1).fill(lightTheme.backgroundColor).concat(lightTheme.backgroundColorOther);

  constructor(props) {
    super(props);
    this.props = props;
    this.getDefaultTheme = this.getDefaultTheme.bind(this);
    this.getMatchingScheme = this.getMatchingScheme.bind(this);
    this.toggleTheme = this.toggleTheme.bind(this);
    // const defaultTheme = useMediaPredicate('(prefers-color-scheme: light)') ? 'light' : 'dark';
    this.state = {
      theme: this.getDefaultTheme(),
      // themeBg: this.getMatchingScheme(this.state.theme)
    };
  }

  getDefaultTheme() {
    // return useMediaPredicate('(prefers-color-scheme: light)') ? 'light' : 'dark';
    return 'dark';
  }

  getMatchingScheme() {
    switch(this.state.theme) {
      case 'dark':
        return App.darkBg;
      case 'light':
        return App.lightBg;
    }
  }

  toggleTheme() {
    if (this.state.theme === 'light') {
      this.setState({
        theme: 'dark'
      });
    } else if (this.state.theme === 'dark') {
      this.setState({
        theme: 'light'
      });
    } else {
      this.setState({
        theme: this.getDefaultTheme()
      })
    }
  };

  render() {
    return (
      <ThemeProvider theme={(this.state.theme === 'light') ? lightTheme : darkTheme}>
        <div className="App">
          <Menu toggleTheme={this.toggleTheme} sections={sections}/>
          <ReactFullpage
            licenseKey={'OPEN-SOURCE-GPLV3-LICENSE'}
            css3={true}
            menu={'#menu'}
            touchSensitivity={15}
            verticalCentered={false}
            // scrollOverflow={true}
            render={({state, fullpageApi}) => {
              return (
                <ReactFullpage.Wrapper>
                  {sections.map((element, index) => (
                    <div className={'section'} data-anchor={element.anchor} key={index}>
                      {element.section}
                    </div>
                  ))}
                </ReactFullpage.Wrapper>
              );
            }}
          />
        </div>
      </ThemeProvider>
    );
  }
}

export default App;
