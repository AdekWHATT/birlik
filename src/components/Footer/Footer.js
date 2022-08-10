import React from 'react'
import './Footer.css'
import { Link, NavLink, Outlet } from "react-router-dom";
import logo from '../../images/logo.svg'
import bitru from '../../images/bitru.svg'
const Footer = () => {
    return (
        <>
            <div className='container-fluid container-footer mt-5'>
                <div className='row'>
                    <div className='col'>
                        <div className='container'>
                            <div className="row mt-4">
                                <div class=" col-sm-12 col-lg-5">
                                    <div class="logo-wr d-flex">
                                        <a href='/'><img src={logo} alt="Бирлик" /></a>

                                        <span class="brand-wrapp__text align-self-center px-3">МОО Азербайджанская НКА г.
                                            Лениногорск,
                                            Лениногорского района «Бирлик» (Единство)</span>
                                    </div>
                                </div>
                                <div class="col-sm-12 col-lg-7 align-self-center d-none d-sm-block">
                                    <ul class="menu-list d-flex justify-content-between">
                                        <NavLink to='/diaspora'>
                                            <li>Диаспора</li>
                                        </NavLink>
                                        <Outlet />
                                        <NavLink to='/boss'>
                                            <li>Руководство</li>
                                        </NavLink>
                                        <Outlet />
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
                            <hr className='footer_hr' />
                            <div className='row'>
                                <div className='col-lg-6 col-sm-12'>
                                    <span className='allr_text'>2022 © Все права защищены</span>
                                </div>
                                <div className='col-lg-6 col-sm-12 text-end'>
                                    <Link to="https://bitru.ru/"> <img src={bitru} /></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer