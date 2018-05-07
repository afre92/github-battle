var React = require('react');
// NavLink to show current route is active
var NavLink = require('react-router-dom').NavLink;

// stateless functional component
function Nav(){
  return (
    <ul className='nav'>
      <li>
        <NavLink exact activeClassName='active' to='/'>
          Home
        </NavLink>
      </li>
      <li>
        <NavLink activeClassName='active' to='/battle'>
          Battle
        </NavLink>
      </li>
      <li>
        <NavLink activeClassName='active' to='/popular'>
          Popular
        </NavLink>
      </li>
    </ul>
  )

}

module.exports = Nav;