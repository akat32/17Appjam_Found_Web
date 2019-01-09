import React, { Component } from 'react';
import '../style/project.css';
// import { Link } from 'react-router-dom';

import { default as Bottom } from './bottom';
import { default as Top } from './top';

class Project extends Component {
  render() {
    return (
      <div className="project">
        <Top/>
        asd
        <Bottom/>
      </div>
    );
  }
}

export default Project;