import React, { useState, useEffect } from 'react';
import marked from 'marked';

function MarkdownComponent({ markdownFile }) {
  const [html, setHtml] = useState('');

  useEffect(() => {
    fetch(markdownFile)
      .then(response => response.text())
      .then(text => setHtml(marked(text)));
  }, [markdownFile]);

  return (
    <div className="markdown-main" dangerouslySetInnerHTML={{ __html: html }} />
  );
}


export default MarkdownComponent;
