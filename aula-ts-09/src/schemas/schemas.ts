import Joi from 'joi';
import { Music } from '../types/music-types.js';

const music = Joi.object<Music>({
  title: Joi.string().required(),
  artist: Joi.string().required()
});

export const schemas = {
  music
};
