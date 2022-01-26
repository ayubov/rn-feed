import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { selectFilms, selectFilmsAreLoading, fetchFilms, refreshFilms, IFilm } from 'modules/films';

type UseFilmReturnType = {
  films: IFilm[];
  loading: boolean;
  fetchMore: () => void;
  refresh: () => void;
};

export const useFilms = (limit: number): UseFilmReturnType => {
  const dispatch = useDispatch();
  const films = useSelector(selectFilms);
  const loading = useSelector(selectFilmsAreLoading);

  const fetchMore = () => {
    dispatch(fetchFilms(limit));
  };

  const refresh = () => {
    dispatch(refreshFilms(limit));
  };

  useEffect(() => {
    fetchMore();
  }, []);

  return { films, fetchMore, refresh, loading };
};
