import React from 'react'
import './Navbar.css'
import { NavLink, Outlet,Link} from "react-router-dom";
import logo from '../../images/logo.svg'
const Navbar = () => {
  return (
    <>
      <div className="container navbar-container mt-3">
        <div className="row">
          <div class="col-md-6">
            <div class="logo-wr d-flex">
              <a href='/'><img className='img-md-fluid' src={logo} alt="Бирлик" /></a>
             
              <span class="brand-wrapp__text align-self-center px-3">МОО Азербайджанская НКА г.
                Лениногорск,
                Лениногорского района «Бирлик» (Единство)</span>
            </div>
          </div>
          <div class="col-md-6 align-self-center">
            <ul class="menu-list d-flex justify-content-between">
              <NavLink to='/diaspora'>
                <li>Диаспора</li>
              </NavLink>
              <Outlet/>
              <NavLink to='/boss'>
                <li>Руководство</li>
              </NavLink>
              <Outlet/>
              <NavLink to='/news'>
                <li>Новости</li>
              </NavLink>
              <NavLink to='/media'>
                <li>Медиа</li>
              </NavLink>
              <NavLink to='/contacts'>
                <li>Контакты</li>
              </NavLink>
            </ul>
            <Outlet />
          </div>
        </div>
      </div>
    </>
  )
}

export default Navbar