import React from 'react';
import './FloatingMenu.css'; // Make sure to import the CSS file

function FloatingMenu() {
  return (
    <div className="floating-menu">
      <ul>
        <li><a href="#setup">Setup</a></li>
        <li><a href="#configuration-files">Configuration Files</a></li>
        <li><a href="#create">Create</a></li>
        <li><a href="#local-changes">Local Changes</a></li>
        <li><a href="#search">Search</a></li>
        <li><a href="#commit-history">Commit History</a></li>
        <li><a href="#move-rename">Move, Rename</a></li>
        <li><a href="#branches-tags">Branches, Tags</a></li>
        <li><a href="#update-publish">Update, Publish</a></li>
        <li><a href="#merge-rebase">Merge, Rebase</a></li>
        <li><a href="#undo">Undo</a></li>
      </ul>
    </div>
  );
}

export default FloatingMenu;
