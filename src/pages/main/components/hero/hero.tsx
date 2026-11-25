import gerb from 'C:/react-starter-template/template/src/shared/assets/images/gerb.png';
import logo from 'C:/react-starter-template/template/src/shared/assets/images/logo.png';
import cats from 'C:/react-starter-template/template/src/shared/assets/images/cats.png';
import { Link } from 'react-router-dom';
import s from './hero.module.scss';

export const Hero = () => {
  return (
    <section className={s.hero}>
      
      <img className={s.hero__gerb} src={gerb} alt="Герб" />

      <div className={s.hero__top}>
        <img className={s.hero__main_logo} src={logo} alt="Театр Куклачева Представляет" />
      </div>

      <div className={s.hero__content}>
        <div className={s.hero__info}>
          <h2 className={s.hero__title}>о театре</h2>
          <p className={s.hero__text}>
            Театр кошек Куклачева - это единственное место на планете, где животных зовут не просто кошками и собаками, а гордо называют артистами. Открывается волшебный занавес и пушистые артисты с радостью дарят зрителям праздник.
          </p>
          <Link to="/about" className={s.hero__btn}>
            Узнать подробнее
          </Link>
        </div>

        <div className={s.hero__image_wrapper}>
          <img className={s.hero__image} src={cats} alt="Коты театра" />
        </div>
      </div>
    </section>
  );
};