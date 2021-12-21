import classNames from 'classnames';
import {Fragment, useEffect, useState} from 'react';
import {Helmet} from 'react-helmet';
import PageWrapper from '../info-pages/PageWrapper';

import styles from './CardsPage.module.css';

enum Side {
  LEFT = 'left',
  RIGHT = 'right',
}

const LOCALSTORAGE_KEY = 'save';

interface ButtonPairProps {
  value: number;
  selectedSide: Side | null;
  onSideSelected: (side: Side) => void;
}

function ButtonPair({value, selectedSide, onSideSelected}: ButtonPairProps) {
  const content = value > 0 ? `+${value}` : `${value}`;

  return (
    <>
      <button
        className={classNames(styles.button, {
          [styles.selectedButton]: selectedSide === Side.LEFT,
        })}
        onClick={() => onSideSelected(Side.LEFT)}
      >
        {content}
      </button>
      <button
        className={classNames(styles.button, {
          [styles.selectedButton]: selectedSide === Side.RIGHT,
        })}
        onClick={() => onSideSelected(Side.RIGHT)}
      >
        {content}
      </button>
    </>
  );
}

const BUTTON_VALUES = [8, 4, 2, -2, -4, -8];
const DEFAULT_SIDES = [null, null, null, null, null, null];

function calculatePendingScore(
  selectedSides: Array<Side | null>
): Record<Side, number> {
  const result = {
    [Side.LEFT]: 0,
    [Side.RIGHT]: 0,
  };

  for (let xx = 0; xx < BUTTON_VALUES.length; xx++) {
    const value = BUTTON_VALUES[xx];
    const side = selectedSides[xx];
    if (side == null) {
      continue;
    }

    result[side] = result[side] + value;
  }

  return result;
}

export default function CardsPage() {
  const [leftScore, setLeftScore] = useState(0);
  const [rightScore, setRightScore] = useState(0);
  const [history, setHistory] = useState<Array<Record<Side, number>>>([]);
  const [tryLoad, setTryLoad] = useState(false);

  const [selectedSides, setSelectedSides] =
    useState<Array<Side | null>>(DEFAULT_SIDES);

  const pendingScores = calculatePendingScore(selectedSides);

  const allPendingScoresOk =
    selectedSides.findIndex((side) => side == null) == -1;

  useEffect(() => {
    const data = window.localStorage.getItem(LOCALSTORAGE_KEY);
    if (data == null) {
      setTryLoad(true);
      return;
    }
    const parsed = JSON.parse(data);
    setLeftScore(parsed.leftScore);
    setRightScore(parsed.rightScore);
    setHistory(parsed.history);

    setTryLoad(true);
  }, []);

  useEffect(() => {
    if (!tryLoad) {
      return;
    }

    window.localStorage.setItem(
      LOCALSTORAGE_KEY,
      JSON.stringify({
        version: 1,
        leftScore,
        rightScore,
        history,
      })
    );
  }, [leftScore, rightScore, history]);

  function handleCommit() {
    if (!allPendingScoresOk) {
      return;
    }

    setHistory([pendingScores, ...history]);
    setLeftScore(leftScore + Math.max(0, pendingScores[Side.LEFT]));
    setRightScore(rightScore + Math.max(0, pendingScores[Side.RIGHT]));
    setSelectedSides(DEFAULT_SIDES);
  }

  const [resetConfirm, setResetConfirm] = useState(false);
  useEffect(() => {
    if (!resetConfirm) {
      return;
    }
    const timeoutId = setTimeout(() => setResetConfirm(false), 5000);
    return () => clearTimeout(timeoutId);
  }, [resetConfirm]);
  function handleReset() {
    if (!resetConfirm) {
      setResetConfirm(true);
      return;
    }

    setLeftScore(0);
    setRightScore(0);
    setHistory([]);
    setSelectedSides(DEFAULT_SIDES);
    setResetConfirm(false);
    window.localStorage.removeItem(LOCALSTORAGE_KEY);
  }
  return (
    <PageWrapper>
      <Helmet htmlAttributes={{lang: 'en'}}>
        <title>Card Calculator</title>
        <meta
          name="description"
          content="Helping a friend keep track of card scores."
        />
      </Helmet>
      <div className={styles.outerContainer}>
        <h1>Card Calculator</h1>
        <button className={styles.resetButton} onClick={handleReset}>
          {resetConfirm ? 'Confirm' : 'Reset'}
        </button>
        <div className={styles.container}>
          {BUTTON_VALUES.map((value, index) => (
            <ButtonPair
              key={value}
              value={value}
              selectedSide={selectedSides[index]}
              onSideSelected={(side) => {
                const newSides = [...selectedSides];
                newSides[index] = side;
                setSelectedSides(newSides);
              }}
            />
          ))}

          <div className={styles.pendingScore}>{pendingScores[Side.LEFT]}</div>
          <div className={styles.pendingScore}>{pendingScores[Side.RIGHT]}</div>
          <button
            className={classNames(styles.commit, styles.button)}
            onClick={handleCommit}
            disabled={!allPendingScoresOk}
          >
            Done
          </button>
        </div>
        <h2>Scores</h2>
        <div className={styles.container}>
          <span>
            Team 1: <b>{leftScore}</b>
          </span>
          <span>
            Team 2: <b>{rightScore}</b>
          </span>
        </div>
        <h2>History</h2>
        <div className={styles.container}>
          {history.map((element, index) => (
            <Fragment key={index}>
              <span>{element[Side.LEFT]}</span>
              <span>{element[Side.RIGHT]}</span>
            </Fragment>
          ))}
        </div>
      </div>
    </PageWrapper>
  );
}
