import { Header } from '../main/components/header';
import { SectionTitle } from '../main/components/section-title/section-title';
import { PosterControls } from '../main/components/poster-controls/poster-controls';
import { EventCard } from '../main/components/event-card/event-card';
import { Footer } from '../main/components/footer';

import afisha1 from 'C:/react-starter-template/template/src/shared/assets/images/afiisha-1.jpg'; 
import afisha2 from 'C:/react-starter-template/template/src/shared/assets/images/afiisha-2.jpg';
import afisha3 from 'C:/react-starter-template/template/src/shared/assets/images/afiisha-3.jpg';
import s from './afisha.module.scss';

export const AfishaPage = () => {
  return (
    <div className={s.page}>
      <Header />
      
      <main className={s.content}>
        <SectionTitle title="Афиша" />
        <PosterControls />
        
        <div className={s.list}>
          <EventCard 
            date="21" dayOfWeek="ноября/сб" time="12:00" 
            image={afisha1} 
            title="Лебединое озеро, или как принц невесту искал" 
            description="Место проведения: ГБУК г. Москвы «Театр кошек Куклачева». пр-кт. Кутузовский, д. 25"
          />
          <EventCard 
            date="21" dayOfWeek="ноября/сб" time="15:00" 
            image={afisha2} 
            title="Кот и повар при участии Куклачева" 
            description="Место проведения: ГБУК г. Москвы «Театр кошек Куклачева». пр-кт. Кутузовский, д. 25"
          />
          <EventCard 
            date="22" dayOfWeek="ноября/вс" time="12:00" 
            image={afisha3} 
            title="Я клоун или котостройка" 
            description="Место проведения: ГБУК г. Москвы «Театр кошек Куклачева». пр-кт. Кутузовский, д. 25"
          />
        </div>
      </main>

      <Footer />
    </div>
  );
};