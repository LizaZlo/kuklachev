import { Header } from '../main/components/header';
import { Footer } from '../main/components/footer';
import { SectionTitle } from '../main/components/section-title/section-title';
import s from './special-project.module.scss';

// Импорт картинок (убедитесь, что названия совпадают с вашими файлами в images)
import catGlusha from '../../shared/assets/images/shelter-cat-1.png'; // Используем ваши картинки кошек
import catVizha from '../../shared/assets/images/shelter-cat-2.png';
import catHolly from '../../shared/assets/images/shelter-cat-3.png';

import helper1 from '../../shared/assets/images/actor-3.png'; // Дмитрий
import helper2 from '../../shared/assets/images/vik.png'; // Логотип ГК ВИК (пока заглушка)
import helper3 from '../../shared/assets/images/actor-2.png'; // Евгения

import manWithCat from '../../shared/assets/images/shelter-save.png'; // Мужчина с котом
import shelterMain from '../../shared/assets/images/shelter-main.jpg'; // Приют
import cattery from '../../shared/assets/images/cats-donbass.png';
import catFooter from '../../shared/assets/images/cat-footer.png'; // Маленький котик для подвала


export const SpecialProjectPage = () => {
  return (
    <div className={s.page}>
      <Header />
      
      <main className={s.content}>
        
        {/* --- СЕКЦИЯ 1: КОШКИ ДОНБАССА --- */}
        <section className={s.section}>
          <div className={s.title_center}>
            <h2>Кошки Донбасса</h2>
            <div className={s.title_line}></div>
          </div>
          
          <p className={s.intro_text}>
            Истории Вижи, Глуши и Холли, как фронтовые животные прошли путь от опасности и приюта до работы, реабилитации и сцены Театра кошек Куклачева.
          </p>
          <button className={s.btn_yellow}>Котята ищут дом</button>

          <div className={s.cats_grid}>
            {/* Глуша */}
            <div className={s.cat_card}>
              <div className={s.cat_img_wrapper}>
                <img src={catGlusha} alt="Глуша" />
              </div>
              <h3>Глуша</h3>
              <p className={s.cat_location}>поселок Глушково, Курская</p>
              <p className={s.cat_desc}>В опустевшем поселке Глушково тревожную кошку заметили волонтеры. Она выходила к людям и просила помощи в поисках любимой хозяйки. Глуша проявила удивительное доверие и после долгих скитаний оказалась в безопасности.</p>
            </div>
            {/* Вижа */}
            <div className={s.cat_card}>
              <div className={s.cat_img_wrapper}>
                <img src={catVizha} alt="Вижа" />
              </div>
              <h3>Вижа</h3>
              <p className={s.cat_location}>город Курахово, ДНР</p>
              <p className={s.cat_desc}>Вижа жила в разрушенном городе. Когда все рушилось, она осталась верна своим хозяевам. Ее спасли волонтеры, и теперь она — настоящий символ надежды и верности.</p>
            </div>
            {/* Холли */}
            <div className={s.cat_card}>
              <div className={s.cat_img_wrapper}>
                <img src={catHolly} alt="Холли" />
              </div>
              <h3>Холли</h3>
              <p className={s.cat_location}>Курская область</p>
              <p className={s.cat_desc}>Холли родилась в прифронтовом городе. Ее дом был разрушен, но она выжила благодаря неравнодушным людям. Теперь Холли живет в театре, окруженная заботой и любовью.</p>
            </div>
          </div>
        </section>

        {/* --- СЕКЦИЯ 2: КТО ПОМОГАЕТ ПРОЕКТУ --- */}
        <section className={s.section}>
          <div className={s.title_center}>
            <h2>Кто помогает проекту</h2>
            <div className={s.title_line}></div>
          </div>

          <div className={s.helpers_grid}>
            <div className={s.helper_card}>
              <img src={helper1} alt="Дмитрий Куклачев" className={s.helper_img} />
              <h3>Дмитрий Куклачев</h3>
              <p className={s.helper_role}>первый заместитель художественного руководителя театра</p>
              <p className={s.helper_desc}>Помогает кошкам восстановиться и раскрыться через бережную работу, игру и внимание.</p>
            </div>
            <div className={s.helper_card}>
              <img src={helper2} alt="ГК ВИК" className={s.helper_img} />
              <h3>ГК ВИК</h3>
              <p className={s.helper_role}>производитель ветеринарных препаратов</p>
              <p className={s.helper_desc}>Организует гуманитарную помощь и поддерживает приют "Кошкин дом".</p>
            </div>
            <div className={s.helper_card}>
              <img src={helper3} alt="Евгения Михайлова" className={s.helper_img} />
              <h3>Евгения Михайлова</h3>
              <p className={s.helper_role}>руководитель АНО «Кошкин дом»</p>
              <p className={s.helper_desc}>С командой волонтеров спасает животных из опасных зон и помогает им найти семьи.</p>
            </div>
          </div>
        </section>

        {/* --- СЕКЦИЯ 3: ИЗ ПРИЮТА НА СЦЕНУ --- */}
        <section className={s.section}>
          <div className={s.title_center}>
            <h2>Из приюта на сцену</h2>
            <div className={s.title_line}></div>
          </div>
          <div className={s.shelter_story}>
            <img src={manWithCat} alt="Мужчина с котом" className={s.story_img} />
            <div className={s.story_text}>
              <p>Идея проекта появилась в мае 2025 года на фестивале «Хвостатый пикник», организованном ГК ВИК. Там Евгения Михайлова рассказала о спасении животных из зоны СВО, а у театра возникла мысль принять в труппу фронтовых кошек.</p>
              <p>В июне три подопечные «Кошкиного дома» - Вижа, Холли и Глуша - переехали в Москву. Защитники начали не сразу: кошкам дали время восстановиться, набраться сил и привыкнуть к людям.</p>
              <p className={s.highlight}>Это не дрессура через давление. Это работа через прикосновения, взгляд, игру, терпение и уважение к характеру животного.</p>
              <p>Так истории спасения стали частью большого дела: реабилитации, социализации и пристройства животных, которые пережили войну.</p>
            </div>
          </div>
        </section>

        {/* --- СЕКЦИЯ 4: БЕЗДОМНЫЕ ЖИВОТНЫЕ В ЗОНЕ СВО --- */}
        <section className={s.section}>
          <div className={s.title_center}>
            <h2>Бездомные животные в зоне СВО</h2>
            <div className={s.title_line}></div>
          </div>
          <div className={s.two_columns}>
            <p>Животные оказываются без дома по-разному: кто-то уже потерял хозяина, кто-то остался на улице, где жил. Кто-то родился у дома с военными позициями и разрушенными домами. К людям из пустых квартир и подвалов, прячутся в окопах, делают с бойцами людей в короткие минуты тишины между обстрелами.</p>
            <p className={s.highlight}>Бойцы спасают животных, потому что сострадание остается человеческой потребностью даже там, где вокруг война.</p>
            <p>Каждая такая история напоминает: помощь животному часто становится помощью человеку, которому важно сохранить связь с мирной жизнью.</p>
          </div>
        </section>

        {/* --- СЕКЦИЯ 5: ПРИЮТ "КОШКИН ДОМ" --- */}
        <section className={s.section}>
          <div className={s.title_center}>
            <h2>Кошкин дом</h2>
            <div className={s.title_line}></div>
          </div>
          <div className={s.shelter_block}>
            <div className={s.shelter_text}>
              <h3>Приют "Кошкин дом"</h3>
              <p>История приюта началась в марте 2022 года в Мариуполе с одного кота. Запертое в подвале.</p>
              <p>Волонтер Евгения Михайлова из Донецка отправилась его спасать, а по дороге команда находила все новых животных, оставшихся в подвалах и руинах.</p>
              <p>Первого кота, Маркиза, удалось спасти спустя три недели. Теперь он живет у Евгении и стал символом проекта. В декабре 2023 года "Кошкин дом" был зарегистрирован как некоммерческая организация.</p>
            </div>
            <div className={s.shelter_images}>
              <img src={shelterMain} alt="Приют" className={s.shelter_main_img} />
              <div className={s.shelter_small_imgs}>
              </div>
            </div>
          </div>

          <div className={s.stats_row}>
            <div className={s.stat_box}><h4>6.6<br/>Тыс.</h4><p>Спасенных кошек и собак</p></div>
            <div className={s.stat_box}><h4>200<br/>Животных</h4><p>ждут дом</p></div>
            <div className={s.stat_box}><h4>8<br/>Волонтеров</h4><p>помогают каждый день</p></div>
          </div>
        </section>

        {/* --- СЕКЦИЯ 6: КОТЯТА ИЩУТ ДОМ --- */}
        <section className={s.section}>
          <div className={s.title_center}>
            <h2>Котята из Донбасса ищут дом</h2>
            <div className={s.title_line}></div>
          </div>
          <div className={s.final_story}>
            <div className={s.final_text}>
              <p>Истории Вижи, Холли и Глуши стали началом большого дела. Театр кошек Куклачева совместно с ГК ВИК запускает программу по реабилитации и пристройству фронтовых животных.</p>
              <p>В театре животные восстанавливаются, учатся снова доверять людям, привыкают к спокойному быту и вниманию. После этого партнеры помогают найти им новые дома.</p>
              <p>Сейчас кошек хозяев ждут братья из Донбасса. Им 4-5 месяцев, они приучены к лотку, едят сухой корм, активны, любопытны и готовы к жизни рядом с человеком.</p>
              <p className={s.contact_info}>По вопросам пристройства:<br/>Натали: 8-926-125-00-13</p>
              <p className={s.small_text}>Проект реализуется при участии АНО «Кошкин дом», Театра кошек Куклачева и ГК ВИК.</p>
            </div>
            <div className={s.final_images}>
            <img src={cattery} alt="Котята" className={s.final_img_main} />
            </div>
          </div>
        </section>

      </main>

      <Footer />
    </div>
  );
};