import logo from 'C:/react-starter-template/template/src/shared/assets/images/footer-logo.png';
import tgIcon from 'C:/react-starter-template/template/src/shared/assets/images/icon-tg.png';
import vkIcon from 'C:/react-starter-template/template/src/shared/assets/images/icon-vk.png';
import okIcon from 'C:/react-starter-template/template/src/shared/assets/images/icon-ok.png';
import catFooter from 'C:/react-starter-template/template/src/shared/assets/images/cat-footer.png';
import s from './footer.module.scss';

export const Footer = () => {
  return (
    <footer className={s.footer}>
      <div className={s.footer__container}>
        
        <div className={s.footer__logo_wrapper}>
          <img src={logo} alt="Театр Куклачева" className={s.footer__logo} />
        </div>

        <div className={s.footer__info}>
          <p>Справки и заказ билетов по телефонам:<br/>+7(499)243-40-05</p>
          <p>Электронная почта стола заказа билетов:<br/>teatr.ku klacheva@mail.ru</p>
          <p>Художественный руководитель театра -<br/>Народный артист России Юрий Дмитриевич Куклачев</p>
        </div>

        <div className={s.footer__contacts}>
          <div className={s.footer__social_block}>
            <img src={tgIcon} alt="Telegram" className={s.footer__icon} />
            <a href="#" className={s.footer__link}>Наш телеграм канал</a>
          </div>
          
          <div className={s.footer__buy_block}>
            <span className={s.footer__buy_title}>Купить билеты</span>
            <div className={s.footer__icons_row}>
              <a href="#"><img src={tgIcon} alt="Telegram" className={s.footer__icon_round} /></a>
              <a href="#"><img src={vkIcon} alt="VK" className={s.footer__icon_round} /></a>
              <a href="#"><img src={okIcon} alt="OK" className={s.footer__icon_badge} /></a>
            </div>
          </div>
          
          <img src={catFooter} alt="Кот" className={s.footer__cat} />
        </div>
        
      </div>

      <div className={s.footer__bottom_line}></div>
    </footer>
  );
};