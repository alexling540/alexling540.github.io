import React, { useState } from 'react';
import { useMediaPredicate } from 'react-media-hook';
import ReactFullpage from '@fullpage/react-fullpage';
import * as Icon from 'react-feather';
import 'typeface-lato';
import './App.scss';
import Menu from './components/menu';
import Introduction from './components/intro';
import About from './components/about';
import Resume from './components/resume';
import Projects from './components/projects';
import Contact from './components/contact';

// https://visme.co/blog/website-color-schemes/
// https://fonts.google.com/specimen/Lato?selection.family=Lato
// https://gist.github.com/CodeMyUI/5376e109921ab4609c1857cf8010c4b8
// https://stackoverflow.com/questions/20751937/transition-background-color-via-slide-up-animation
// https://feathericons.com/
// https://postimg.cc/hXjzGPV5 vaporwave
// https://github.com/stephane-monnot/react-vertical-timeline

function App() {

  const defaultTheme = useMediaPredicate('(prefers-color-scheme: light)') ? "light" : "dark";

  const [theme, setTheme] = useState({
    palette: defaultTheme
  });

  const sections = [
    {
      anchor:'section-intro',
      title: 'Home',
      icon: (<Icon.Home/>),
      section: (<Introduction/>)
    },
    {
      anchor: 'section-about',
      title: 'About',
      icon: (<Icon.User/>),
      section: (<About/>)
    },
    {
      anchor: 'section-resume',
      title: 'Resume',
      icon: (<Icon.FileText/>),
      section: (<Resume/>)
    },
    {
      anchor: 'section-projects',
      title: 'Projects',
      icon: (<Icon.Package/>),
      section: (<Projects/>)
    },
    {
      anchor: 'section-contact',
      title: 'Contact',
      icon: (<Icon.Info/>),
      section: (<Contact/>)
    }
  ];

  const allowedKeys = {
    37: 'left',
    38: 'up',
    39: 'right',
    40: 'down',
    65: 'a',
    66: 'b'
  };
  // the 'official' Konami Code sequence Change this to you code
  const konamiCode = ['up', 'up', 'down', 'down', 'left', 'right', 'left', 'right', 'b', 'a'];
  // a variable to remember the 'position' the user has reached so far.
  let konamiCodePosition = 0;
  document.addEventListener('keydown', (e) => {
    let key = allowedKeys[e.keyCode];
    // get the value of the required key from the konami code
    let requiredKey = konamiCode[konamiCodePosition];
    // compare the key with the required key
    if (key === requiredKey) {
      // move to the next key in the konami code sequence
      konamiCodePosition++;
      // if the last key is reached, activate cheats
      if (konamiCodePosition === konamiCode.length) {
        setTheme({palette: 'vaporwave'});
        konamiCodePosition = 0;
      }
    } else {
      konamiCodePosition = 0;
    }
  });

  return (
    // <ThemeProvider theme={theme.palette}>
    <div className="App" theme={theme.palette}>
      <Menu setTheme={(palette) => setTheme({palette})} sections={sections} />
      <ReactFullpage
        licenseKey={'OPEN-SOURCE-GPLV3-LICENSE'}
        css3={true}
        menu={'#menu'}
        touchSensitivity={10}
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
    // </ThemeProvider>
  )
}

export default App;
