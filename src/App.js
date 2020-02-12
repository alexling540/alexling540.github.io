import React, { useState } from 'react';
import ReactFullpage from '@fullpage/react-fullpage';
import 'typeface-lato';
import './App.css';
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

function App() {

  const [theme, setTheme] = useState({
    palette: "dark",
  });

  const [anchors, setAnchors] = useState({
    links: ['fp-intro', 'fp-about', 'fp-resume', 'fp-projects', 'fp-blog', 'fp-contact']
  });


  return (
    <div className="App" theme={theme.palette}>
      <Menu setTheme={(palette) => setTheme({palette})} setAnchors={(links) => setAnchors({links})} />
      <div id={'main'}>
        <ReactFullpage
          licenseKey={'OPEN-SOURCE-GPLV3-LICENSE'}
          css3={true}
          anchors={anchors.links}
          menu={'#menu'}
          render={({state, fullpageApi}) => {
            return (
              <ReactFullpage.Wrapper>
                <div className={'section'}>
                  <Introduction />
                </div>
                <div className={'section'}>
                  <About />
                </div>
                <div className={'section'}>
                  <Resume />
                </div>
                <div className={'section'}>
                  <Projects />
                </div>
                <div className={'section'}>
                  <Blog />
                </div>
                <div className={'section'}>
                  <Contact />
                </div>
              </ReactFullpage.Wrapper>
            );
          }}
        />
      </div>
    </div>
  )
}

export default App;
