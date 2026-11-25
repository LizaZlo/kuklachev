import { SectionTitle } from '../section-title/section-title';
import s from './tours.module.scss';

// Данные для карточек
const TOURS_DATA = [
  {
    id: 1,
    name: 'Екатерина Куклачева',
    role: 'Солистка, актриса, художник театра',
    events: [
      { date: '19 марта 2027', time: '19:00', place: 'г. Симферополь, Дом Офицеров флота РФ' },
      { date: '20 марта 2027', time: '19:00', place: 'г. Керчь, ДК "Корабел"' },
      { date: '22 марта 2027', time: '19:00', place: 'г. Керчь, ДК "Корабел"' },
    ],
  },
  {
    id: 2,
    name: 'Дмитрий Куклачев',
    role: 'Заслуженный артист России',
    events: [
      { date: '26 октября 2026', time: '19:00', place: 'г. Пермь, ДК им. Гагарина' },
      { date: '28 октября 2026', time: '19:00', place: 'г. Москва, Золотое Кольцо' },
      { date: '27 ноября 2026', time: '19:00', place: 'г. Москва, Золотое Кольцо' },
    ],
  },
];

export const Tours = () => {
  return (
    <section className={s.tours}>
      <SectionTitle title="Гастроли" />
      
      <div className={s.tours__wrapper}>
        {/* Сетка для двух карточек */}
        <div className={s.tours__grid}>
          {TOURS_DATA.map((artist) => (
            <div key={artist.id} className={s.card}>
              <h3 className={s.card__name}>{artist.name}</h3>
              <p className={s.card__role}>{artist.role}</p>

              {/* Перебираем массив с датами для каждого артиста */}
              <div className={s.card__events}>
                {artist.events.map((event, index) => (
                  <div key={index} className={s.card__event}>
                    <div className={s.card__event_info}>
                      <span className={s.card__date}>{event.date}</span>
                      <span className={s.card__time}>Время: {event.time}</span>
                      <span className={s.card__place}>{event.place}</span>
                    </div>
                    <button className={s.card__btn}>Купить билет</button>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Круглая стрелка справа */}
        <button className={s.arrow_btn} aria-label="Все гастроли">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M9 18L15 12L9 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
      </div>
    </section>
  );
};