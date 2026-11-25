import { useState } from 'react';
import { SectionTitle } from '../section-title/section-title';
import { ArrowBtn } from '../ui/arrow-btn/arrow-btn';
import s from './faq.module.scss';

const FAQS = [
  {
    id: 1,
    question: 'До какого возраста ребенок может посещать театр бесплатно?',
    answer: 'Дети до 3-х лет могут посещать театр бесплатно (без предоставления отдельного места).',
  },
  {
    id: 2,
    question: 'Какие категории граждан могут посещать театр на льготной основе?',
    answer: 'Льготы предоставляются многодетным семьям, пенсионерам, студентам и людям с ограниченными возможностями здоровья (при предъявлении документа).',
  },
  {
    id: 3,
    question: 'Могут ли посещать наш театр люди с ограниченными возможностями?',
    answer: 'Да, наш театр оборудован пандусами и специальными местами для маломобильных групп населения.',
  },
  {
    id: 4,
    question: 'Сколько длится спектакль?',
    answer: 'Средняя продолжительность спектакля — 1 час 30 минут с учетом антракта.',
  },
];

export const Faq = () => {
  const [openId, setOpenId] = useState<number | null>(null);

  const toggleFaq = (id: number) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section className={s.faq}>
      <SectionTitle title="Часто задаваемые вопросы" />
      
      <div className={s.list}>
        {FAQS.map((item) => (
          <div 
            key={item.id} 
            className={`${s.item} ${openId === item.id ? s.active : ''}`}
          >
            <div className={s.question_wrapper} onClick={() => toggleFaq(item.id)}>
              <span className={s.icon}>?</span>
              <span className={s.question_text}>{item.question}</span>
              
              <span className={s.arrow}>▼</span>
            </div>

            <div className={s.answer_wrapper}>
              <p className={s.answer}>{item.answer}</p>
            </div>
          </div>
        ))}
      </div>
      
      <ArrowBtn />
    </section>
  );
};