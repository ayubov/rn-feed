import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

import data from './_data';
import { fakeRequest, normalizeFilms } from './utils';
import { FilmsState, IFilm } from './types';
import { RootState } from '../../store';

export const fetchFilms = createAsyncThunk<
  IFilm[],
  number,
  {
    state: RootState;
  }
>('films/fetchFilms', (limit, { getState }) => {
  const offset = getState().films.ids.length;
  return fakeRequest<IFilm[]>(data.slice(offset, offset + limit));
});

export const refreshFilms = createAsyncThunk<
  IFilm[],
  number,
  {
    state: RootState;
  }
>('films/refreshFilms', limit => fakeRequest<IFilm[]>(data.slice(0, limit)));

const filmsSlice = createSlice({
  name: 'films',
  initialState: { ids: [], entities: {}, loading: false } as FilmsState,
  reducers: {},
  extraReducers: builder => {
    // fetchFilms
    builder.addCase(fetchFilms.fulfilled, (state, action) => {
      const normalizedFilms = normalizeFilms(action.payload);
      state.entities = { ...state.entities, ...normalizedFilms };
      state.ids.push(...Object.keys(normalizedFilms));
      state.loading = false;
    });

    builder.addCase(fetchFilms.rejected, state => {
      /* eslint-disable-next-line no-console */
      console.error('Error!');
      state.loading = false;
    });

    builder.addCase(fetchFilms.pending, state => {
      state.loading = true;
    });

    // refreshFilms
    builder.addCase(refreshFilms.fulfilled, (state, action) => {
      const normalizedFilms = normalizeFilms(action.payload);
      state.entities = normalizedFilms;
      state.ids = Object.keys(normalizedFilms);
      state.loading = false;
    });

    builder.addCase(refreshFilms.rejected, state => {
      /* eslint-disable-next-line no-console */
      console.error('Error!');
      state.loading = false;
    });

    builder.addCase(refreshFilms.pending, state => {
      state.loading = true;
    });
  },
});

export default filmsSlice;
