import { Link } from 'react-router-dom';
import { SectionTitle } from '../section-title/section-title';
import { EventCard } from '../event-card/event-card';

import afisha1 from '../../../../shared/assets/images/afiisha-1.jpg';
import afisha2 from '../../../../shared/assets/images/afiisha-2.jpg';
import afisha3 from '../../../../shared/assets/images/afiisha-3.jpg';
import s from './poster.module.scss';

export const Poster = () => {
  return (
    <section className={s.poster}>
      <SectionTitle title="Афиша" />
      
      <div className={s.poster__list}>
        <EventCard 
          date="30" dayOfWeek="октября/пт" time="14:00" 
          image={afisha1} 
          title="Кот и повар при участии Куклачева" 
          description="Место проведения: ГБУК г. Москвы «Театр кошек Куклачева». пр-кт. Кутузовский, д. 25"
        />
        <EventCard 
          date="01" dayOfWeek="ноября/вс" time="12:00" 
          image={afisha2} 
          title="Я клоун или котостройка" 
          description="Место проведения: ГБУК г. Москвы «Театр кошек Куклачева». пр-кт. Кутузовский, д. 25"
        />
        <EventCard 
          date="04" dayOfWeek="ноября/ср" time="11:00" 
          image={afisha3} 
          title="Волшебные кошки при участии Юрия Куклачева" 
          description="Место проведения: ГБУК г. Москвы «Театр кошек Куклачева». пр-кт. Кутузовский, д. 25"
        />
      </div>
      
      <div className={s.poster__arrow_wrapper}>
        <Link to="/afisha" className={s.poster__arrow_btn}></Link>
      </div>
    </section>
  );
};