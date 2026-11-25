import { SectionTitle } from '../section-title/section-title';
import shelterImg from '../../../../shared/assets/images/shelter-save.png';
import { ArrowBtn } from '../ui/arrow-btn/arrow-btn';
import s from './shelter.module.scss';

export const Shelter = () => {
  return (
    <section className={s.shelter}>
      <SectionTitle title='Приют "Кошкин дом"' />
      <div className={s.content_wrapper}>
        <div className={s.text}>
          История приюта началась в марте 2022 года в Мариуполе с одного кота, запертого в подвале.
          Волонтер Евгения Михайлова из Донецка отправилась его спасать, а по дороге команда находила все новых животных, оставшихся в подвалах и руинах.
          <p></p>
          Первого кота, Маркиза, удалось спасти спустя три недели. Теперьион живет у Евгении и считается символом приюта.
          В декабре 2023 года "Кошкин дом" был зарегистрирован как некоммерческая организация.
        </div>
        <img src={shelterImg} alt="Приют" className={s.image} />
      </div>
      
      <div className={s.stats}>
        <div className={s.stat_box}><h4>6.6 Тыс.</h4>Спасенных кошек и собак</div>
        <div className={s.stat_box}><h4>200</h4>Животных ждут дом</div>
        <div className={s.stat_box}><h4>8</h4>Волонтеров помогают каждый день</div>
      </div>
      <ArrowBtn />
    </section>
  );
};