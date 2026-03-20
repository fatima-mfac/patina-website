import type { ReactNode } from 'react';
import { ArrowForward } from '../ArrowForward/ArrowForward';
import styles from './InfoCard.module.css';

type InfoCardProps = {
  title: ReactNode;
  subtitle?: ReactNode;
  onClick?: () => void;
};

export function InfoCard({ title, subtitle, onClick }: InfoCardProps) {
  const Tag = onClick ? 'button' : 'div';

  return (
    <Tag
      className={styles.card}
      onClick={onClick}
      {...(onClick ? { type: 'button' as const } : {})}
    >
      <div className={styles.text}>
        <span className={styles.title}>{title}</span>
        {subtitle && <span className={styles.subtitle}>{subtitle}</span>}
      </div>
      <ArrowForward className={styles.arrow} />
    </Tag>
  );
}
