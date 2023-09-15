export type GameBase = {
  id: Number;
  title: String;
  platform: String;
}

export type Game = Omit<GameBase, 'id'>;
