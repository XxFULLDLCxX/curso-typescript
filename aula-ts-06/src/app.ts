const game: {
  id: Number,
  platform: {
    id: Number,
    name: String,
  },
  title: String,
  publisher: String,
  launch?: String | Date
} = {
  id: 1,
  platform: {
    id: 1,
    name: 'Playstation',
  },
  title: 'The Last of Us',
  publisher: 'Naughty Dog',
  launch: '2013-06-14', // pode ser um Date. É opcional (para jogos ainda não lançados).
};

const games: Array<{
  id: Number,
  platform: {
    id: Number,
    name: String,
  },
  title: String,
  publisher: String,
  launch?: String | Date
}> = [game];

function play(game: {
  id: Number,
  platform: {
    id: Number,
    name: String,
  },
  title: String,
  publisher: String,
  launch?: String | Date
}) {
  // runs the game
  console.log(game);
}

(() => {
  games.forEach((game) => {
    play(game);
  });
})();
