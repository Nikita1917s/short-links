import React, {FC, useContext} from 'react'
import {NavLink} from 'react-router-dom'
import {AuthContext} from '../context/AuthContext'
import { useNavigate } from 'react-router-dom';


export const Navbar: FC = () => {
  const auth = useContext(AuthContext);
  const history = useNavigate();

  const logoutHandler = (event: React.MouseEvent<HTMLElement>) => {
    event.preventDefault()
    auth.logout()

    history('/');
  }

  return (
    <nav>
      <div className="nav-wrapper blue darken-1" style={{ padding: '0 2rem' }}>
        <span className="brand-logo">Short links</span>
        <ul id="nav-mobile" className="right hide-on-med-and-down">
          <li><NavLink to="/create">Create</NavLink></li>
          <li><NavLink to="/links">Links</NavLink></li>
          <li><a href="/" onClick={logoutHandler}>Logout</a></li>
        </ul>
      </div>
    </nav>
  )
}
