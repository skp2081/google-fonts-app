import React from 'react';
import { NavLink } from 'react-router-dom';

export function Nav(){
  return (
    <ul className ="nav">
      <li>
        <NavLink exact  className="links" activeClassName = 'active' to='/'>
          Home
        </NavLink>
      </li>
      <li>
        <NavLink className="links" activeClassName = 'active' to='/2'>
          Page2
        </NavLink>
      </li>
      <li>
        <NavLink  className="links" activeClassName = 'active' to='/3'>
         Page3
        </NavLink>
      </li>
    </ul>
  )
}