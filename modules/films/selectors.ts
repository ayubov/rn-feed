import { RootState } from '../../store';

export const selectFilms = (state: RootState) =>
  state.films.ids.map(id => state.films.entities[id]);

export const selectFilmsAreLoading = (state: RootState) => state.films.loading;

export const selectFilmById = (id: string) => (state: RootState) => state.films.entities[id];
