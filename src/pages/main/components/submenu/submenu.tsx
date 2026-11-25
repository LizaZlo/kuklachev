import { Link, useLocation } from 'react-router-dom';
import s from './submenu.module.scss';

// Массив с пунктами для раздела "О театре"
const SUB_NAV_ITEMS = [
  { id: 'history', text: 'История', path: '/about' }, // Предполагаем, что история — это главная страница 'О театре'
  { id: 'events', text: 'События', path: '/about/events' },
  { id: 'press', text: 'Пресса', path: '/about/press' },
  { id: 'troupe', text: 'Труппа', path: '/about/troupe' },
  { id: 'schema', text: 'Схема зала', path: '/about/schema' },
  { id: 'docs', text: 'Офиц. документация', path: '/about/docs' },
  { id: 'reviews', text: 'Оценить', path: '/about/reviews' },
  { id: 'feedback', text: 'Обратная связь', path: '/about/feedback' },
  { id: 'faq', text: 'Часто задаваемые вопросы', path: '/about/faq' },
  { id: 'founders', text: 'Учредители', path: '/about/founders' },
];

export const Submenu = () => {
  const location = useLocation();

  return (
    <nav className={s.submenu}>
      <ul className={s.submenu__list}>
        {SUB_NAV_ITEMS.map((item) => {
          // Проверяем, активна ли ссылка (для подсветки)
          const isActive = location.pathname === item.path;

          return (
            <li key={item.id} className={s.submenu__item}>
              <Link 
                to={item.path} 
                className={`${s.submenu__link} ${isActive ? s.active : ''}`}
              >
                {item.text}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};