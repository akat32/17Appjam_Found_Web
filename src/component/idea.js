import React, { Component } from 'react';
import '../style/idea.css';
// import { Link } from 'react-router-dom';

import { default as Bottom } from './bottom';
import { default as Top } from './top';

class Idea extends Component {
  render() {
    return (
      <div className="idea">
        <Top/>
        <div className = "some">asd</div>
        <Bottom/>
      </div>
    );
  }
}

export default Idea;