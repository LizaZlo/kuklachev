import { SectionTitle } from '../section-title/section-title';
import excursionImg from 'C:/react-starter-template/template/src/shared/assets/images/excursion.jpg';
import s from './excursions.module.scss';

export const Excursions = () => {
  return (
    <section className={s.excursions}>
      <SectionTitle title="Экскурсии" />
      <div className={s.card}>
        <img src={excursionImg} alt="Экскурсия" className={s.image} />
        <div className={s.content}>
          <h3>Хрустальный мир кошек Куклачева</h3>
          <p>Как живут “артисты”, рассказ об истории театра, рассказ о подходе к работе с животными, общение с кошками-артистами и возможность...</p>
          <p>!!! Важное условие: экскурсию нужно заранее согласовать с театром. Просто прийти и сразу попасть не получится — лучше позвонить в кассу и забронировать слот под ваш визит!!!</p>
          <button className={s.btn}>Подробнее</button>
        </div>
      </div>
    </section>
  );
};