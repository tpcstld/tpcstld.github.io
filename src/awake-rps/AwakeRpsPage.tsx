import {CSSProperties, useCallback, useState} from 'react';
import {Helmet} from 'react-helmet';

import PageWrapper from '../info-pages/PageWrapper';

import styles from './AwakeRpsPage.module.css';

enum Choices {
  ROCK = 'Rock',
  PAPER = 'Paper',
  SCISSORS = 'Scissors',
}

const MAX_CHOICE = 3;

function getProbabilityStyles(probability: number): string {
  if (probability === 0) {
    return '';
  }

  if (probability < 0) {
    return styles.bad;
  }

  return styles.good;
}

type ExpectedValue = {
  ev: number;
  lossChance: number;
};

function calculateExpectedValue(
  currentChosen: number,
  winnerChosen: number,
  loserChosen: number,
): ExpectedValue {
  const winnerLeft = MAX_CHOICE - winnerChosen;
  const currentLeft = MAX_CHOICE - currentChosen;
  const loserLeft = MAX_CHOICE - loserChosen;

  const totalLeft = winnerLeft + currentLeft + loserLeft;

  return {
    ev: (1 * winnerLeft + 0 * currentLeft + -1 * loserLeft) / totalLeft,
    lossChance: loserLeft / totalLeft,
  };
}

interface PlaySelectorProps {
  numItem: number;
  setNumItem: (newNum: number) => void;
  name: Choices;
}

function PlaySelector({numItem, setNumItem, name}: PlaySelectorProps) {
  return (
    <div className={styles.selectorItem}>
      <button
        className={styles.selectorButton}
        onClick={() => setNumItem(numItem + 1)}
        disabled={numItem === MAX_CHOICE}
      >
        <span className={styles.selectorButtonText}>{name}</span>
      </button>
      <div className={styles.selectorItemCount}>{numItem}</div>
    </div>
  );
}

interface AnalysisSectionProps {
  numRock: number;
  numScissors: number;
  numPaper: number;
}

function AnalysisSection({
  numRock,
  numPaper,
  numScissors,
}: AnalysisSectionProps) {
  if (numRock === 0 && numPaper === 0 && numScissors === 0) {
    return <span>Rock gang for life!</span>;
  }

  if (
    numRock === MAX_CHOICE &&
    numPaper === MAX_CHOICE &&
    numScissors === MAX_CHOICE
  ) {
    return <span>Press reset for the new round!</span>;
  }

  const expectedValues = {
    [Choices.ROCK]: calculateExpectedValue(numRock, numScissors, numPaper),
    [Choices.PAPER]: calculateExpectedValue(numPaper, numRock, numScissors),
    [Choices.SCISSORS]: calculateExpectedValue(numScissors, numPaper, numRock),
  };

  console.log(expectedValues);

  const bestOption = Object.entries(expectedValues).sort(
    ([_firstChoice, firstEv], [_secondChoice, secondEv]) => {
      if (firstEv.ev === secondEv.ev) {
        return 0;
      }

      return firstEv.ev > secondEv.ev ? -1 : 1;
    },
  )[0];

  const bestChoice = bestOption[0];

  return (
    <table className={styles.table}>
      <thead className={styles.tableHeader}>
        <th className={styles.heading}>Choice</th>
        <th className={styles.heading}>EV</th>
        <th className={styles.heading}>Loss</th>
      </thead>
      {Object.entries(expectedValues).map(([choice, ev]) => (
        <tr key={choice}>
          <td
            className={`${styles.choices} ${
              bestChoice === choice ? styles.good : ''
            }`}
          >
            {choice}
          </td>
          <td className={`${styles.numbers} ${getProbabilityStyles(ev.ev)}`}>
            {ev.ev.toFixed(2)}
          </td>
          <td
            className={`${styles.numbers} ${getProbabilityStyles(
              ev.lossChance,
            )}`}
          >
            {ev.lossChance.toFixed(2)}
          </td>
        </tr>
      ))}
    </table>
  );
}

export default function AwakeRpsPage() {
  const [numRock, setNumRock] = useState(0);
  const [numPaper, setNumPaper] = useState(0);
  const [numScissors, setNumScissors] = useState(0);

  const handleReset = useCallback(() => {
    setNumRock(0);
    setNumPaper(0);
    setNumScissors(0);
  }, []);

  return (
    <PageWrapper>
      <Helmet>
        <title>Awake RPS Calculator</title>
      </Helmet>
      <div className={styles.header}>
        <h1>Awake RPS Calculator</h1>
        <button className={styles.reset} onClick={handleReset}>
          Reset
        </button>
      </div>
      <div className={styles.selectorContainer}>
        <PlaySelector
          name={Choices.ROCK}
          numItem={numRock}
          setNumItem={setNumRock}
        />
        <PlaySelector
          name={Choices.PAPER}
          numItem={numPaper}
          setNumItem={setNumPaper}
        />
        <PlaySelector
          name={Choices.SCISSORS}
          numItem={numScissors}
          setNumItem={setNumScissors}
        />
      </div>
      <div className={styles.dataContainer}>
        <h2>Results</h2>
        <AnalysisSection
          numRock={numRock}
          numPaper={numPaper}
          numScissors={numScissors}
        />
      </div>
    </PageWrapper>
  );
}
