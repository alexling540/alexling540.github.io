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
import Blog from './components/blog';
import Contact from './components/contact';

// https://visme.co/blog/website-color-schemes/
// https://fonts.google.com/specimen/Lato?selection.family=Lato
// https://gist.github.com/CodeMyUI/5376e109921ab4609c1857cf8010c4b8
// https://stackoverflow.com/questions/20751937/transition-background-color-via-slide-up-animation
// https://feathericons.com/
// https://postimg.cc/hXjzGPV5 vaporwave

function App() {

  const defaultTheme = useMediaPredicate('(prefers-color-scheme: light)') ? "light" : "dark";

  const [theme, setTheme] = useState({
    palette: defaultTheme
  });

  const sections = [
    {
      anchor:'fp-intro',
      title: 'Home',
      icon: (<Icon.Home/>),
      section: (<Introduction/>)
    },
    {
      anchor: 'fp-about',
      title: 'About',
      icon: (<Icon.User/>),
      section: (<About/>)
    },
    {
      anchor: 'fp-resume',
      title: 'Resume',
      icon: (<Icon.FileText/>),
      section: (<Resume/>)
    },
    {
      anchor: 'fp-projects',
      title: 'Projects',
      icon: (<Icon.Package/>),
      section: (<Projects/>)
    },
    {
      anchor: 'fp-blog',
      title: 'Blog',
      icon: (<Icon.Book/>),
      section: (<Blog/>)
    },
    {
      anchor: 'fp-contact',
      title: 'Contact',
      icon: (<Icon.Info/>),
      section: (<Contact/>)
    }
  ];

  return (
    <div className="App" theme={theme.palette}>
      <Menu setTheme={(palette) => setTheme({palette})} sections={sections} />
      <ReactFullpage
        licenseKey={'OPEN-SOURCE-GPLV3-LICENSE'}
        css3={true}
        menu={'#menu'}
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
  )
}

export default App;
