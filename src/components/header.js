
// When you type just 'rfc', You will get the suggestion by the extension. 
// Just press enter and you will get the default thing which includes 'import' and export'
import React from 'react';
// below we are importing the proto-type.
// You can type 'impt' for the default shortcut
// Proptypes are useful for debugging.
import PropTypes from 'prop-types';

import { Link } from 'react-router-dom';

// We can write parameters inside the below functions. 
// It can be used as a variable
export default function header(props) {
  return (
    // Now we are gonna copy the bootstrap navbar code and now, we are gonna have to make some important changes as we are working in javascriptreact.
    <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-navbar-custom">
  <Link className="navbar-brand" to="/">{props.title}</Link>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse color_custom" id="navbarSupportedContent">
    <ul className="navbar-nav mr-auto">
      <li className="nav-item active">
        <Link className="nav-link color_custom" to="/">Home <span className="sr-only">(current)</span></Link>
      </li>
      <li className="nav-item color_custom">
        <Link className="nav-link" to="/todo">To-Do list</Link>
      </li>
      <li className="nav-item color_custom">
        <Link className="nav-link" to="/bookmark">Bookmark</Link>
      </li>
      <li className="nav-item color_custom">
        <Link className="nav-link" to="/weather">Weather</Link>
      </li>
      <li className="nav-item color_custom">
        <Link className="nav-link" to="/about">ABOUT</Link>
      </li>
     
    </ul> 
   
    
  </div>
</nav>
    </div>
  )
}

// THe below code is used to show the below alternative title if no title mentioned in the app.js file
header.defaultProps = {
  title:" Your title here",
  searchbar: true
}

// below is the default proptypes.
header.propTypes = {
  // SO, here below we are setting the default proptype of title as string
  // If we use number instead of string in the app.js file, we will get the warning and it will be easy to debug.
  title:PropTypes.string,
  searchbar: PropTypes.bool
}
