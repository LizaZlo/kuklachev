import { Header } from './components/header';
import { Hero } from './components/hero/hero';
import { Poster } from './components/poster/poster';
import { Excursions } from './components/excursions/excursions';
import { Tours } from './components/tours/tours';
import { Performances } from './components/performances/performances';
import { Events } from './components/events/events';
import { Press } from './components/press/press';
import { Troupe } from './components/troupe/troupe';
import { Shelter } from './components/shelter/shelter';
import { Faq } from './components/faq/faq';
import { Footer } from './components/footer';
import s from './main.module.scss';

export const Main = () => {
  return (
    <main className={s.main}>
      <Hero />
      <Header />
      <Poster />
      <Excursions />
      <Tours />
      <Performances />
      <Events />
      <Press />
      <Troupe />
      <Shelter />
      <Faq />
      <Footer />
    </main>
  );
};