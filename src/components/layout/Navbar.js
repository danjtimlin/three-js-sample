import React from 'react';
import PropTypes from 'prop-types';



const Navbar = ({ icon, title }) => {
  return (
    <nav className='navbar bg-primary'>
      <h1>
        {title}
      </h1>
      <ul>
        <li>
          <p>LOREM</p>
        </li>
          <br />
        <li>
          <h1>IPSUM</h1>
        </li>
      </ul>
    </nav>
  );
};

Navbar.defaultProps = {
  title: 'Three.js Sample page'
};

Navbar.propTypes = {
  title: PropTypes.string.isRequired,

};

export default Navbar;