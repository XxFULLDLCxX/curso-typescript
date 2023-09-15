type Platform = {
  id: Number;
  name: String;
};

export type Game = {
  id: Number;
  platform: Platform;
  title: String;
  publisher: String;
  launch?: String | Date;
};
