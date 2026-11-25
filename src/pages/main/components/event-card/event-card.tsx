import type { FC } from 'react';
import s from './event-card.module.scss';

interface IProps {
  date: string;
  dayOfWeek: string;
  time: string;
  image: string;
  title: string;
  description: string;
}

export const EventCard: FC<IProps> = ({ date, dayOfWeek, time, image, title, description }) => {
  return (
    <div className={s.card}>
      
      {/* 1. Дата */}
      <div className={s.card__date_block}>
        <span className={s.card__date}>{date}</span>
        <div className={s.card__date_info}>
          <span className={s.card__day}>{dayOfWeek}</span>
          <span className={s.card__time}>Время: {time}</span>
        </div>
      </div>
      
      {/* 2. Картинка */}
      <div className={s.card__image_wrapper}>
        <img className={s.card__image} src={image} alt={title} />
      </div>

      {/* 3. Текст и кнопки */}
      <div className={s.card__content}>
        <h3 className={s.card__title}>{title}</h3>
        <p className={s.card__description}>{description}</p>
        
        <div className={s.card__actions}>
          <button className={s.card__btn_outline}>Подробнее</button>
          <button className={s.card__btn_solid}>Купить билет</button>
        </div>
      </div>

    </div>
  );
};