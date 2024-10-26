import React, { Component } from 'react';
import logo from './git-github.gif';
import './App.css';
import MarkdownComponent from './MarkdownComponent';
import exampleMarkdown from './gitcheats.md';  // Import your Markdown file
import FloatingMenu from './FloatingMenu';
import FooterCredit from './FooterCredit'; // Update the import

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Learn Git</h2>
        </div>
        <p className="App-intro">
         
        </p>
        <div className="markdown-content">
        
        <MarkdownComponent markdownFile={exampleMarkdown} />
        <FooterCredit />

        </div>
        <FloatingMenu />

        
        </div>
    );
  }
}

export default App;
