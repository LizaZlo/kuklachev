import type { FC } from 'react';
import s from './section-title.module.scss';

interface IProps {
  title: string;
}

export const SectionTitle: FC<IProps> = ({ title }) => {
  return (
    <div className={s.title_wrapper}>
      <h2 className={s.title}>{title}</h2>
      <div className={s.line}></div>
    </div>
  );
};