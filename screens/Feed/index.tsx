import React from 'react';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import styled from 'styled-components/native';

import { Screen, Card } from 'components';
import { RootStackParamList, Routes } from 'navigation/types';
import { IFilm } from 'modules/films';

import { useFilms } from './hooks';

type Props = NativeStackScreenProps<RootStackParamList, Routes.feed>;

const StyledFlatList = styled.FlatList({ padding: 8 });

const LIMIT = 10;
const Feed: React.FC<Props> = ({ navigation }) => {
  const { films, refresh, loading, fetchMore } = useFilms(LIMIT);
  const showSkeletons = !films.length && loading;

  return (
    <Screen>
      {showSkeletons && (
        <StyledFlatList
          showsVerticalScrollIndicator={false}
          data={Array(LIMIT).fill({})}
          keyExtractor={(_, index) => `${index}`}
          renderItem={({ index }) => (
            <Card
              marginTop={8}
              title="Dummy title"
              subtitle1={`#${index}`}
              subtitle2="Dummy subtitle, longer than dummy title. Probably splits into two lines"
              loading
            />
          )}
        />
      )}
      {!showSkeletons && (
        <StyledFlatList
          showsVerticalScrollIndicator={false}
          data={films}
          refreshing={loading}
          renderItem={({ item }) => {
            const _item = item as IFilm;
            return (
              <Card
                marginTop={8}
                title={_item.fullTitle}
                subtitle1={`#${_item.rank}`}
                subtitle2={_item.crew}
                onPress={() =>
                  navigation.navigate(Routes.post, { id: _item.id, title: _item.title })
                }
              />
            );
          }}
          onEndReachedThreshold={0.5}
          onEndReached={() => !loading && fetchMore()}
          onRefresh={refresh}
        />
      )}
    </Screen>
  );
};

export default Feed;
