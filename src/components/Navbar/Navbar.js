import React from 'react'
import './Navbar.css'
import { NavLink, Outlet, Link } from "react-router-dom";
import logo from '../../images/logo.svg'
import Dropdown from 'react-bootstrap/Dropdown';
const Navbar = () => {
  return (
    <>
      <div className="container navbar-container mt-3 d-none d-sm-block">
        <div className="row">
          <div className="col-sm-12 col-lg-5">
            <div className="logo-wr d-flex">
              <a href='/'><img className='img-md-fluid' src={logo} alt="Бирлик" /></a>

              <span className="brand-wrapp__text align-self-center px-3">МОО Азербайджанская НКА<br />г.Лениногорск,Лениногорского района «Бирлик» (Единство)</span>
            </div>
          </div>
          <div className="col-sm-12 col-lg-7 align-self-center">
            <ul className="menu-list d-flex justify-content-between">
              <NavLink to='/diaspora'>
                <li>Диаспора</li>
              </NavLink>
              <NavLink to='/boss'>
                <li>Руководство</li>
              </NavLink>
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

          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div className='container-fluid d-block d-sm-none'>
        <div className='row pt-3'>
          <div className='col-12'>
            <Dropdown>
              <Dropdown.Toggle>
                Меню
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item><NavLink to='/diaspora'>
                  <li>Диаспора</li>
                </NavLink></Dropdown.Item>
                <Dropdown.Item><NavLink to='/boss'>
                  <li>Руководство</li>
                </NavLink></Dropdown.Item>
                <Dropdown.Item><NavLink to='/news'>
                  <li>Новости</li>
                </NavLink></Dropdown.Item>

                <Dropdown.Item><NavLink to='/media'>
                <li>Медиа</li>
              </NavLink></Dropdown.Item>

                <Dropdown.Item><NavLink to='/contacts'>
                <li>Контакты</li>
              </NavLink></Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </div>
        </div>
        <div className='row'>
          <div className='col-12 text-center'>
            <Link to='/'> <img src={logo} className='image-fluid' /></Link>
          </div>
        </div>
        <div className='row'>
          <div className='col-12 text-center'>
            <span class="brand-wrapp__text align-self-center px-3">МОО Азербайджанская НКА г.Лениногорск,Лениногорского района «Бирлик» (Единство)</span>
          </div>
        </div>

      </div>
    </>
  )
}

export default Navbar;