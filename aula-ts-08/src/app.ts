import { Game } from 'types/game-types';

const game: Game = {
  id: 1,
  platform: {
    id: 1,
    name: 'Playstation',
  },
  title: 'The Last of Us',
  publisher: 'Naughty Dog',
  launch: '2013-06-14', // pode ser um Date. É opcional (para jogos ainda não lançados).
};

const games: Array<Game> = [game];

function play(game: Game) {
  // runs the game
  console.log(game);
}

(() => {
  games.forEach((game) => {
    play(game);
  });
})();
