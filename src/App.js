import React from 'react';
import ReactFullpage from '@fullpage/react-fullpage';
import logo from './logo.svg';
import 'typeface-lato';
import './App.css';
import Menu from './components/menu';
import Introduction from './components/intro';
import About from './components/about';
import Resume from './components/resume';
import Projects from './components/projects';
import Blog from './components/blog';
import Contact from './components/contact';

function App() {
  return (
    <div className="App .dark">
      <Menu />
      <div id={'main'}>
        <ReactFullpage
          licenseKey={'OPEN-SOURCE-GPLV3-LICENSE'}
          css3={true}
          anchors={['intro', 'about', 'resume', 'projects', 'blog', 'contact']}
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
      abc
    </div>
  )
}

export default App;
