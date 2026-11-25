import { useState } from 'react';
import s from './poster-controls.module.scss';

const DATES = [
  { id: 1, day: '26', weekday: 'пн', month: 'Октябрь' },
  { id: 2, day: '27', weekday: 'вт', month: 'Октябрь', isActive: true },
  { id: 3, day: '28', weekday: 'ср', month: 'Октябрь' },
  { id: 4, day: '29', weekday: 'чт', month: 'Октябрь' },
  { id: 5, day: '30', weekday: 'пт', month: 'Октябрь' },
  { id: 6, day: '31', weekday: 'сб', month: 'Октябрь' },
  { id: 7, day: '1', weekday: 'вс', month: 'Ноябрь' },
  { id: 8, day: '2', weekday: 'пн', month: 'Ноябрь' },
  { id: 9, day: '3', weekday: 'вт', month: 'Ноябрь' },
  { id: 10, day: '4', weekday: 'ср', month: 'Ноябрь' },
];

const FILTERS = ['Экскурсии', 'Мероприятия', 'Комплексные билеты', 'Услуги', 'Товары', 'Прокат'];

export const PosterControls = () => {
  const [activeDate, setActiveDate] = useState(2);
  const [activeFilter, setActiveFilter] = useState('Мероприятия');
  return (
    <div className={s.controls}>
      <div className={s.calendar}>
        <div className={s.month_title}>Октябрь</div>
        
        <div className={s.dates_scroll}>
          {DATES.map((date) => (
            <div 
              key={date.id} 
              className={`${s.date_box} ${activeDate === date.id ? s.active : ''}`}
              onClick={() => setActiveDate(date.id)}
            >
              <span className={s.day}>{date.day}</span>
              <span className={s.weekday}>{date.weekday}</span>
            </div>
          ))}
        </div>

        <button className={s.other_date_btn}>📅 Другая дата</button>
      </div>

      <div className={s.filters}>
        {FILTERS.map((filter) => (
          <button 
            key={filter}
            className={`${s.filter_btn} ${activeFilter === filter ? s.active : ''}`}
            onClick={() => setActiveFilter(filter)}
          >
            {filter}
          </button>
        ))}
      </div>
    </div>
  );
};