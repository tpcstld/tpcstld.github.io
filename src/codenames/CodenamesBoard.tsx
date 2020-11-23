import {
  CodenamesCard,
  CodenamesBoardType,
  CodenamesCardType,
} from './CodenameConstants';

import styles from './CodenamesBoard.module.css';

const CARD_TYPE_STYLES = {
  [CodenamesCardType.UNKNOWN]: styles.typeUnknown,
  [CodenamesCardType.RED]: styles.typeRed,
  [CodenamesCardType.BLUE]: styles.typeBlue,
  [CodenamesCardType.ASSASSIN]: styles.typeAssassin,
  [CodenamesCardType.NEUTRAL]: styles.typeNeutral,
};

interface CardProps {
  card: CodenamesCard;
  onClick: () => void;
}

function Card({card, onClick}: CardProps) {
  const interactable = card.type === CodenamesCardType.UNKNOWN;

  return (
    <div
      className={`${styles.card} ${CARD_TYPE_STYLES[card.type]} ${
        interactable ? styles.interactable : ''
      }`}
      onClick={onClick}
      tabIndex={interactable ? 0 : undefined}
    >
      <span className={styles.cardText}>{card.content}</span>
    </div>
  );
}

interface CodenamesBoardProps {
  board: CodenamesBoardType;
  onClick?: (index: number) => void;
}

export default function CodenamesBoard({board, onClick}: CodenamesBoardProps) {
  return (
    <div className={styles.board}>
      {board.map((card, index) => (
        <Card key={index} card={card} onClick={() => onClick?.(index)} />
      ))}
    </div>
  );
}
