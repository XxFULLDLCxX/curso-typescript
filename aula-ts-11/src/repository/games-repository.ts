import { db } from '../config/db-connection';
import { Game, GameBase } from '../protocols/game-protocol';

function getGames() {
  return db.query<GameBase>(`SELECT * FROM "games";`);
}

function createGame(game: Game) {
  return db.query(`INSERT INTO "games" ("title", "platform") VALUES ($1, $2);`, [game.title, game.platform]);
}

function getGameByTitleAndPlatform(game: Game) {
  return db.query<GameBase>(`SELECT * FROM "games" WHERE "title" = $1 AND "platform" = $2;`, [
    game.title,
    game.platform,
  ]);
}

const gamesRepository = {
  getGames,
  getGameByTitleAndPlatform,
  createGame,
};

export default gamesRepository;
