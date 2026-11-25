import { SectionTitle } from '../section-title/section-title';
import { ArrowBtn } from '../ui/arrow-btn/arrow-btn';
import perf1 from 'C:/react-starter-template/template/src/shared/assets/images/perf-1.jpg';
import perf2 from 'C:/react-starter-template/template/src/shared/assets/images/perf-2.jpg';
import perf3 from 'C:/react-starter-template/template/src/shared/assets/images/perf-3.jpg';
import s from './performances.module.scss';

const PERFORMANCES = [
  { id: 1, img: perf1, title: 'Рождественская история', place: 'Место проведения: ГБУК г. Москвы "Театр кошек Куклачева"' },
  { id: 2, img: perf2, title: 'Зимняя сказка', place: 'Место проведения: ГБУК г. Москвы "Театр кошек Куклачева"' },
  { id: 3, img: perf3, title: 'Лебединое озеро, или кошки, которые могут всё', place: 'Место проведения: ГБУК г. Москвы "Театр кошек Куклачева"' },
];

export const Performances = () => {
  return (
    <section className={s.performances}>
      <SectionTitle title="Спектакли" />
      <div className={s.grid}>
        {PERFORMANCES.map((item) => (
          <div key={item.id} className={s.card}>
            <img src={item.img} alt={item.title} className={s.image} />
            <div className={s.content}>
              <h3>{item.title}</h3>
              <p>{item.place}</p>
              <div className={s.actions}>
                <button className={s.btn_outline}>Подробнее</button>
                <button className={s.btn_solid}>Купить билет</button>
              </div>
            </div>
          </div>
        ))}
      </div>
      <ArrowBtn />
    </section>
  );
};