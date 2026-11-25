import { SectionTitle } from '../section-title/section-title';
import { ArrowBtn } from '../ui/arrow-btn/arrow-btn';
import actor1 from '../../../../shared/assets/images/actor-1.jpg';
import actor2 from '../../../../shared/assets/images/actor-2.jpg';
import actor3 from '../../../../shared/assets/images/actor-3.jpg';
import s from './troupe.module.scss';

const ACTORS = [
  { id: 1, img: actor1, name: 'Юрий Куклачев', role: 'Народный артист России' },
  { id: 2, img: actor2, name: 'Елена Куклачева', role: 'Заслуженный артист России' },
  { id: 3, img: actor3, name: 'Дмитрий Куклачев', role: 'Заслуженный артист России' },
];

export const Troupe = () => {
  return (
    <section className={s.troupe}>
      <SectionTitle title="Труппа" />
      <div className={s.grid}>
        {ACTORS.map(actor => (
          <div key={actor.id} className={s.card}>
            <img src={actor.img} alt={actor.name} className={s.image} />
            <div className={s.info}>
              <h3>{actor.name}</h3>
              <p>{actor.role}</p>
            </div>
          </div>
        ))}
      </div>
      <ArrowBtn />
    </section>
  );
};