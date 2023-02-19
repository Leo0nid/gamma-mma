import React from 'react'
import { NavLink } from 'react-router-dom'


const Header = () => {
    return (
        <header className='header'>
            <div className='container'>
                <div className='header__wrapper'>
                    <NavLink to="/" className='header__logo'>UFC</NavLink>
                    <nav className='header__nav'>
                        <NavLink to="/" className='header__link'>Главная</NavLink>
                        <NavLink to="/federation" className='header__link'>Федерация</NavLink>
                        <NavLink to="/events" className='header__link'>Турниры</NavLink>
                        <NavLink to="/fighters" className='header__link'>Спортсмены</NavLink>
                        <NavLink to="/couches" className='header__link'>Тренеры</NavLink>
                        <NavLink to="/news" className='header__link'>Новости</NavLink>
                        <NavLink to="/trainings" className='header__link'>Сборы</NavLink>
                        <NavLink to="/online_store" className='header__link'>Магазин</NavLink>
                    </nav>
                </div>
            </div>
        </header>
    )
}

export default Header