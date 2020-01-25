import React from 'react';
import logo from './logo.svg';
import './App.css';
import Sidebar from "./components/sidebar";
import Introduction from "./components/intro";
import About from "./components/about";
import Projects from "./components/projects/projects"
import Blog from "./components/blog/blog";
import Contact from "./components/contact";

function App() {
  return (
    <div className="App">
      <Sidebar />
      <div>
        <Introduction/>
        <About/>
        <Projects/>
        <Blog/>
        <Contact/>
      </div>

      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
