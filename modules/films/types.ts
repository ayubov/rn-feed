export type IFilm = {
  id: string;
  rank: string;
  title: string;
  fullTitle: string;
  year: string;
  image: string;
  crew: string;
  imDbRating: string;
  imDbRatingCount: string;
};

export type NormalizedFilms = Record<string, IFilm>;

export type FilmsState = {
  ids: string[];
  entities: NormalizedFilms;
  loading: boolean;
};
