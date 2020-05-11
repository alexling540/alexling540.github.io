import React, { useState } from 'react';
import { useMediaPredicate } from 'react-media-hook';
import ReactFullpage from '@fullpage/react-fullpage';
import styled, { ThemeProvider } from "styled-components";
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

function App() {

  const defaultTheme = useMediaPredicate('(prefers-color-scheme: light)') ? 'light' : 'dark';
  const [theme, setTheme] = useState(defaultTheme);
  const toggleTheme = () => {
    if (theme === 'light') {
      setTheme('dark');
    } else if (theme === 'dark') {
      setTheme('light');
    } else {
      setTheme(defaultTheme);
    }
  };

  const sections = [
    { anchor: 'section-intro',    title: 'Home',     icon: (<IntroIcon/>),     section: (<Introduction/>) },
    { anchor: 'section-about',    title: 'About',    icon: (<AboutIcon/>),     section: (<About/>) },
    { anchor: 'section-projects', title: 'Projects', icon: (<ProjectsIcon/>),  section: (<Projects/>) },
    { anchor: 'section-contact',  title: 'Contact',  icon: (<ContactIcon/>),   section: (<Contact/>) }
  ];

  return (
    <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
      <div className="App" theme={theme}>
        <Menu toggleTheme={toggleTheme} sections={sections} />
        <ReactFullpage
          licenseKey={'OPEN-SOURCE-GPLV3-LICENSE'}
          css3={true}
          menu={'#menu'}
          touchSensitivity={15}
          verticalCentered={false}
          fixedElements={['#menu']}
          // scrollOverflow={true}
          render={({state, fullpageApi}) => {
            return (
              <ReactFullpage.Wrapper>
                {sections.map((element, index) => (
                  <div className={'section fp-scrollable'} data-anchor={element.anchor} key={index}>
                    {element.section}
                  </div>
                ))}
              </ReactFullpage.Wrapper>
            );
          }}
        />
      </div>
    </ThemeProvider>
  )
}

export default App;
