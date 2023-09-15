import gamesRepository from '../repository/games-repository';
import { Game } from './../protocols/game-protocol';

async function getGames() {
  return (await gamesRepository.getGames()).rows;
}

async function createGame(game: Game) {
  if (await gameAlreadyExists(game)) {
    throw { message: 'Game already exists' };
  }

  await gamesRepository.createGame(game);
}

async function gameAlreadyExists(game: Game): Promise<boolean> {
  const result = (await gamesRepository.getGameByTitleAndPlatform(game)).rows;
  console.log(result);
  
  return result.length > 0;
}

const gamesService = {
  getGames,
  createGame,
};

export default gamesService;
