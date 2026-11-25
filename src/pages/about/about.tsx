import { Header } from '../main/components/header';
import { Submenu } from '../main/components/submenu/submenu';
import { Footer } from '../main/components/footer';
import s from './about.module.scss';

import img1970 from '../../shared/assets/images/about-1970.jpg';
import img1990 from '../../shared/assets/images/about-1990.jpg';
import img2005 from '../../shared/assets/images/about-2005.png';
import img2014 from '../../shared/assets/images/about-2014.jpg';
import catYellow from '../../shared/assets/images/cat-footer2.png';

export const AboutPage = () => {
  return (
    <div className={s.page}>
      <Header />
      <Submenu />
      <main className={s.content}>
        
        <div className={s.title_wrapper}>
          <h1 className={s.main_title}>История</h1>
          <div className={s.title_line}></div>
        </div>

        <div className={s.timeline}>
          
          <div className={s.timeline_item}>
            <div className={s.img_left}>
              <img src={img1970} alt="1970 год" />
            </div>
            <div className={s.point}>
              <span className={s.year}>1970</span>
            </div>
            <div className={s.text_right}>
              <p>Все началось в 1970-х, когда Юрий Куклачёв впервые вывел на арену домашнюю кошку. В то время цирковая традиция строилась на дрессуре и принуждении. Но Куклачёв пошел другим путем: он отказался от силы и выбрал доверие. Его метод был построен на наблюдении за характером каждой кошки, на поиске её природных склонностей и талантов. Кошка не должна была выполнять команду любой ценой – она должна была хотеть участвовать в номере. Так родилась философия театра: искусство через доброту и уважение к природе животного.</p>
            </div>
          </div>

          <div className={`${s.timeline_item} ${s.reversed}`}>
            <div className={s.text_left}>
              <p>В 1990 году при поддержке мэрии Москвы Юрий Дмитриевич получил помещение бывшего кинотеатра «Призыв» на Кутузовском проспекте, 25. 25 февраля 1991 года открылся частный театр, первоначально названный «Кот хаус». Это место стало не просто сценой, а настоящим домом для кошек-артистов. Здесь продумали быт животных: апартаменты в разных стилях, уютные пространства, где кошки чувствуют себя спокойно. Именно эта забота о комфорте артистов стала частью концепции театра.</p>
            </div>
            <div className={s.point}>
              <span className={s.year}>1990</span>
            </div>
            <div className={s.img_right}>
              <img src={img1990} alt="1990 год" />
            </div>
          </div>

          <div className={s.timeline_item}>
            <div className={s.img_left}>
              <img src={img2005} alt="2005 год" />
            </div>
            <div className={s.point}>
              <span className={s.year}>2005</span>
            </div>
            <div className={s.text_right}>
              <p>Важной вехой стал 2005 год, когда театр получил статус Государственного учреждения культуры города Москвы. Это подтвердило его значимость как культурного проекта, который не только развлекает, но и воспитывает.</p>
            </div>
          </div>

          <div className={`${s.timeline_item} ${s.reversed}`}>
            <div className={s.text_left}>
              <p>С 2014 года в театре работают два самостоятельных коллектива: под руководством Юрия Куклачева и его сына, заслуженного артиста России Дмитрия Куклачева. Оба коллектива сохраняют единую философию, но развивают ее по-своему: у каждого – свои спектакли, свои художественные приемы, свой взгляд на взаимодействие с животными. При этом неизменным остаётся главный принцип: кошка – не реквизит, а партнёр и соавтор номера.</p>
            </div>
            <div className={s.point}>
              <span className={s.year}>2014</span>
            </div>
            <div className={s.img_right}>
              <img src={img2014} alt="2014 год" />
            </div>
          </div>

        </div>

        <div className={s.outro_block}>
          <p>Подробнее узнать историю театра, узнать как живут артисты, встретиться с Юрием Куклачевым, а также узнать о подходе к животным - записывайтесь на экскурсию "Хрустальный мир кошек Куклачева"</p>
          <a href="/excursions" className={s.more_btn}>ПОДРОБНЕЕ</a>
        </div>

        <div className={s.booking_section}>
          <h2>Как забронировать:</h2>
          <ol className={s.numbered_list}>
            <li>Позвоните в кассу театра: +7 (499) 243 - 40 - 05.</li>
            <li>Сообщите дату спектакля (экскурсия чаще всего проходит перед представлением).</li>
            <li>Уточните наличие мест и особенности программы (например, мастер-класс).</li>
            <li>Подтвердите бронирование.</li>
          </ol>
          <p className={s.address}>📍 Адрес театра: Москва, Кутузовский проспект, 25.</p>
          <p className={s.address}>🕒 Часы работы кассы: ежедневно с 11:00 до 19:00.</p>
        </div>

        <img src={catYellow} alt="Кот" className={s.bottom_cat} />

      </main>

      <Footer />
    </div>
  );
};