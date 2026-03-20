import { InfoCard } from '../InfoCard/InfoCard';
import styles from './InfoCardRow.module.css';

type CardData = {
  title: string;
  subtitle?: string;
  onClick?: () => void;
};

type InfoCardRowProps = {
  cards: CardData[];
};

export function InfoCardRow({ cards }: InfoCardRowProps) {
  return (
    <div className={styles.row}>
      {cards.map((card, i) => (
        <InfoCard key={i} title={card.title} subtitle={card.subtitle} onClick={card.onClick} />
      ))}
    </div>
  );
}
