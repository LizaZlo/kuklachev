import { SectionTitle } from '../section-title/section-title';
import { ArrowBtn } from '../ui/arrow-btn/arrow-btn';
import pressImg from 'C:/react-starter-template/template/src/shared/assets/images/press-1.jpg';
import s from './press.module.scss';

export const Press = () => {
  return (
    <section className={s.press}>
      <SectionTitle title="Пресса" />
      <div className={s.card}>
        <img src={pressImg} alt="Пресса" className={s.image} />
        <div className={s.content}>
          <h3>Дрессировщик Куклачев, модель Лопырева и др. звезды обеспокоены решением замуровать подвалы московских домов.</h3>
          <p>Дрессировщик Куклачев, модель Лопырева и др. звезды обеспокоены решением замуровать подвалы московских домов...</p>
          <button className={s.btn}>Подробнее</button>
        </div>
      </div>
      <ArrowBtn />
    </section>
  );
};