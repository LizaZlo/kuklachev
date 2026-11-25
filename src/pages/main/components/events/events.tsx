import { SectionTitle } from '../section-title/section-title';
import { ArrowBtn } from '../ui/arrow-btn/arrow-btn';
import ev1 from 'C:/react-starter-template/template/src/shared/assets/images/event-1.jpg';
import ev2 from 'C:/react-starter-template/template/src/shared/assets/images/event-2.jpg';
import s from './events.module.scss';

export const Events = () => {
  return (
    <section className={s.events}>
      <SectionTitle title="События" />
      <div className={s.list}>
        <div className={s.card}>
          <div className={s.date}><span>07</span> мая 2026</div>
          <img src={ev1} alt="Событие" className={s.img} />
          <div className={s.content}>
            <h3>С 7 по 11 мая в спектаклях принимает участие народный артист России Юрий Дмитриевич Куклачев</h3>
            <button className={s.btn}>Подробнее</button>
          </div>
        </div>
        <div className={s.card}>
          <div className={s.date}><span>17</span> марта 2026</div>
          <img src={ev2} alt="Событие" className={s.img} />
          <div className={s.content}>
            <h3>Дорогие друзья! 27 марта в 17:00 приглашаем вас на традиционную программу "Ночь театров"</h3>
            <button className={s.btn}>Подробнее</button>
          </div>
        </div>
      </div>
      <ArrowBtn />
    </section>
  );
};