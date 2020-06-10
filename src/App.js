import React, { useState } from 'react';
import { useMediaPredicate } from 'react-media-hook';
import ReactFullpage from '@fullpage/react-fullpage';
import { ThemeProvider } from "styled-components";
import {
  FiHome as IntroIcon,
  FiUser as AboutIcon,
  FiPackage as ProjectsIcon,
  FiInfo as ContactIcon
} from 'react-icons/fi';
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


function App () {

  const sections = [
    { anchor: 'section-intro',    title: 'Home',     icon: (<IntroIcon/>),     section: (<Introduction/>) },
    { anchor: 'section-about',    title: 'About',    icon: (<AboutIcon/>),     section: (<About/>) },
    { anchor: 'section-projects', title: 'Projects', icon: (<ProjectsIcon/>),  section: (<Projects/>) },
    { anchor: 'section-contact',  title: 'Contact',  icon: (<ContactIcon/>),   section: (<Contact/>) }
  ];

  const darkBg = new Array(sections.length - 1).fill(darkTheme.backgroundColor).concat(darkTheme.backgroundColorDark);
  const lightBg = new Array(sections.length - 1).fill(lightTheme.backgroundColor).concat(lightTheme.backgroundColorDark);

  const defaultTheme = useMediaPredicate('(prefers-color-scheme: light)') ? 'light' : 'dark';

  const getMatchingScheme = (th) => {
    return (th === 'light') ? lightBg : darkBg;
  };

  const [theme, setTheme] = useState(defaultTheme);
  const [themeBg, setThemeBg] = useState(getMatchingScheme(theme));
  const [animateAnchor, setAnimateAnchor] = useState(true); // initially animate when loading page

  const toggleTheme = () => {
    setAnimateAnchor(false); // do not animate when toggling theme
    if (theme === 'light') {
      setTheme('dark');
      setThemeBg(darkBg);
    } else if (theme === 'dark') {
      setTheme('light');
      setThemeBg(lightBg);
    } else {
      setTheme(defaultTheme);
      getMatchingScheme(theme);
    }
  };

  return (
    <ThemeProvider theme={(theme === 'light') ? lightTheme : darkTheme}>
      <div className="App">
        <Menu toggleTheme={toggleTheme} sections={sections}/>
        <ReactFullpage
          licenseKey={'OPEN-SOURCE-GPLV3-LICENSE'}
          css3={true}
          menu={'#menu'}
          touchSensitivity={15}
          verticalCentered={false}
          sectionsColor={themeBg}
          animateAnchor={animateAnchor}
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

export default App;
