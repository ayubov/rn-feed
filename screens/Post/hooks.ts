import { useSelector } from 'react-redux';

import { selectFilmById, IFilm } from 'modules/films';

export const useFilm = (id: string): IFilm => useSelector(selectFilmById(id));
