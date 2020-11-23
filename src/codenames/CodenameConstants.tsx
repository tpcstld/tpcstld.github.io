export enum CodenamesCardType {
  UNKNOWN,
  BLUE,
  RED,
  ASSASSIN,
  NEUTRAL,
}

export const NUM_CARDS = 25;

export const NUM_FIRST_PLAYER = 9;
export const NUM_SECOND_PLAYER = 8;
export const NUM_ASSASSIN = 1;
export const NUM_NEUTRAL =
  NUM_CARDS - NUM_FIRST_PLAYER - NUM_SECOND_PLAYER - NUM_ASSASSIN;

export type CodenamesCard = {
  type: CodenamesCardType;
  content: string;
};

export type CodenamesBoardType = Array<CodenamesCard>;

export type GameState = {
  firstPlayer: CodenamesCardType;
  board: CodenamesBoardType;
};
