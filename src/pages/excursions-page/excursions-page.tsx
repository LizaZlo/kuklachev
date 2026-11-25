import { Header } from '../main/components/header';
import { Footer } from '../main/components/footer';
import s from './excursions-page.module.scss';

// Импортируем картинки (убедитесь, что они есть в папке images)
import treeHouse from '../../shared/assets/images/tree-house.jpg'; 
import theater from '../../shared/assets/images/excursion.jpg'; 
import clown from '../../shared/assets/images/clown.jpg'; 
import catStriped from '../../shared/assets/images/cat-striped.png'; 

export const ExcursionsPage = () => {
  return (
    <div className={s.page}>
      <Header />
      
      <main className={s.content}>
        {/* Заголовок */}
        <h1 className={s.main_title}>“Хрустальный мир кошек Куклачева”</h1>

        {/* Верхняя часть: Текст слева, коллаж справа */}
        <div className={s.top_section}>
          <div className={s.text_col}>
            <h2>Экскурсия по театру кошек Юрия Куклачева</h2>
            <p>Хотите увидеть, как живут кошки-артисты, и узнать, как создается волшебство на сцене? Экскурсия “Хрустальный мир кошек” раскрывает закулисье театра и философию доброты, на которой строится работа с животными.</p>
            <p>В программе:</p>
            <ul className={s.list}>
              <li>История театра - от первых выступлений до сегодняшнего дня.</li>
              <li>Апартаменты кошек: русский стиль, японский стиль, хай-тек и “Хрустальный замок”.</li>
              <li>Принципы работы с животными - акцент на бережном отношении и понимании природы кошки.</li>
              <li>Общение с артистами - возможность познакомиться с кошками и сделать фото.</li>
              <li>Интерактив для детей в рамках проекта "Школа Доброты": жонглирование, песочная анимация, элементы пантомимы.</li>
              <li>Возможная встреча с Юрием Дмитриевичем Куклачевым.</li>
            </ul>
          </div>
          <div className={s.image_col}>
            <img src={treeHouse} alt="Домики для кошек" className={s.img_tree} />
          </div>
        </div>

        {/* Нижняя часть: Фото слева, Таблица деталей справа */}
        <div className={s.middle_section}>
          <div className={s.photo_col}>
            <img src={clown} alt="Юрий Куклачев" className={s.img_clown} />
            <img src={theater} alt="Театр" className={s.img_theater} />
          </div>
          
          <div className={s.details_col}>
            <h2>Практические детали:</h2>
            <table className={s.details_table}>
              <tbody>
                <tr>
                  <td>Продолжительность</td>
                  <td>1,5 часа</td>
                </tr>
                <tr>
                  <td>Возраст</td>
                  <td>от 4 лет</td>
                </tr>
                <tr>
                  <td>Формат</td>
                  <td>групповая, по предварительной записи</td>
                </tr>
                <tr>
                  <td>Место проведения</td>
                  <td>Театр кошек Юрия Куклачева, Москва</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Блок "Как забронировать" */}
        <div className={s.booking_section}>
          <div className={s.booking_text}>
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
          <img src={catStriped} alt="Кот" className={s.img_cat} />
        </div>

      </main>

      <Footer />
    </div>
  );
};