import React from 'react'
import { NavLink } from 'react-router-dom'

const Header = () => (
  <header>
    <h1>Expensify App App D</h1>
    <NavLink exact to='/' activeClassName='is-active'>Home</NavLink>
    <NavLink exact to='/create' activeClassName='is-active'>Add</NavLink>
    <NavLink exact to='/help' activeClassName='is-active'>Help</NavLink>
  </header>
)

export default Header
