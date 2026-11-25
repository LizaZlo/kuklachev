import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import s from './header.module.scss';

const NAV_ITEMS = [
  { id: 'main', text: 'Главная', path: '/' },
  { id: 'excursions', text: 'Экскурсии', path: '/excursions' }, // временно
  { id: 'poster', text: 'Афиша', path: '/afisha' }, // <-- Важная ссылка!
  { id: 'tours', text: 'Гастроли', path: '/tours' }, // временно
  { id: 'performances', text: 'Спектакли', path: '/performances' }, // временно
  { id: 'about', text: 'О театре', path: '/about' }, // временно
  { id: 'contacts', text: 'Контакты', path: '/contacts' }, // временно
  { id: 'projects', text: 'Спец. проект', path: '/special-project' }, // временно
];

export const Header = () => {
  const location = useLocation(); // Получаем текущий URL

  return (
    <header className={s.header}>
      <nav className={s.header__nav}>
        <ul className={s.header__list}>
          {NAV_ITEMS.map((item) => {
            // Проверяем, совпадает ли текущий URL с тем, куда ведет ссылка
            const isActive = location.pathname === item.path;

            return (
              <li 
                key={item.id} 
                // ВАЖНО: Класс active вешаем на <li>, так как стили рамки/фона у нас на нем
                className={`${s.header__item} ${isActive ? s.active : ''}`}
              >
                <Link to={item.path} className={s.header__link}>
                  {item.text}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </header>
  );
};