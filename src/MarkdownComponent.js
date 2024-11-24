import React, { useState, useEffect } from 'react';
import ReactMarkdown from 'react-markdown';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { solarizedlight } from 'react-syntax-highlighter/dist/esm/styles/prism';
import './MarkdownComponent.css';  
const CodeBlock = ({ language, value }) => {
  const [copyStatus, setCopyStatus] = useState('Copy Code'); 

  const handleCopyClick = () => {
    navigator.clipboard.writeText(value)
      .then(() => {
        setCopyStatus('Copied'); 
        // After 2 seconds, change the text back to 'Copy Code'
        setTimeout(() => {
          setCopyStatus('Copy Code');
        }, 3000);  
      })
      .catch(err => {
        alert('Failed to copy code: ', err);  
      });
  };

  return (
    <div className="code-block-container">
      <SyntaxHighlighter language={language || 'javascript'} style={solarizedlight}>
        {value}
      </SyntaxHighlighter>
      <button className="copy-button" onClick={handleCopyClick}>
        {copyStatus} {/* Display the current button text */}
      </button>
    </div>
  );
};


function MarkdownComponent({ markdownFile }) {
  const [markdownContent, setMarkdownContent] = useState('');

  useEffect(() => {
    fetch(markdownFile)
      .then(response => response.text())
      .then(text => setMarkdownContent(text));
  }, [markdownFile]);

  return (
    <div className="markdown-main">
      
      {/* Render the markdown content using react-markdown */}
      <ReactMarkdown
        children={markdownContent}
        components={{
          // Handle code blocks and apply syntax highlighting
          code: ({ node, inline, className, children, ...props }) => {
            const language = className ? className.replace('language-', '') : null;
            return !inline ? (
              <CodeBlock language={language} value={String(children).replace(/\n$/, '')} />
            ) : (
              <code {...props}>{children}</code>
            );
          },

          // For headings, ensure an ID is applied
          h1: ({ children }) => (
            <h1 id={children.toString().toLowerCase().replace(/\s+/g, '-').replace(/[^\w\-]+/g, '')}>
              {children}
            </h1>
          ),
          h2: ({ children }) => (
            <h2 id={children.toString().toLowerCase().replace(/\s+/g, '-').replace(/[^\w\-]+/g, '')}>
              {children}
            </h2>
          ),
          h3: ({ children }) => (
            <h3 id={children.toString().toLowerCase().replace(/\s+/g, '-').replace(/[^\w\-]+/g, '')}>
              {children}
            </h3>
          ),
        }}
      />
    </div>
  );
}

export default MarkdownComponent;
