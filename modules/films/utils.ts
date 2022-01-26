import { IFilm, NormalizedFilms } from './types';

const REQUEST_TIME = 1000;

export const fakeRequest = <T>(response: T): Promise<T> =>
  new Promise(resolve => {
    setTimeout(() => resolve(response), REQUEST_TIME);
  });

export const normalizeFilms = (films: IFilm[]) =>
  films.reduce<NormalizedFilms>((acc, film) => {
    acc[film.id] = film;
    return acc;
  }, {});
