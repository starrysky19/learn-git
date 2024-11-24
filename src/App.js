import React, { Component } from 'react';
import logo from './git-github.gif';
import './App.css';
import MarkdownComponent from './MarkdownComponent';
import exampleMarkdown from './gitcheats.md';  // Import your Markdown file
import FloatingMenu from './FloatingMenu';
import FooterCredit from './FooterCredit'; // Update the import

class App extends Component {
  // Function to reload the page
  reloadPage = () => {
    window.location.reload();
  };

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img
            src={logo}
            className="App-logo"
            alt="logo"
            onClick={this.reloadPage} // Trigger reload when clicked
          />
          <center>
            <h1 onClick={this.reloadPage}>Learn Git</h1>  {/* Trigger reload on heading click */}
          </center>
        </div>
        
        <p className="App-intro">
          {/* Any intro or description text here */}
        </p>

        <div className="markdown-content">
          {/* Render the Markdown content */}
          <MarkdownComponent markdownFile={exampleMarkdown} />
          {/* Footer */}
          <FooterCredit />
        </div>

        {/* Floating menu */}
        <FloatingMenu />
      </div>
    );
  }
}

export default App;
