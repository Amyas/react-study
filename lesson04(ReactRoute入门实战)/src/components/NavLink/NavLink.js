import React from 'react';
import { Link } from 'react-router';

const NavLink = (props) => {
  console.log(props);
  return <Link {...props} activeClassName="active" />;
};

export default NavLink;
